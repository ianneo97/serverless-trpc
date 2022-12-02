import { z } from 'zod';

export const getSchema = z.object({
    id: z.string(),
});

export const getResponse = z.object({
    id: z.string(),
    title: z.string(),
});

export default async function getMovie(
    opts: GetMovieOpts
): Promise<GetMovieResponse> {
    return {
        id: opts.id,
        title: 'The Hobbit',
    };
}

export type GetMovieOpts = z.infer<typeof getSchema>;
export type GetMovieResponse = z.infer<typeof getResponse>;
