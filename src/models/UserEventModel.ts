/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * User event model , ties user to the event
 */
export type UserEventModel = {
    /**
     * ID of user_event
     */
    id: number;
    /**
     * ID of user
     */
    user_id: number;
    /**
     * ID of event
     */
    event_id: number;
    /**
     * Epoch registered
     */
    registered: string;
    /**
     * User has paid or not
     */
    paid: boolean;
    /**
     * Reciept copy
     */
    receipt?: string;
    /**
     * Is user still enrolled
     */
    enabled: boolean;
};

