/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateEventModel } from '../models/CreateEventModel';
import type { EventModel } from '../models/EventModel';
import type { GetEventsResponseModel } from '../models/GetEventsResponseModel';
import type { PatchEventModel } from '../models/PatchEventModel';

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
        requestBody: CreateEventModel,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/event',
            body: requestBody,
            mediaType: 'application/json',
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
         * The event id to look up
         */
        id: string,
        requestBody: PatchEventModel,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/event/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Unauthorised access to specified resource`,
                500: `An internal error occurred`,
            },
        });
    }

    /**
     * Post event by ID
     * @returns EventModel successful response
     * @throws ApiError
     */
    public static postEventById({
        id,
    }: {
        /**
         * The event id to look up
         */
        id: string,
    }): CancelablePromise<EventModel> {
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
