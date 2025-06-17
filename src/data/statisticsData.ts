import type { Statistic } from '../models/statistic/statistic'

const statisticsData: Statistic[] = [
    {
        id: 'us-human-error',
        value: '94',
        description: 'des accidents de la route sont dus à une erreur humaine aux États-Unis',
        type: 'percentage'
    },
    {
        id: 'tesla-deaths',
        value: '50 décès',
        description: 'déjà enregistrés impliquant le système Autopilot de Tesla (niveaux 2) depuis 2016',
        type: 'default'
    },
    {
        id: 'tesla-distance-between-crashes',
        value: '~12,3 millions de km',
        description: 'entre deux accidents lors de l\'usage du système Autopilot de Tesla en 2024',
        type: 'default'
    },
    {
        id: 'waymo-rides-weekly',
        value: '~200 000',
        description: 'courses en robot-taxi sont effectuées chaque semaine par Waymo en 2025',
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
        description: 'des Français n’ont pas confiance dans les voitures autonomes en 2023',
        type: 'percentage'
    },
    {
        id: 'us-opposition',
        value: '68',
        description: 'part des Américains qui se disent opposés aux voitures autonomes en 2023',
        type: 'percentage'
    }
];

export default statisticsData;
