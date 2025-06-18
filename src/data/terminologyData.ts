import type { Terminology } from "../models/terminology/terminology";

const terminologyData: Terminology[] = [
  {
    id: 'self-driving-car',
    term: 'Voiture autonome',
    definition: 'Voiture capable de rouler sans intervention humaine selon différents niveaux d’autonomie.',
  },
  {
    id: 'adas',
    term: 'Advanced Driver Assistance Systems (ADAS)',
    definition: 'Aide à la conduite de niveau 1-2 (régulateur de vitesse adaptatif, freinage automatique d’urgence, maintien de voie…).',
  },
  {
    id: 'sae-levels',
    term: 'Niveaux SAE',
    definition: 'Classification standard de la Society of Automotive Engineers concernant l\'autonomie des véhicules. Cette classification va de 0 (aucune autonomie) à 5 (autonomie totale).',
  },
  {
    id: 'lidar',
    term: 'Lidar',
    definition: 'Télémètre laser rotatif permettant d\'évaluer l\'environement en 3D.',
  },
  {
    id: 'radar',
    term: 'Radar & Caméras',
    definition: 'Le radar détecte les voitures/objets alentour et détermine leur vitesse. Les caméras fournissent une image visuelle à l’IA pour identifier les feux, panneaux, marquages au sol et piétons.'
  },
  {
    id: 'edge-cases',
    term: 'Edge Cases (Cas limites)',
    definition: 'Scénario rare et extrême dans lequel l’IA pourrait faire défaut. Par exemple, un piéton qui porte l’image d’un panneau stop sur son T-shirt.',
  },
  {
    id: 'tramway-dilemma',
    term: 'Dilemme du tramway',
    definition: 'Problème éthique appliqué aux voitures autonomes : en cas d’accident inévitable, comment l\'IA doit-elle se comporter, par exemple, sauver les passagers ou les piétons ?'
  },
  {
    id: 'penal-responsibility',
    term: 'Responsabilité pénale',
    definition: 'Question de responsabilité en cas d\'accident.'
  }
];

export default terminologyData;
