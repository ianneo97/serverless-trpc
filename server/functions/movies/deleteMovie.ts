import { z } from 'zod';

export const deleteSchema = z.object({
    id: z.string(),
});

export const deleteResponse = z.object({
    id: z.string(),
    message: z.string(),
});

export default async function deleteMovie(
    opts: DeleteMovieOpts
): Promise<DeleteMovieResponse> {
    return { id: opts.id, message: 'Deleted successfully' };
}

export type DeleteMovieOpts = z.infer<typeof deleteSchema>;
export type DeleteMovieResponse = z.infer<typeof deleteResponse>;
