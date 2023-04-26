/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AiService {

    /**
     * Get email
     * @returns any successful response
     * @throws ApiError
     */
    public static getEmail({
        xSquashAuth,
    }: {
        xSquashAuth: string,
    }): CancelablePromise<{
        message: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ai/email',
            headers: {
                'X-Squash-Auth': xSquashAuth,
            },
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                500: `An internal error occurred`,
            },
        });
    }

}
