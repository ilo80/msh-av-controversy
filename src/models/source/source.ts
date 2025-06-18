export interface Source {
    id: string;
    title: string;
    date?: string;
    authors?: string[];
    translators?: string[];
    organization?: string;
    url: string;
    notes?: string;
    type?: 'article' | 'report' | 'academic' | 'blog' | 'video' | 'news' | 'website' | 'other';
}
