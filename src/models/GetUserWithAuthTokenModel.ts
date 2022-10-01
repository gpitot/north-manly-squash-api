/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserWithoutPasswordModel } from './UserWithoutPasswordModel';

/**
 * UserRefresh
 */
export type GetUserWithAuthTokenModel = {
    /**
     * Authentication token
     */
    accessToken: string;
    user: UserWithoutPasswordModel;
};

