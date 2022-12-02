import { generateOpenApiDocument } from 'trpc-openapi';
import { router } from './handler';

// Generate OpenAPI schema document
export const openApiDocument = () => {
    const response = generateOpenApiDocument(router, {
        title: 'Example CRUD API',
        description:
            'OpenAPI compliant REST API built using tRPC with Serverless',
        version: '1.0.0',
        baseUrl: 'http://localhost:3000/dev/movies',
        docsUrl: 'https://github.com/jlalmes/trpc-openapi',
    });

    return response;
};
