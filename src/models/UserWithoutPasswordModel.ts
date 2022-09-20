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

