import { useRef, useEffect, type MutableRefObject } from 'react'
import ForceGraph2D, {
  type ForceGraphMethods,
  type NodeObject,
  type LinkObject,
} from 'react-force-graph-2d'
import { forceCollide } from 'd3-force-3d'
import actorGraphData from '../data/actorsData'
import type { Actor } from '../models/actor/actor'
import type { Link } from '../models/graph/link'

function ActorsGraph() {
  const fgRef = useRef<
    ForceGraphMethods<NodeObject<Actor>, LinkObject<Actor, Link>> | undefined
  >(undefined) as MutableRefObject<
    ForceGraphMethods<NodeObject<Actor>, LinkObject<Actor, Link>> | undefined
  >

  const drawNode = (
    node: NodeObject<Actor>,
    ctx: CanvasRenderingContext2D,
    globalScale: number,
  ) => {
    // Typage étendu pour stocker l'état "cassé"
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

    // compute node size from image dimensions
    const imgWidth = img.naturalWidth / globalScale;
    const imgHeight = img.naturalHeight / globalScale;
    const defaultSize = 80 / globalScale;
    const width = imgWidth || defaultSize;
    const height = imgHeight || defaultSize;
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    // Dessiner une forme de secours si l'image est cassée ou pas encore chargée
    if (typedNode.__imgBroken || !img.complete || img.naturalWidth === 0) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, Math.max(halfWidth, halfHeight), 0, 2 * Math.PI, false);
      ctx.fillStyle = '#ccc';
      ctx.fill();
    } else {
      ctx.drawImage(img, node.x - halfWidth, node.y - halfHeight, width, height);
    }
  };

  useEffect(() => {
    const radius = (n: NodeObject<Actor> & { __img?: HTMLImageElement }) => {
      const img = n.__img;
      if (!img || !img.naturalWidth || !img.naturalHeight) return 40;
      return Math.max(img.naturalWidth, img.naturalHeight) / 2;
    };

    fgRef.current?.d3Force('collision', forceCollide(radius));
  }, []);


  return (
    <ForceGraph2D<Actor, Link>
      ref={fgRef}
      graphData={actorGraphData}
      nodeLabel={node => `${node.name} - ${node.opinion}`}
      nodeCanvasObject={drawNode}
      linkWidth={1}
    />
  )
}

export default ActorsGraph
