/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminGeneratePasswordResetModel } from '../models/AdminGeneratePasswordResetModel';
import type { AdminSearchUserResponseModel } from '../models/AdminSearchUserResponseModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AdminService {

    /**
     * Admin generate reset token for user
     * @returns AdminGeneratePasswordResetModel successful response
     * @throws ApiError
     */
    public static postAdminGenerateResetPassword({
        id,
        xSquashAuth,
    }: {
        /**
         * The event id to look up
         */
        id: number,
        xSquashAuth: string,
    }): CancelablePromise<AdminGeneratePasswordResetModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/password/generate/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Squash-Auth': xSquashAuth,
            },
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                500: `An internal error occurred`,
            },
        });
    }

    /**
     * Admin search for users
     * @returns AdminSearchUserResponseModel successful response
     * @throws ApiError
     */
    public static adminSearchUser({
        query,
        xSquashAuth,
    }: {
        /**
         * The search query
         */
        query: string,
        xSquashAuth: string,
    }): CancelablePromise<AdminSearchUserResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/search-user',
            headers: {
                'X-Squash-Auth': xSquashAuth,
            },
            query: {
                'query': query,
            },
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                500: `An internal error occurred`,
            },
        });
    }

}
