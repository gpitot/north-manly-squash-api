/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A match between two players
 */
export type MatchWithUserDetailsModel = {
    /**
     * ID of match
     */
    id: number;
    /**
     * Player 1 ID
     */
    player_1: number;
    /**
     * Player 1 firstname
     */
    player_1_firstname: string;
    /**
     * Player 1 lastname
     */
    player_1_lastname: string;
    /**
     * Player 2 ID
     */
    player_2: number;
    /**
     * Player 2 firstname
     */
    player_2_firstname: string;
    /**
     * Player 2 lastname
     */
    player_2_lastname: string;
    /**
     * Epoch of challenge date
     */
    challenge_date: string;
    /**
     * Epoch of match date
     */
    match_date?: string;
    /**
     * Number of games won by player 1
     */
    player_1_games?: number;
    /**
     * Number of games won by player 2
     */
    player_2_games?: number;
    /**
     * Player 1 has paid
     */
    player_1_paid: boolean;
    /**
     * Player 2 has paid
     */
    player_2_paid: boolean;
    /**
     * Admin has approved match result
     */
    approved: boolean;
    /**
     * User has accepted match challenge
     */
    accepted: boolean;
    /**
     * User has declined match challenge
     */
    declined: boolean;
    /**
     * Admin has reminded users about match
     */
    reminded: boolean;
};

