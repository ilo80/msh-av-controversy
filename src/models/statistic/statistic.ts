export interface Statistic {
    id: string;
    type: 'percentage' | 'range' | 'default';
    value: string;
    description: string;
}