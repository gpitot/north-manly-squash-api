/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LadderService {

    /**
     * Get list of ladders
     * @returns any successful response
     * @throws ApiError
     */
    public static getLadders(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ladder',
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                500: `An internal error occurred`,
            },
        });
    }

    /**
     * Get ranks of players on ladder
     * @returns any successful response
     * @throws ApiError
     */
    public static getRanks(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ladder/ranks',
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                500: `An internal error occurred`,
            },
        });
    }

}
