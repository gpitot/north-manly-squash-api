/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ParticipantModel } from './ParticipantModel';

/**
 * An event with event details
 */
export type EventModel = {
    /**
     * ID of event
     */
    id: number;
    /**
     * Name of event
     */
    name: string;
    /**
     * Description of event
     */
    description: string;
    /**
     * Number of max spots open for event
     */
    spots: number;
    /**
     * Start epoch of event
     */
    start: string;
    /**
     * Open epoch of event
     */
    open: string;
    /**
     * Event is enabled or disabled
     */
    enabled: boolean;
    /**
     * Price of event in cents
     */
    price: number;
    /**
     * List of participants
     */
    participants?: Array<ParticipantModel>;
};

