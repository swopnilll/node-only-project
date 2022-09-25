import { User } from '../domain/User';

import users from '../user.json';

/**
 * Get all the users.
 * @returns {Promise<User[]>}
 */
 export const getAllUser = async (): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    resolve(users);
  });
};