/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventModel } from '../models/EventModel';
import type { GetUserWithAuthTokenModel } from '../models/GetUserWithAuthTokenModel';
import type { UserCreateModel } from '../models/UserCreateModel';
import type { UserGeneratePasswordResetModel } from '../models/UserGeneratePasswordResetModel';
import type { UserLoginModel } from '../models/UserLoginModel';
import type { UserPatchModel } from '../models/UserPatchModel';
import type { UserResetPasswordModel } from '../models/UserResetPasswordModel';
import type { UserWithoutPasswordModel } from '../models/UserWithoutPasswordModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Get current user details
     * @returns UserWithoutPasswordModel successful response
     * @throws ApiError
     */
    public static getUserMe({
        xSquashAuth,
    }: {
        xSquashAuth: string,
    }): CancelablePromise<UserWithoutPasswordModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/me',
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
     * Get specific user details
     * @returns UserWithoutPasswordModel successful response
     * @throws ApiError
     */
    public static getUserById({
        id,
        xSquashAuth,
    }: {
        /**
         * The event id to look up
         */
        id: number,
        xSquashAuth: string,
    }): CancelablePromise<UserWithoutPasswordModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Squash-Auth': xSquashAuth,
            },
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                403: `Unauthorised access to specified resource`,
                500: `An internal error occurred`,
            },
        });
    }

    /**
     * Update user details
     * @returns UserWithoutPasswordModel successful response
     * @throws ApiError
     */
    public static patchUser({
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
         * User patch details
         */
        requestBody: UserPatchModel,
    }): CancelablePromise<UserWithoutPasswordModel> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/user/{id}',
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

    /**
     * Get users past events
     * @returns EventModel successful response
     * @throws ApiError
     */
    public static getUserPastEvents({
        id,
        xSquashAuth,
    }: {
        /**
         * The event id to look up
         */
        id: number,
        xSquashAuth: string,
    }): CancelablePromise<EventModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/{id}/events',
            path: {
                'id': id,
            },
            headers: {
                'X-Squash-Auth': xSquashAuth,
            },
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                403: `Unauthorised access to specified resource`,
                500: `An internal error occurred`,
            },
        });
    }

    /**
     * Get current user details
     * @returns GetUserWithAuthTokenModel successful response
     * @throws ApiError
     */
    public static getUserRefresh({
        xSquashAuth,
    }: {
        xSquashAuth: string,
    }): CancelablePromise<GetUserWithAuthTokenModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/refresh',
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
     * User login
     * @returns GetUserWithAuthTokenModel successful response
     * @throws ApiError
     */
    public static postUserLogin({
        requestBody,
    }: {
        /**
         * User login details
         */
        requestBody: UserLoginModel,
    }): CancelablePromise<GetUserWithAuthTokenModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                500: `An internal error occurred`,
            },
        });
    }

    /**
     * User create
     * @returns GetUserWithAuthTokenModel successful response
     * @throws ApiError
     */
    public static postUserCreate({
        requestBody,
    }: {
        /**
         * User create account
         */
        requestBody: UserCreateModel,
    }): CancelablePromise<GetUserWithAuthTokenModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/create',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                500: `An internal error occurred`,
            },
        });
    }

    /**
     * User reset password
     * @returns void
     * @throws ApiError
     */
    public static postUserResetPassword({
        requestBody,
    }: {
        /**
         * User reset password
         */
        requestBody: UserResetPasswordModel,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/password/reset',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                500: `An internal error occurred`,
            },
        });
    }

    /**
     * User generate reset token
     * @returns void
     * @throws ApiError
     */
    public static postUserGenerateResetPassword({
        requestBody,
    }: {
        /**
         * User generate reset token
         */
        requestBody: UserGeneratePasswordResetModel,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/password/generate',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                500: `An internal error occurred`,
            },
        });
    }

}
