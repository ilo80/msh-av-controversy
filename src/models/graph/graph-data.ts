import type { Actor } from '../actor/actor'
import type { Link } from './link'

export interface GraphData {
  nodes: Actor[]
  links: Link[]
}
