/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserEventModel } from '../models/UserEventModel';
import type { UserEventPatchModel } from '../models/UserEventPatchModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserEventService {

    /**
     * Patch user event
     * @returns UserEventModel successful response
     * @throws ApiError
     */
    public static postUserEvent({
        id,
        requestBody,
    }: {
        /**
         * The event id to look up
         */
        id: number,
        requestBody: UserEventPatchModel,
    }): CancelablePromise<UserEventModel> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/user-event/{id}',
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
