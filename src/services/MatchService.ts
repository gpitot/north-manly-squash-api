/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MatchService {

    /**
     * Get matches
     * @returns any successful response
     * @throws ApiError
     */
    public static getMatches(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/match',
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                500: `An internal error occurred`,
            },
        });
    }

    /**
     * Create match
     * @returns any successful response
     * @throws ApiError
     */
    public static postMatch(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/match',
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                500: `An internal error occurred`,
            },
        });
    }

    /**
     * Create match
     * @returns any successful response
     * @throws ApiError
     */
    public static postMatch1(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/match/{matchID}',
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                500: `An internal error occurred`,
            },
        });
    }

}
