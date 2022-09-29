/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An event with event details
 */
export type PatchEventModel = {
    /**
     * Name of event
     */
    name?: string;
    /**
     * Description of event
     */
    description?: string;
    /**
     * Number of max spots open for event
     */
    spots?: number;
    /**
     * Start epoch of event
     */
    start?: string;
    /**
     * Open epoch of event
     */
    open?: string;
    /**
     * Event is enabled or disabled
     */
    enabled?: boolean;
};

