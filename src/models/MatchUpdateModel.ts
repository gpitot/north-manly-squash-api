/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Update match details between two players
 */
export type MatchUpdateModel = {
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
    player_1_paid?: boolean;
    /**
     * Player 2 has paid
     */
    player_2_paid?: boolean;
    /**
     * Admin has approved match result
     */
    approved?: boolean;
    /**
     * User has accepted match challenge
     */
    accepted?: boolean;
    /**
     * User has declined match challenge
     */
    declined?: boolean;
};

