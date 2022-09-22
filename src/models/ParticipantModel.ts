/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserBaseModel } from './UserBaseModel';
import type { UserEventModel } from './UserEventModel';

/**
 * Participant model for events
 */
export type ParticipantModel = {
    user?: UserBaseModel;
    user_event?: UserEventModel;
};

