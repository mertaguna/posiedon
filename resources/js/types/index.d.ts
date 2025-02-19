import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

interface Category {
    id: number;
    name: string;
    slug: string;
  }

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    categories_home: Category[];
    ziggy: Config & { location: string };
};
