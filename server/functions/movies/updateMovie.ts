import { z } from 'zod';

export const updateSchema = z.object({
    id: z.string(),
    title: z.string(),
    message: z.string(),
});

export const updateResponse = z.object({
    id: z.string(),
    message: z.string(),
});

export default async function updateMovie(
    opts: UpdateMovieOpts
): Promise<UpdateMovieResponse> {
    return { id: opts.id, message: 'Updated successfully' };
}

export type UpdateMovieOpts = z.infer<typeof updateSchema>;
export type UpdateMovieResponse = z.infer<typeof updateResponse>;
