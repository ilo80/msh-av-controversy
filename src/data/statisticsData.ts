import type { Statistic } from '../models/statistic/statistic'

const statisticsData: Statistic[] = [
    {
        id: 'us-human-error',
        value: '94',
        description: 'Nombre d\'accidents de la route dus à une erreur humaine aux États-Unis',
        type: 'percentage'
    },
    {
        id: 'tesla-deaths',
        value: '50',
        description: 'Nombre de décès déjà enregistrés impliquant le système Autopilot de Tesla (niveaux 2) depuis 2016',
        type: 'default'
    },
    {
        id: 'tesla-distance-between-crashes',
        value: '12,3 millions de km',
        description: 'Distance moyenne entre deux accidents lors de l\'usage du système Autopilot de Tesla en 2024',
        type: 'default'
    },
    {
        id: 'waymo-rides-weekly',
        value: '~200 000',
        description: 'Nombre de courses en robot-taxi effectuées chaque semaine par Waymo en 2025',
        type: 'default'
    },
    {
        id: 'energy-saving',
        value: '20-50',
        description: 'Gain potentiel sur la consommation d’énergie des transports avec les voitures autonomes',
        type: 'range'
    },
    {
        id: 'fr-confidence',
        value: '67',
        description: 'Part des Français qui n’ont pas confiance dans les voitures autonomes en 2023',
        type: 'percentage'
    },
    {
        id: 'us-opposition',
        value: '68',
        description: 'Part des Américains qui se disent opposés aux voitures autonomes en 2023',
        type: 'percentage'
    }
];

export default statisticsData;
