/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A user without password
 */
export type UserWithoutPasswordModel = {
    /**
     * ID of user
     */
    id: number;
    /**
     * Email of user
     */
    email: string;
    /**
     * Firstname of user
     */
    firstname: string;
    /**
     * Lastname of user
     */
    lastname: string;
    /**
     * Phone of user
     */
    phone: string;
    /**
     * Role of user
     */
    role: string;
    /**
     * SportyHQ URL
     */
    sporty_hq_url?: string;
    /**
     * SportyHQ Rating
     */
    sporty_hq_rating: number;
    /**
     * Is SportyHQ approved by an admin
     */
    sporty_hq_approved: boolean;
    /**
     * Source of user
     */
    source?: string;
};

