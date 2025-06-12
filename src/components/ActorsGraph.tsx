import { useRef, useEffect, useState, type MutableRefObject } from 'react'
import ForceGraph2D, {
  type ForceGraphMethods,
  type NodeObject,
  type LinkObject,
} from 'react-force-graph-2d'
import { forceCollide } from 'd3-force-3d'
import actorGraphData from '../data/actorsData'
import type { Actor } from '../models/actor/actor'
import type { Link } from '../models/graph/link'
import ActorSidebar from './ActorSidebar'

function ActorsGraph() {
  const fgRef = useRef<
    ForceGraphMethods<NodeObject<Actor>, LinkObject<Actor, Link>> | undefined
  >(undefined) as MutableRefObject<
    ForceGraphMethods<NodeObject<Actor>, LinkObject<Actor, Link>> | undefined
  >

  const MAX_NODE_SIZE = 20; // Maximum node size
  const [selectedActor, setSelectedActor] = useState<Actor | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const title = titleRef.current;
    if (!title) return;

    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height: height - title.offsetHeight - TITLE_MARGIN_OFFSET }); // Adjust height and margin to account for title
      }
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, [])

  const drawNode = (
    node: NodeObject<Actor>,
    ctx: CanvasRenderingContext2D,
    globalScale: number,
  ) => {
    // Extended typing to store the "broken" state
    const typedNode = node as NodeObject<Actor> & {
      __img?: HTMLImageElement;
      __imgBroken?: boolean;
    };

    // Initialisation ou réutilisation de l'image
    let img = typedNode.__img;
    if (!img) {
      img = new Image();
      typedNode.__img = img;
      img.src = node.image; // Assurez-vous que node.image est un chemin valide
      img.onload = () => fgRef.current?.d3ReheatSimulation();
      img.onerror = () => {
        typedNode.__imgBroken = true;
        // éventuellement re-dessiner le canvas
        fgRef.current?.d3ReheatSimulation();
      };
    }

    // Si pas encore positionné, sortir
    if (node.x == null || node.y == null) return;

    let imageWidth = img.naturalWidth;
    let imageHeight = img.naturalHeight;

    if (!imageWidth || !imageHeight) {
      imageWidth = MAX_NODE_SIZE;
      imageHeight = MAX_NODE_SIZE;
    } else {
      const maxDimension = Math.max(imageWidth, imageHeight) / globalScale;
      const scaleFactor = MAX_NODE_SIZE / maxDimension;

      if (maxDimension > MAX_NODE_SIZE) {
        imageWidth *= scaleFactor;
        imageHeight *= scaleFactor;
      }
    }

    const halfWidth = imageWidth / 2;
    const halfHeight = imageHeight / 2;

    // Dessiner une forme de secours si l'image est cassée ou pas encore chargée
    if (typedNode.__imgBroken || !img.complete || img.naturalWidth === 0) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, halfWidth, 0, 2 * Math.PI, false);
      ctx.fillStyle = '#ccc';
      ctx.fill();
    } else {
      ctx.drawImage(img, node.x - halfWidth, node.y - halfHeight, imageWidth, imageHeight);
    }
  };

  useEffect(() => {
    const radius = 40;
    fgRef.current?.d3Force('collision', forceCollide(radius));
  }, []);

  return (
    <div id='graph' className="graph-container" ref={containerRef}>
      <h1 className="graph-title" ref={titleRef}>Cartographie Controverse</h1>
      
      <div className="graph-content">
        {dimensions.width > 0 && dimensions.height > 0 && (
            <ForceGraph2D<Actor, Link>
              ref={fgRef}
              width={dimensions.width}
              height={dimensions.height}
              graphData={actorGraphData}
              nodeLabel={node => `${node.name} - ${node.opinion}`}
              nodeCanvasObject={drawNode}
              nodeRelSize={MAX_NODE_SIZE}
              linkWidth={1}
              minZoom={2}
              maxZoom={4}
              onNodeClick={node => setSelectedActor(node as Actor)}
              onBackgroundClick={() => setSelectedActor(null)}
            />
        )}
        <ActorSidebar actor={selectedActor} onClose={() => setSelectedActor(null)} />
      </div>
    </div>
  )
}

export default ActorsGraph
