/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingCreateModel } from '../models/BookingCreateModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BookingService {

    /**
     * Create a booking request
     * @returns any successful response
     * @throws ApiError
     */
    public static postBooking({
        xSquashAuth,
        requestBody,
    }: {
        xSquashAuth: string,
        /**
         * Details about booking
         */
        requestBody: BookingCreateModel,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bookings/create',
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
