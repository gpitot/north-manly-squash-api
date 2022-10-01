/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MatchCreateModel } from '../models/MatchCreateModel';
import type { MatchGetResponseModel } from '../models/MatchGetResponseModel';
import type { MatchModel } from '../models/MatchModel';
import type { MatchState } from '../models/MatchState';
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
    public static getMatches({
        state,
        userId,
        limit,
        offset,
    }: {
        /**
         * State of match
         */
        state: MatchState,
        /**
         * User id
         */
        userId?: number,
        /**
         * Limit of results to return
         */
        limit?: number,
        /**
         * Offset of results to return
         */
        offset?: number,
    }): CancelablePromise<MatchGetResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/match',
            query: {
                'user_id': userId,
                'state': state,
                'limit': limit,
                'offset': offset,
            },
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
        xSquashAuth,
        requestBody,
    }: {
        xSquashAuth: string,
        /**
         * User challenge another user to a match
         */
        requestBody: MatchCreateModel,
    }): CancelablePromise<MatchModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/match',
            headers: {
                'X-Squash-Auth': xSquashAuth,
            },
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
        xSquashAuth,
        requestBody,
    }: {
        /**
         * The event id to look up
         */
        id: number,
        xSquashAuth: string,
        requestBody: MatchUpdateModel,
    }): CancelablePromise<MatchModel> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/match/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Squash-Auth': xSquashAuth,
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
