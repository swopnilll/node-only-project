import { Success } from "../domain/Success";
import { User } from "../domain/User";

import * as UserModels from "../models/UserModel";

/**
 * Get all the users.
 * @returns {Promise<Success<User[]>>}
 */
 export const getAllUsers = async (): Promise<Success<User[]>> => {
    const users = await UserModels.getAllUser();
  
    return {
      data: users,
      message: 'Users fetched successfully',
    };
  };