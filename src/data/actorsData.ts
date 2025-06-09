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
    description: 'Groupes représentant les intérêts des travailleurs.'
  },
  {
    id: '2',
    name: 'Associations de consommateurs / sécurité routière',
    opinion: 'Prudents',
    engagement: 0.2,
    image: associationsImage,
    description: 'Organisations veillant à la protection des usagers.'
  },
  {
    id: '3',
    name: 'Gouvernement et régulateurs',
    opinion: 'Prudents',
    engagement: 0.3,
    image: governmentImage,
    description: 'Institutions chargées de définir les règles.'
  },
  {
    id: '4',
    name: "Chercheurs et universitaires",
    opinion: 'Neutres',
    engagement: 0.5,
    image: researcherImage,
    description: "Communauté scientifique étudiant l'impact de ces technologies."
  },
  {
    id: '5',
    name: "CNIL (Commission Nationale de l'Informatique et des Libertés)",
    opinion: 'Plutôt défavorable',
    engagement: 0.5,
    image: cnilImage,
    description: "Autorité française de protection des données personnelles."
  },
  {
    id: "6",
    name: "Tesla",
    opinion: "Partisan convaincu",
    engagement: 0.9,
    image: teslaImage,
    description: "Constructeur automobile pionnier des véhicules autonomes."
  },
  {
    id: '7',
    name: 'Waymo',
    opinion: 'Partisan convaincu',
    engagement: 0.9,
    image: waymoImage,
    description: 'Filiale de Google dédiée aux voitures autonomes.'
  },
  {
    id: '8',
    name: 'XPENG',
    opinion: 'Partisan convaincu',
    engagement: 0.9,
    image: xpengImage,
    description: 'Entreprise chinoise investissant massivement dans l\'AV.'
  },
  {
    id: '9',
    name: 'Uber',
    opinion: 'Partisan convaincu',
    engagement: 0.5,
    image: uberImage,
    description: "Société de VTC explorant l'autonomie pour son service."
  },
  {
    id: '10',
    name: 'General Motors',
    opinion: 'Partisan convaincu',
    engagement: 0.5,
    image: generalMotorsImage,
    description: 'Groupe industriel américain fortement investi dans l\'AV.'
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
