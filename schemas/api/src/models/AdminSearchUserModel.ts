/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserWithoutPasswordModel } from './UserWithoutPasswordModel';

/**
 * Admin search user model
 */
export type AdminSearchUserModel = {
    /**
     * A list of users matching search
     */
    users?: Array<UserWithoutPasswordModel>;
};

