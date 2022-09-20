/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetUserByIDResponseModel } from '../models/GetUserByIDResponseModel';
import type { GetUserMeRefreshModel } from '../models/GetUserMeRefreshModel';
import type { GetUserMeResponseModel } from '../models/GetUserMeResponseModel';
import type { UserCreateModel } from '../models/UserCreateModel';
import type { UserLoginModel } from '../models/UserLoginModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Get current user details
     * @returns GetUserMeResponseModel successful response
     * @throws ApiError
     */
    public static getUserMe(): CancelablePromise<GetUserMeResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/me',
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                500: `An internal error occurred`,
            },
        });
    }

    /**
     * Get specific user details
     * @returns GetUserByIDResponseModel successful response
     * @throws ApiError
     */
    public static getUserById({
        id,
    }: {
        /**
         * The user id to look up
         */
        id: string,
    }): CancelablePromise<GetUserByIDResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                500: `An internal error occurred`,
            },
        });
    }

    /**
     * Get current user details
     * @returns GetUserMeRefreshModel successful response
     * @throws ApiError
     */
    public static getUserRefresh(): CancelablePromise<GetUserMeRefreshModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/refresh',
            errors: {
                401: `Unauthenticated access to the specified resource. Check that the credentials are correct, have been presented correctly, are suitable for the specified endpoint, and have not expired or been revoked`,
                500: `An internal error occurred`,
            },
        });
    }

    /**
     * User login
     * @returns GetUserMeRefreshModel successful response
     * @throws ApiError
     */
    public static postUserLogin({
        requestBody,
    }: {
        /**
         * User login details
         */
        requestBody?: UserLoginModel,
    }): CancelablePromise<GetUserMeRefreshModel> {
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
     * @returns GetUserMeRefreshModel successful response
     * @throws ApiError
     */
    public static postUserCreate({
        requestBody,
    }: {
        /**
         * User create account
         */
        requestBody?: UserCreateModel,
    }): CancelablePromise<GetUserMeRefreshModel> {
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

}
