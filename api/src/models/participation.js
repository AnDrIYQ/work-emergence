// @ts-ignore
import mongoose from 'mongoose';

const ParticipationSchema = new mongoose.Schema(
    {
        workspace_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Workspace',
            required: true,
        },
        account_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Account',
            required: true,
        },
        role_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Role',
            required: true,
        },
        status: {
            type: String,
            enum: ['active', 'pending', 'inactive'],
            required: true,
            default: 'pending',
        },
        joinedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
    }
);

const Participation = mongoose.model('Participation', ParticipationSchema);

export default Participation;
