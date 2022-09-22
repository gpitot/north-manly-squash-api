/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventModel } from '../models/EventModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EventService {

    /**
     * Get all open events with users
     * @returns any successful response
     * @throws ApiError
     */
    public static getEvents(): CancelablePromise<{
        events: Array<EventModel>;
    }> {
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
     * @returns EventModel successful response
     * @throws ApiError
     */
    public static getEventById({
        id,
    }: {
        /**
         * The event id to look up
         */
        id: string,
    }): CancelablePromise<EventModel> {
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
    public static patchEventById({
        id,
        requestBody,
    }: {
        /**
         * The event id to patch
         */
        id: string,
        /**
         * An event with event details
         */
        requestBody?: any,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/event/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
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
    public static postEventById({
        id,
    }: {
        /**
         * The event id to add user to
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/event/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Unauthorised access to specified resource`,
                500: `An internal error occurred`,
            },
        });
    }

}
