import { z } from 'zod';

export const createSchema = z.object({
    title: z.string(),
    description: z.string(),
});

export const createResponse = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
});

export default async function createMovie(
    opts: CreateMovieOpts
): Promise<CreateMovieResponse> {
    return {
        id: '1',
        title: opts.title,
        description: opts.description,
    };
}

export type CreateMovieOpts = z.infer<typeof createSchema>;
export type CreateMovieResponse = z.infer<typeof createResponse>;
