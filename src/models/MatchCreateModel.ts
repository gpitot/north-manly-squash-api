/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Details required to create an event
 */
export type MatchCreateModel = {
    /**
     * User ID that is being challenged
     */
    id: number;
    /**
     * User ID that is initiating challenge (admin only)
     */
    challenger_id?: number;
    /**
     * User firstname that is initiating challenge (admin only)
     */
    challenger_name?: string;
};

