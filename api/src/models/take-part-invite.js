// @ts-ignore
import mongoose from 'mongoose';

const TakePartInviteSchema = new mongoose.Schema(
    {
        to_workspace_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Workspace',
            required: true,
        },
        by_member_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Participation',
            required: true,
        },
        to_account_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Account',
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'accepted', 'declined'],
            required: true,
            default: 'pending',
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

const TakePartInvite = mongoose.model('TakePartInvite', TakePartInviteSchema);

export default TakePartInvite;
