/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A base user without email,phone,password
 */
export type UserBaseModel = {
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
};

