import { createOpenApiAwsLambdaHandler } from 'trpc-openapi';
import { z } from 'zod';
import { context } from '../utils/context';
import {
    initRouter,
    privateProcedure,
    publicProcedure,
} from './../utils/router';
import createMovie, { createResponse, createSchema } from './createMovie';
import deleteMovie, { deleteResponse, deleteSchema } from './deleteMovie';
import getMovie, { getResponse, getSchema } from './getMovie';
import getMovies, { listResponse } from './getMovies';
import { openApiDocument } from './openapi';
import updateMovie, { updateResponse, updateSchema } from './updateMovie';

export const router = initRouter({
    getMovies: publicProcedure
        .meta({
            openapi: { method: 'GET', path: '/getMovies', tags: ['movies'] },
        })
        .input(z.void())
        .output(listResponse)
        .query(async () => {
            return await getMovies();
        }),
    getMovie: publicProcedure
        .meta({
            openapi: {
                method: 'GET',
                path: '/getMovie',
                tags: ['movies'],
            },
        })
        .input(getSchema)
        .output(getResponse)
        .query(async ({ input }) => {
            return await getMovie(input);
        }),
    createMovie: privateProcedure
        .meta({
            openapi: {
                method: 'POST',
                path: '/createMovie',
                tags: ['movies'],
            },
        })
        .input(createSchema)
        .output(createResponse)
        .mutation(async ({ input }) => {
            return await createMovie(input);
        }),
    updateMovie: privateProcedure
        .meta({
            openapi: {
                method: 'POST',
                path: '/updateMovie',
                tags: ['movies'],
            },
        })
        .input(updateSchema)
        .output(updateResponse)
        .mutation(async ({ input }) => {
            return await updateMovie(input);
        }),
    deleteMovie: privateProcedure
        .meta({
            openapi: {
                method: 'POST',
                path: '/deleteMovie',
                tags: ['movies'],
            },
        })
        .input(deleteSchema)
        .output(deleteResponse)
        .mutation(async ({ input }) => {
            return await deleteMovie(input);
        }),
});

export const handler = createOpenApiAwsLambdaHandler({
    router: router,
    createContext: context,
});

export const openApiJson = async () => {
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(openApiDocument()),
    };
};

export type MovieRouter = typeof router;
