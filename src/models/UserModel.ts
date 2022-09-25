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

/**
 * Get a user.
 * 
 * @param {Number} id
 * @returns {Promise<User[]>}
 */
 export const getUser = async (id: number): Promise<User> => {
  return new Promise((resolve, reject) => {
    const requiredUser = users.find((user) => user.id === id);

    if (requiredUser) {
      resolve(requiredUser);
    }

    reject({ statusCode: 404, message: 'User not found' });
  });
};

