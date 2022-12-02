import { z } from 'zod';

export const listResponse = z.array(
    z.object({
        id: z.string(),
        title: z.string(),
    })
);
export default async function getMovies(): Promise<ListMoviesResponse> {
    return [
        { id: '1', title: 'The Hobbit' },
        { id: '2', title: 'The Lord of the Rings' },
    ];
}

export type ListMoviesResponse = z.infer<typeof listResponse>;
