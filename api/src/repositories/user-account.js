// @ts-ignore
import Account from '@root/models/account.js';
import User from '@root/models/user.js';
import mongoose from 'mongoose';
import fs from 'fs/promises';
import path from 'path';

class AccountUserRepository {
    /**
     * Creates a new account.
     * @param {Object} accountData
     * @returns {Promise<Object>} The created account.
     */
    async createAccount(accountData) {
        return Account.create(accountData);
    }

    /**
     * Creates a new user.
     * @param {Object} userData
     * @returns {Promise<Object>} The created user.
     */
    async createUser(userData) {
        const user = await User.create(userData);
        await this.syncFileSystem('User', user._id, 'avatar', user.avatar);
        return user;
    }

    /**
     * Syncs a file field to the file system.
     * @param {String} entityType
     * @param {String} entityId
     * @param {String} fieldName
     * @param {String} filePath
     */
    async syncFileSystem(entityType, entityId, fieldName, filePath) {
        if (!filePath) return;

        const entityFolder = path.join('storage', entityType, entityId.toString(), fieldName);
        await fs.mkdir(entityFolder, { recursive: true });

        const destination = path.join(entityFolder, path.basename(filePath));
        await fs.copyFile(filePath, destination);
    }

    /**
     * Retrieves an account by its ID.
     * @param {String} accountId
     * @returns {Promise<Object|null>} The account if found, otherwise null.
     */
    async getAccountById(accountId) {
        return await Account.findById(accountId).exec();
    }

    /**
     * Retrieves a user by its ID.
     * @param {String} userId
     * @returns {Promise<Object|null>} The user if found, otherwise null.
     */
    async getUserById(userId) {
        return await User.findById(userId).exec();
    }

    /**
     * Updates an account by its ID.
     * @param {String} accountId
     * @param {Object} updateData
     * @returns {Promise<Object|null>} The updated account.
     */
    async updateAccount(accountId, updateData) {
        return await Account.findByIdAndUpdate(accountId, updateData, { new: true }).exec();
    }

    /**
     * Updates a user by its ID.
     * @param {String} userId
     * @param {Object} updateData
     * @returns {Promise<Object|null>} The updated user.
     */
    async updateUser(userId, updateData = {}) {
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true }).exec();
        if (updateData.avatar) {
            await this.syncFileSystem('User', userId, 'avatar', updateData.avatar);
        }
        return updatedUser;
    }

    /**
     * Deletes an account by its ID.
     * @param {String} accountId
     * @returns {Promise<Object|null>} The deleted account.
     */
    async deleteAccount(accountId) {
        return await Account.findByIdAndDelete(accountId).exec();
    }

    /**
     * Deletes a user by its ID.
     * @param {String} userId
     * @returns {Promise<Object|null>} The deleted user.
     */
    async deleteUser(userId) {
        return await User.findByIdAndDelete(userId).exec();
    }

    /**
     * Retrieves an account by its email.
     * @param {String} email
     * @returns {Promise<Object|null>} The account if found, otherwise null.
     */
    async getAccountByEmail(email) {
        return await Account.findOne({ email }).exec();
    }

    /**
     * Validates a password for the given account ID.
     * @param {String} accountId
     * @param {String} password
     * @returns {Promise<Boolean>} True if the password is valid, otherwise false.
     */
    async validatePassword(accountId, password) {
        const account = await Account.findById(accountId).exec();
        if (!account) return false;
        return account.comparePassword(password); // Uses the Account method
    }

    /**
     * Retrieves a user by its associated account ID.
     * @param {String} accountId
     * @returns {Promise<Object|null>} The user if found, otherwise null.
     */
    async getUserByAccountId(accountId) {
        return await User.findOne({ account_id: accountId }).exec();
    }

    /**
     * Retrieves an account by its associated user ID.
     * @param {String} userId
     * @returns {Promise<Object|null>} The account if found, otherwise null.
     */
    async getAccountByUserId(userId) {
        const user = await User.findById(userId).exec();
        if (!user) return null;
        return await Account.findById(user.account_id).exec();
    }

    /**
     * Creates an account and a user in a single transaction.
     * @param {Object} accountData
     * @param {Object} userData
     * @returns {Promise<Object>} The created account and user.
     */
    async createFullUser(accountData, userData) {
        const session = await mongoose.startSession();
        session.startTransaction();

        try {
            const account = await Account.create([accountData], { session });
            userData.account_id = account[0]._id;
            const user = await User.create([userData], { session });

            if (userData.avatar) {
                await this.syncFileSystem('User', user._id, 'avatar', userData.avatar);
            }

            await session.commitTransaction();
            await session.endSession();

            return { account: account[0], user: user[0] };
        } catch (error) {
            await session.abortTransaction();
            await session.endSession();
            throw error;
        }
    }

    /**
     * Deletes an account and its associated user in a single transaction.
     * @param {String} accountId
     * @returns {Promise<void>}
     */
    async deleteFullUser(accountId) {
        const session = await mongoose.startSession();
        session.startTransaction();

        try {
            await User.deleteOne({ account_id: accountId }, { session });
            await Account.findByIdAndDelete(accountId, { session });

            await session.commitTransaction();
            await session.endSession();
        } catch (error) {
            await session.abortTransaction();
            await session.endSession();
            throw error;
        }
    }
}

export default new AccountUserRepository();
