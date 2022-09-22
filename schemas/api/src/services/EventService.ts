/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetEventByIDResponseModel } from '../models/GetEventByIDResponseModel';
import type { GetEventsResponseModel } from '../models/GetEventsResponseModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EventService {

    /**
     * Get all open events with users
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

    /**
     * Create an event
     * @returns void
     * @throws ApiError
     */
    public static postEvent({
        requestBody,
    }: {
        /**
         * An event with event details
         */
        requestBody?: any,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/event',
            body: requestBody,
            errors: {
                403: `Unauthorised access to specified resource`,
                500: `An internal error occurred`,
            },
        });
    }

    /**
     * Get event by ID with event_users attached
     * @returns GetEventByIDResponseModel successful response
     * @throws ApiError
     */
    public static getEventById({
        id,
    }: {
        /**
         * The event id to look up
         */
        id: string,
    }): CancelablePromise<GetEventByIDResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/event/{id}',
            path: {
                'id': id,
            },
            errors: {
                500: `An internal error occurred`,
            },
        });
    }

    /**
     * Patch event by ID
     * @returns void
     * @throws ApiError
     */
    public static patchEventById(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/event/{id}',
            errors: {
                403: `Unauthorised access to specified resource`,
                500: `An internal error occurred`,
            },
        });
    }

    /**
     * Post event by ID
     * @returns void
     * @throws ApiError
     */
    public static postEventById(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/event/{id}',
            errors: {
                403: `Unauthorised access to specified resource`,
                500: `An internal error occurred`,
            },
        });
    }

}
