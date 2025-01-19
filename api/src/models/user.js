// @ts-ignore
import mongoose from 'mongoose';
import Exception from '@root/exceptions.js';

const UserSchema = new mongoose.Schema(
    {
        account_id: {
            type: mongoose.Schema.Types.ObjectId,
            unique: [true, Exception.getError('Account is already exists')],
            ref: 'Account',
            required: [true, Exception.getError('Account is required')],
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        avatar: {
            type: String,
            default: null,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
    }
);

const User = mongoose.model('User', UserSchema);

export default User;
