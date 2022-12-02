import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { OpenApiMeta } from 'trpc-openapi';
import { Context } from './context';

const t = initTRPC.context<Context>().meta<OpenApiMeta>().create({
    transformer: superjson,
});

const isAuthed = t.middleware(({ ctx, next }) => {
    return next({
        ctx: {
            ...ctx,
        },
    });
});

export const initRouter = t.router;

export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuthed);
