import { inferAsyncReturnType } from '@trpc/server';
import { CreateAWSLambdaContextOptions } from '@trpc/server/adapters/aws-lambda';
import { APIGatewayProxyEventV2 } from 'aws-lambda';

export function context({
    event,
    context,
}: CreateAWSLambdaContextOptions<APIGatewayProxyEventV2>) {
    return {
        headers: event.headers,
        event,
        context,
    };
}

export type Context = inferAsyncReturnType<typeof context>;
