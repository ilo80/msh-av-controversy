import type { Statistic } from '../models/statistic/statistic'

const statisticsData: Statistic[] = [
    {
        id: 'us-human-error',
        value: '94 %',
        description: 'des accidents de la route sont dus à une erreur humaine aux États-Unis'
    },
    {
        id: 'tesla-deaths',
        value: '+50',
        description: 'décès déjà enregistrés impliquant le système Autopilot de Tesla (niveaux 2) depuis 2016'
    },
    {
        id: 'tesla-distance-between-crashes',
        value: '~12,3 millions de km',
        description: 'entre deux accidents lors de l\'usage du système Autopilot de Tesla en 2024'
    },
    {
        id: 'waymo-rides-weekly',
        value: '~200 000',
        description: 'courses en robot-taxi sont effectuées chaque semaine par Waymo en 2025'
    },
    {
        id: 'energy-saving',
        value: '20 à 50 %',
        description: 'Gain potentiel sur la consommation d’énergie des transports avec les voitures autonomes'
    },
    {
        id: 'fr-confidence',
        value: '67 %',
        description: 'des Français n’ont pas confiance dans les voitures autonomes en 2023'
    },
    {
        id: 'us-opposition',
        value: '68 %',
        description: 'des Américains qui se disent opposés aux voitures autonomes en 2023'
    }
];

export default statisticsData;
