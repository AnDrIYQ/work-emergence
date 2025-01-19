/** @import { ServiceActionResponse, RegisterUserInputData } from "@root/types.js" */
import AccountModel from '@root/models/account.js';
import Exception from "@root/exceptions.js";

export default class AuthService {
    /**
     * @param {RegisterUserInputData} data
     * @returns {Promise<ServiceActionResponse<any>>}
     */
    static async registerUser({ email, password, confirmPassword }) {
        if (password !== confirmPassword) {
            return {
                success: false,
                errors: [
                    Exception.getError('Passwords do not match')
                ],
            };
        }

        try {
            const accountInstance = await AccountModel.create({
                email,
                password,
            });

            return {
                success: true,
                data: accountInstance.toObject(),
            };
        } catch (/** @type {any} */ data) {
            return {
                success: false,
                errors: Exception.get(data.errors),
            };
        }
    }
}
