import type { Actor } from '../models/actor/actor'
import type { Link } from '../models/graph/link'
import type { GraphData } from '../models/graph/graph-data'

// Importing images for actors
import researcherImage from '../assets/actor/chercheurs.svg'
import cnilImage from '../assets/actor/cnil.svg'
import syndicatsImage from '../assets/actor/syndicats.svg'
import associationsImage from '../assets/actor/associations.svg'
import governmentImage from '../assets/actor/gouvernements.svg'
import teslaImage from '../assets/actor/tesla.svg'
import waymoImage from '../assets/actor/waymo.svg'
import xpengImage from '../assets/actor/xpeng.svg'
import uberImage from '../assets/actor/uber.svg'
import generalMotorsImage from '../assets/actor/general_motors.svg'

const actors: Actor[] = [
  {
    id: '1',
    name: 'Syndicats',
    opinion: 'Farouchement opposés',
    engagement: 0.8,
    image: syndicatsImage,
  },
  {
    id: '2',
    name: 'Associations de consommateurs / sécurité routière',
    opinion: 'Prudents',
    engagement: 0.2,
    image: associationsImage,
  },
  {
    id: '3',
    name: 'Gouvernement et régulateurs',
    opinion: 'Prudents',
    engagement: 0.3,
    image: governmentImage,
  },
  {
    id: '4',
    name: "Chercheurs et universitaires",
    opinion: 'Neutres',
    engagement: 0.5,
    image: researcherImage,
  },
  {
    id: '5',
    name: "CNIL (Commission Nationale de l'Informatique et des Libertés)",
    opinion: 'Plutôt défavorable',
    engagement: 0.5,
    image: cnilImage,
  },
  {
    id: "6",
    name: "Tesla",
    opinion: "Partisan convaincu",
    engagement: 0.9,
    image: teslaImage,
  },
  {
    id: '7',
    name: 'Waymo',
    opinion: 'Partisan convaincu',
    engagement: 0.9,
    image: waymoImage,
  },
  {
    id: '8',
    name: 'XPENG',
    opinion: 'Partisan convaincu',
    engagement: 0.9,
    image: xpengImage,
  },
  {
    id: '9',
    name: 'Uber',
    opinion: 'Partisan convaincu',
    engagement: 0.5,
    image: uberImage,
  },
  {
    id: '10',
    name: 'General Motors',
    opinion: 'Partisan convaincu',
    engagement: 0.5,
    image: generalMotorsImage,
  },
]

const links: Link[] = [
  { source: '2', target: '3' },
  { source: '2', target: '4' },
  { source: '3', target: '4' },
  { source: '5', target: '7' },
  { source: '5', target: '8' },
  { source: '6', target: '7' },
  { source: "9", target: '10' },
]

const actorGraphData: GraphData = {
  nodes: actors,
  links,
}

export default actorGraphData
