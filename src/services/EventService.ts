/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetEventsResponseModel } from '../models/GetEventsResponseModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EventService {

    /**
     * Get all open events
     * @returns GetEventsResponseModel successful response
     * @throws ApiError
     */
    public static getEvents(): CancelablePromise<GetEventsResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/event',
            errors: {
                500: `An internal error occurred`,
            },
        });
    }

}
