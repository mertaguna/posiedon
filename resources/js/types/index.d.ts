import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface Article {
    id: number;
    title: string
    slug: string
    teaser: string
    created_at: string
    author: string
    picture: string
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    articles: {
        article: Article;
    };
    ziggy: Config & { location: string };
};
