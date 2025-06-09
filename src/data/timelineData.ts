import type { TimelineEvent } from '../models/timeline/timeline'

const timelineData: TimelineEvent[] = [
  {
    id: "darpa_grand_challenge",
    date: '13 mars 2004',
    year: 2004,
    title: 'DARPA Grand Challenge',
    description: "Première course de véhicules autonomes dans le désert du Mojave (USA). Aucune des voitures ne parvient à terminer le parcours (=échec technologique)."
  },
  {
    id: "premier_accident_mortel",
    date: "7 mai 2016",
    year: 2016,
    title: "Premier accident mortel d'une voiture autonome",
    description: "En Floride, une Tesla Model S (niveau 2) a percuté un camion mal détecté par les capteurs, tuant ainsi le conducteur de la Tesla."
  },
  {
    id: "declaration_amsterdam",
    date: "Avril 2016",
    year: 2016,
    title: "Déclaration d'Amsterdam",
    description: "Les ministres européens des Transports s’accordent sur une coopération pour le développement des véhicules autonomes."
  },
  {
    id: "rapport_forum_davos",
    date: "23 janvier 2017",
    year: 2017,
    title: "Rapport au Forum de Davos",
    description: "Mise en lumière du risque pour l’emploi : on évoque ~ 4 millions d’emplois menacés aux USA par la généralisation des voitures sans chauffeur."
  },
  {
    id: "accident_mortel_uber",
    date: "18 mars 2018",
    year: 2018,
    title: "Accident mortel Uber à Tempe (Arizona)",
    description: "Une voiture autonome Uber en phase de test percute une piétonne de nuit, en mode 100% autonome (avec opérateur humain à bord qui ne réagit pas à temps)."
  },
  {
    id: "loi_orientation_mobilites",
    date: "24 décembre 2019",
    year: 2019,
    title: "Loi d'Orientation des Mobilités (LOM)",
    description: "Adoption de cette loi qui habilite le gouvernement à adapter le Code de la route pour les véhicules autonomes, ouvrant la voie à leur circulation expérimentale."
  },
  {
    id: "lancement_service_waymo",
    date: "Octobre 2020",
    year: 2020,
    title: "Lancement du service Waymo One (Phoenix, Arizona)",
    description: "Waymo, filiale d'Alphabet, lance un service de robotaxi sans chauffeur."
  },
  {
    id: "mercedes_benz_certifie_niveau_3",
    date: "Mars 2022",
    year: 2022,
    title: "Mercedes-Benz certifiée niveau 3",
    description: "Mercedes-Benz obtient la première homologation au monde d’un système Level 3 (« Drive Pilot ») sur autoroutes en Allemagne (et l’introduit plus tard en 2023 aux USA)."
  },
  {
    id: "accident_tesla_autopilot",
    date: "18 août 2022",
    year: 2022,
    title: "Accident de Tesla en Autopilot impliquant un motocycliste (Utah)",
    description: "Un motocycliste est tué, percuté par une Tesla en mode Autopilot."
  },
  {
    id: "incidents_cruise_san_francisco",
    date: "Août 2023",
    year: 2023,
    title: "Incidents de Cruise à San Francisco",
    description: "La société Cruise est impliquée dans plusieurs incidents gênants (voiture bloquée sur un passage piéton, collision avec un camion de pompiers, etc.). En octobre 2023, le régulateur suspend toutes les opérations de Cruise en Californie suite à un accident ayant traîné un piéton."
  },
  {
    id: "retrait_general_motors",
    date: "Décembre 2024",
    year: 2024,
    title: "Retrait de General Motors du secteur robotaxi",
    description: "General Motors annonce cesser le financement de Cruise et réorienter ses efforts vers des assistances à la conduite moins ambitieuses."
  }
  
]

export default timelineData
