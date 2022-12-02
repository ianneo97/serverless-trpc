import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';
import { context } from '../utils/context';
import { initRouter, publicProcedure } from '../utils/router';
import getBooks from './getBooks';

const router = initRouter({
    getBooks: publicProcedure.query(() => {
        return getBooks();
    }),
});

export const handler = awsLambdaRequestHandler({
    router,
    createContext: context,
});

export type BooksRouter = typeof router;
