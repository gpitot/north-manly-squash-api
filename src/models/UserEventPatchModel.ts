/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * User event model , ties user to the event
 */
export type UserEventPatchModel = {
    /**
     * User has paid or not
     */
    paid?: boolean;
    /**
     * Is user still enrolled
     */
    enabled?: boolean;
};

