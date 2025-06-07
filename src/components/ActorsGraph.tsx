import { useRef, type MutableRefObject } from 'react'
import ForceGraph2D, {
  type ForceGraphMethods,
  type NodeObject,
  type LinkObject,
} from 'react-force-graph-2d'
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
    const typedNode = node as NodeObject<Actor> & { __img?: HTMLImageElement }
    const img = typedNode.__img || new Image()
    if (!typedNode.__img) {
      typedNode.__img = img
      img.src = node.image
      img.onload = () => {
        fgRef.current?.d3ReheatSimulation()
      }
    }
    const size = 40 / globalScale
    const halfSize = size / 2
    if (img.complete) {
      ctx.drawImage(img, node.x! - halfSize, node.y! - halfSize, size, size)
    } else {
      ctx.beginPath()
      ctx.arc(node.x!, node.y!, halfSize, 0, 2 * Math.PI, false)
      ctx.fillStyle = '#ccc'
      ctx.fill()
    }
  }

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
