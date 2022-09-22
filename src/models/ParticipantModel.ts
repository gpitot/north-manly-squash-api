/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserEventModel } from './UserEventModel';
import type { UserModel } from './UserModel';

/**
 * Participant model for events
 */
export type ParticipantModel = {
    user?: UserModel;
    user_event?: UserEventModel;
};

