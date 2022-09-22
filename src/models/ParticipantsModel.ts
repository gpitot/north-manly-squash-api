/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Participant model for events
 */
export type ParticipantsModel = {
    /**
     * A base user without email,phone,password
     */
    user?: {
        /**
         * ID of user
         */
        id: number;
        /**
         * Firstname of user
         */
        firstname: string;
        /**
         * Lastname of user
         */
        lastname: string;
        /**
         * Role of user
         */
        role: string;
        /**
         * Social streak of user
         */
        streak: number;
        /**
         * User is vaccinated
         */
        vaccinated: boolean;
        /**
         * Rank of user
         */
        rank: number;
    };
};

