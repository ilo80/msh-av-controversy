import type { Actor } from '../models/actor/actor'
import type { Link } from '../models/graph/link'
import type { GraphData } from '../models/graph/graph-data'

const actors: Actor[] = [
  {
    id: '1',
    name: 'Alice',
    opinion: 'favorable',
    engagement: 0.8,
    image: 'https://placehold.co/150',
  },
  {
    id: '2',
    name: 'Bob',
    opinion: 'neutre',
    engagement: 0.5,
    image: 'https://placehold.co/150',
  },
  {
    id: '3',
    name: 'Charlie',
    opinion: 'défavorable',
    engagement: 0.9,
    image: 'https://placehold.co/150',
  },
]

const links: Link[] = [
  { source: '1', target: '2' },
  { source: '2', target: '3' },
  { source: '1', target: '3' },
]

const actorGraphData: GraphData = {
  nodes: actors,
  links,
}

export default actorGraphData
