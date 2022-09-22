/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MatchGetResponseModel } from '../models/MatchGetResponseModel';
import type { MatchModel } from '../models/MatchModel';
import type { MatchUpdateModel } from '../models/MatchUpdateModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MatchService {

    /**
     * Get matches
     * @returns MatchGetResponseModel successful response
     * @throws ApiError
     */
    public static getMatches(): CancelablePromise<MatchGetResponseModel> {
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
     * @returns MatchModel successful response
     * @throws ApiError
     */
    public static postMatch({
        requestBody,
    }: {
        /**
         * User challenge another user to a match
         */
        requestBody: {
            /**
             * User ID that is being challenged
             */
            id: number;
        },
    }): CancelablePromise<MatchModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/match',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                500: `An internal error occurred`,
            },
        });
    }

    /**
     * Update match
     * @returns MatchModel successful response
     * @throws ApiError
     */
    public static patchMatch({
        id,
        requestBody,
    }: {
        /**
         * The event id to look up
         */
        id: string,
        requestBody: MatchUpdateModel,
    }): CancelablePromise<MatchModel> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/match/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                500: `An internal error occurred`,
            },
        });
    }

}
