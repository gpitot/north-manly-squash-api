/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RankResponseModel } from '../models/RankResponseModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RankService {

    /**
     * Get ranks of players in club
     * @returns RankResponseModel successful response
     * @throws ApiError
     */
    public static getRanks(): CancelablePromise<RankResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rank',
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                500: `An internal error occurred`,
            },
        });
    }

}
