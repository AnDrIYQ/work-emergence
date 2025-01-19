// @ts-ignore
import mongoose from 'mongoose';

const WorkspaceConfigSchema = new mongoose.Schema(
    {
        workspace_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Workspace',
            required: true,
        },
        allow_comments: {
            type: Boolean,
            default: true,
        },
        allow_requests: {
            type: Boolean,
            default: true,
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

const WorkspaceConfig = mongoose.model('WorkspaceConfig', WorkspaceConfigSchema);

export default WorkspaceConfig