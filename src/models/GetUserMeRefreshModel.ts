/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserWithoutPasswordModel } from './UserWithoutPasswordModel';

/**
 * UserRefresh
 */
export type GetUserMeRefreshModel = {
    /**
     * Authentication token
     */
    accessToken?: string;
    user?: UserWithoutPasswordModel;
};

