/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateEventModel } from '../models/CreateEventModel';
import type { EventModel } from '../models/EventModel';
import type { GetEventsResponseModel } from '../models/GetEventsResponseModel';
import type { PatchEventModel } from '../models/PatchEventModel';
import type { PostUserEventModel } from '../models/PostUserEventModel';
import type { UserEventModel } from '../models/UserEventModel';
import type { UserEventPatchModel } from '../models/UserEventPatchModel';

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
        xSquashAuth,
        requestBody,
    }: {
        xSquashAuth: string,
        requestBody: CreateEventModel,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/event',
            headers: {
                'X-Squash-Auth': xSquashAuth,
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
        id: number,
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
        xSquashAuth,
        requestBody,
    }: {
        /**
         * The event id to look up
         */
        id: number,
        xSquashAuth: string,
        requestBody: PatchEventModel,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/event/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Squash-Auth': xSquashAuth,
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
        xSquashAuth,
        requestBody,
    }: {
        /**
         * The event id to look up
         */
        id: number,
        xSquashAuth: string,
        /**
         * Admin adds user to event
         */
        requestBody?: PostUserEventModel,
    }): CancelablePromise<EventModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/event/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Squash-Auth': xSquashAuth,
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
     * Patch user event
     * @returns UserEventModel successful response
     * @throws ApiError
     */
    public static patchUserEvent({
        id,
        xSquashAuth,
        requestBody,
    }: {
        /**
         * The event id to look up
         */
        id: number,
        xSquashAuth: string,
        requestBody: UserEventPatchModel,
    }): CancelablePromise<UserEventModel> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/user-event/{id}',
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
