import type { Source } from '../models/source/source';

const sourcesData: Source[] = [
  {
    id: 'la_voiture_et_ses_implications_morales',
    title: 'La voiture et ses implications morales',
    date: '7 mai 2015',
    authors: ['Anders Sandberg', 'Heather Bradshaw-Martin'],
    translators: ['M. Geraldin-Laverge'],
    url: 'https://shs.cairn.info/revue-multitudes-2015-1-page-62',
    type: 'article',
  },
  {
    id: 'autonomous_vehicules_factsheets',
    title: 'Autonomous Vehicles Factsheets',
    organization: 'Center of Sustainable Systems',
    url: 'https://css.umich.edu/publications/factsheets/mobility/autonomous-vehicles-factsheet',
    type: 'article',
  },
  {
    id: 'avis_n2_vehciule_autonome_enjeux_dethique',
    title: 'Avis n°2 - Véhicule autonome : enjeux d’éthique',
    organization: 'CCNE',
    date: 'Janvier 2023',
    url: 'https://www.ccne-ethique.fr/sites/default/files/2023-01/Avis2_CNPEN_web.pdf',
    type: 'report',
  },
  {
    id: 'vehicules_connectes_et_localisation_la_cnil_lance_une_consultation_publique',
    title: 'Véhicules connectés et localisation : la CNIL lance une consultation publique sur son projet de recommandation',
    date: '25 mars 2025',
    organization: 'CNIL',
    url: 'https://www.cnil.fr/fr/vehicules-connectes-et-localisation-consultation-publique-projet-de-recommandation',
    type: 'article'
  },
  {
    id: 'code_moral_des_vehicules_autonomes_qui_sauver',
    title: 'Code moral des véhicules autonomes : qui sauver ? (avis de 2,3 millions de personnes)',
    date: '26 octobre 2018',
    organization: 'Psychomédia',
    url: 'https://www.psychomedia.qc.ca/psychologie/2018-10-26/voitures-autonomes-consensus-moraux',
    type: 'article'
  },
  {
    id: 'comment_convevoir_la_vie_privee_des_passagers_a_lere_de_la_voiture_autonome',
    title: 'Comment concevoir la vie privée des passagers à l’ère de la voiture autonome ?',
    organization: 'Linc (CNIL)',
    url: 'https://linc.cnil.fr/comment-concevoir-la-vie-privee-des-passagers-lere-de-la-voiture-autonome',
    type: 'article'
  },
  {
    id: 'deux_tiers_des_francais_nont_pas_confiance_vehicules_autonomes',
    title: 'Deux tiers des Français n’ont pas confiance dans les véhicules autonomes.',
    date: '21 novembre 2023',
    organization: 'Clubic.Com',
    url: 'https://www.clubic.com/actualite-509686-des-francais-n-ont-pas-confiance-dans-les-vehicules-autonomes.html',
    type: 'article'
  },
  {
    id: 'soixante_sept_pourcent_des_francais_se_mefient_des_voitures_autonomes',
    title: '67% des Français se méfient des voitures autonomes.',
    date: '22 novembre 2023',
    organization: 'L’Éclaireur Fnac',
    url: 'https://leclaireur.fnac.com/article/387290-67-des-francais-se-mefient-des-voitures-autonomes',
    type: 'article'
  },
  {
    id: 'autonomous_electric_vehicules_can_reduce_carbon_emissions_and_air_pollution_in_cities',
    title: 'Autonomous electric vehicles can reduce carbon emissions and air pollution in cities',
    authors: ['Ercan, T.', 'Onat, N. C.', 'Keya, N.', 'Tatari, O.', 'Eluru, N.', 'Kucukvar, M.'],
    url: 'https://doi.org/10.1016/j.trd.2022.103472',
    type: 'academic',
  },
  {
    id: 'la_part_de_marche_mondiale_des_voitures_autonomes',
    title: 'La part de marché mondiale des voitures autonomes devrait croître à un TCAC de 25.75 % d’ici 2030',
    organization: 'Facts and Factors',
    url: 'https://www.fnfresearch.com/fr/news/global-autonomous-cars-market',
    type: 'article'
  },
  {
    id: 'quelle_reglementation_pour_les_voitures_autonomes_en_france',
    title: 'Quelle réglementation pour les voitures autonomes en France ?',
    organization: 'HAAS Avocats',
    url: 'https://info.haas-avocats.com/droit-digital/quelle-reglementation-pour-les-voitures-autonomes-en-france',
    type: 'article'
  },
  {
    id: 'la_securite_routiere_langle_mort_des_voitures_autonomes',
    title: 'La sécurité routière, l’angle mort des voitures autonomes',
    date: '1 novembre 2023',
    organization: 'The Conversation',
    url: 'https://theconversation.com/la-securite-routiere-langle-mort-des-voitures-autonomes-216305',
    type: 'article'
  },
  {
    id: 'the_first_robot_car_race',
    title: 'The first robot car race was a historic moment — and a complete failure.',
    date: '15 octobre 2024',
    organization: 'The Verge',
    url: 'https://www.theverge.com/c/24234678/robot-car-darpa-grand-challenge-2004-autonomous-race',
    type: 'article'
  },
  {
    id: 'voiture_autonome_le_probleme_cest_lhomme',
    title: 'Voiture autonome : Le problème, c’est l’homme !',
    date: '15 novembre 2013',
    organization: 'InternetActu',
    url: 'https://www.lemonde.fr/blog/internetactu/2013/11/15/voiture-autonome-le-probleme-cest-lhomme/',
    type: 'article'
  },
  {
    id: 'tesla_autopilot_data_shows_improved_q1_2024',
    title: 'Tesla autopilot data shows improved Q1 2024: 7.63 Million miles per crash',
    date: '23 mai 2024',
    organization: 'InsideEVs',
    url: 'https://insideevs.com/news/720730/tesla-autopilot-crash-data-2024q1',
    type: 'article'
  },
  {
    id: 'voiture_autonome_quel_avenir_pour_lassurance_de_responsabilite_civile_du_conducteur',
    title: 'Voiture autonome, quel avenir pour l’assurance de responsabilité civile du conducteur ?',
    date: '2 avril 2019',
    organization: 'Village de La Justice',
    authors: ['B. Lafoui'],
    url: 'https://www.village-justice.com/articles/voiture-autonome-responsabilite-civile-conducteur-quel-avenir-pour-assurance,31119.html',
    type: 'article'
  },
  {
    id: 'voitures_autonomes_qui_sauver_qui_sacrifier',
    title: 'Voitures autonomes qui sauver, qui sacrifier ?',
    date: '25 avril 2019',
    organization: 'Radio-Canada',
    authors: ['M. Lajoie'],
    url: 'https://ici.radio-canada.ca/info/2019/voitures-autonomes-dilemme-tramway/',
    type: 'article'
  },
  {
    id: 'aux_etats_unis_la_voiture_autonome_fait_craindre_des_destructions_demplois',
    title: 'Aux Etats-Unis, la voiture autonome fait craindre des destructions d\'emplois',
    date: '15 août 2018',
    organization: 'Les Echos',
    url: 'https://www.lesechos.fr/tech-medias/intelligence-artificielle/aux-etats-unis-la-voiture-autonome-fait-craindre-des-destructions-demplois-136732',
    type: 'article'
  },
  {
    id: 'les_voitures_autonomes_sont_elles_trop_dangereuses',
    title: 'Les voitures autonomes sont-elles trop dangereuses ?',
    date: '2 avril 2018',
    organization: 'Courrier International',
    url: 'https://www.courrierinternational.com/article/controverse-les-voitures-autonomes-sont-elles-trop-dangereuses',
    type: 'article'
  },
  {
    id: 'moral_machine',
    title: 'Moral Machine',
    organization: 'MIT',
    url: 'https://www.moralmachine.net/hl/fr',
    type: 'website'
  },
  {
    id: 'autonomous_cars_self_driving_new_auto_industry_paradigm',
    title: 'Autonomous Cars - Self-Driving the New Auto Industry Paradigm',
    date: 'November 2013',
    authors: ['Morgan Stanley'],
    organization: 'Smart Mobility Community',
    url: 'https://smartmobilitycommunity.eu/autonomous-cars-self-driving-new-auto-industry-paradigm',
    type: 'report'
  },
  {
    id: 'sixty_height_percent_of_americans_afraid_of_self_driving_cars',
    title: '68% of Americans afraid of self-driving cars, up from 55% in 2022',
    date: '2 mars 2023',
    authors: ['M. Novak'],
    organization: 'Forbes',
    url: 'https://www.forbes.com/sites/mattnovak/2023/03/02/68-of-americans-afraid-of-self-driving-cars-up-from-55-in-2022/',
    type: 'article'
  },
  {
    id: 'les_voitures_pourraient_ils_sattaquer_aux_voitures_autonomes',
    title: 'Les pirates pourraient-ils s’attaquer aux voitures autonomes ?',
    date: '27 août 2024',
    organization: 'Pieuvre',
    url: 'https://www.pieuvre.ca/2024/08/27/technologie-transports-voiture-autonome-piratage/',
    type: 'article'
  },
  {
    id: 'la_cohabitation_avec_les_humains_prochain_defi_de_la_voiture_autonome',
    title: 'La cohabitation avec les humains, prochain défi de la voiture autonome',
    date: '9 novembre 2017',
    organization: 'Le Point',
    url: 'https://www.lepoint.fr/automobile/voiture-autonome-4-millions-d-emplois-menaces-aux-etats-unis-23-01-2017-2099313_646.php',
    type: 'article'
  },
  {
    id: 'voiture_autonome_4_millions_demplois_menaces_aux_etats_unis',
    title: 'Voiture autonome : 4 millions d’emplois menacés aux États-Unis',
    date: '23 janvier 2017',
    organization: 'Le Point',
    url: 'https://www.lepoint.fr/automobile/voiture-autonome-4-millions-d-emplois-menaces-aux-etats-unis-23-01-2017-2099313_646.php',
    type: 'article'
  },
  {
    id: 'deux_chercheurs_parviennent_a_pirater_une_voiture_a_distance',
    title: 'Deux chercheurs parviennent à pirater une voiture à distance',
    date: '22 juillet 2015',
    authors: ['F. Reynaud'],
    organization: 'Le Monde',
    url: 'https://www.lemonde.fr/pixels/article/2015/07/22/deux-chercheurs-parviennent-a-pirater-une-voiture-a-distance_4694137_4408996.html',
    type: 'article'
  },
  {
    id: 'les_mercedes_benz_autonomes_seront_elles_programmees_pour_sacrifier_la_vie_des_pietons',
    title: 'Les Mercedes-Benz autonomes seront-elles programmées pour sacrifier la vie des piétons afin de sauver les occupants du véhicule ? C\'est une solution qu\'a formulée un responsable de l’entreprise.',
    date: '17 décembre 2019',
    authors: ['P. Ruiz'],
    url: 'https://intelligence-artificielle.developpez.com/actu/288071/Les-Mercedes-Benz-autonomes-seront-elles-programmees-pour-sacrifier-la-vie-des-pietons-afin-de-sauver-les-occupants-du-vehicule-C-est-une-solution-qu-a-formulee-un-responsable-de-l-entreprise/',
    type: 'article'
  },
  {
    id: 'self_driving_car_statistics',
    title: 'Self-Driving car statistics',
    date: '10 septembre 2024',
    organization: 'NST Law',
    url: 'https://www.nstlaw.com/guides/self-driving-car-statistics',
    type: 'article'
  },
  {
    id: 'how_many_car_accidents_are_caused_by_human_error',
    title: 'How many car accidents are caused by human error?',
    date: '18 mai 2020',
    organization: 'LawInfo',
    url: 'https://www.lawinfo.com/resources/how-many-car-accidents-are-caused-by-human-error',
    type: 'article'
  },
  {
    id: 'standing_general_order_on_crash_reporting',
    title: 'Standing general order on crash reporting',
    organization: 'NHTSA',
    url: 'https://www.nhtsa.gov/laws-regulations/standing-general-order-crash-reporting',
    type: 'report'
  },
  {
    id: 'moral_machines_teaching_robots_right_from_wrong',
    title: 'Moral Machines : Teaching Robots Right from Wrong : Notes de lecture.',
    date: '13 juin 2013',
    organization: 'Association Française Transhumaniste',
    url: 'https://transhumanistes.com/notes-de-lecture-moral-machines-teaching-robots-right-from-wrong/',
    type: 'article'
  },
  {
    id: 'pour_ou_contre_les_voitures_autonomes_debat_actuel',
    title: 'Pour ou contre les voitures autonomes : Débat actuel',
    date: '29 octobre 2024',
    organization: 'Webzine Auto BYmyCAR',
    url: 'https://www.bymycar.fr/webzine/pour-ou-contre-les-voitures-autonomes-debat-actuel',
    type: 'article'
  },
  {
    id: 'under_the_hood_of_uber_atgs_machine_learning_infrastructure',
    title: 'Under the hood of Uber ATG’s machine learning infrastructure and versioning control platform for self-driving vehicles',
    date: '4 mars 2020',
    organization: 'Uber Blog',
    url: 'https://www.uber.com/en-FR/blog/machine-learning-model-life-cycle-version-control/',
    type: 'article'
  },
  {
    id: 'vehicule_autonome_la_securite_routiere_de_a_a_z',
    title: 'Véhicule autonome : La sécurité routière de A à Z',
    organization: 'Sécurité Routière A-Z',
    url: 'https://www.securite-routiere-az.fr/v/vehicule-autonome/',
    type: 'article'
  },
  {
    id: 'vehicules_autonomes_dans_lue_de_la_science_fiction_a_la_realite',
    title: 'Véhicules autonomes dans l’UE : De la science-fiction à la réalité',
    organization: 'Parlement Européen',
    url: 'https://www.europarl.europa.eu/topics/fr/article/20190110STO23102/vehicules-autonomes-dans-l-ue-de-la-science-fiction-a-la-realite',
    type: 'article'
  },
  {
    id: 'vehicule_autonome_wikipedia',
    title: 'Véhicule autonome',
    date: '6 novembre 2009',
    organization: 'Wikimedia Foundation, Inc.',
    url: 'https://fr.wikipedia.org/wiki/V%C3%A9hicule_autonome',
    type: 'website'
  },
  {
    id: 'tesla_driver_dies_in_first_fatal_crash_while_using_autopilot_mode',
    title: 'Tesla driver dies in first fatal crash while using autopilot mode',
    date: '30 juin 2016',
    authors: ['D. Yadron', 'D. Tynan'],
    organization: 'The Guardian',
    url: 'https://www.theguardian.com/technology/2016/jun/30/tesla-autopilot-death-self-driving-car-elon-musk',
    type: 'article'
  }
]

export default sourcesData;