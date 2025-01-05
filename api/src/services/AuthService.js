/** @import { ServiceActionResponse, User, UserInputData } from "@root/types.js" */

import UserModel from '@root/models/user.js';

export default class AuthService {
    /**
     * Register user
     * @returns {Promise<ServiceActionResponse<User>>}
     */
    static async registerUser() {
        /** @type UserInputData */
        const user = {
            name: 'Some user',
        };
        const instance = await UserModel.create({ name: user.name });

        return {
            success: !!instance._id,
            data: {
                name: instance.toObject().name || '',
                _id: instance.id,
            },
        };
    }

    /**
     * Fetch all users
     * @returns {Promise<Array<User>>} - Масив користувачів
     */
    static async fetchUsers() {
        return UserModel.aggregate([
            {
                $project: {
                    _id: {$toString: '$_id'},
                    name: 1,
                },
            },
        ]);
    }
}
