// @ts-ignore
import mongoose from 'mongoose';

const SingletonSchema = new mongoose.Schema(
    {
        workspace_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Workspace',
            required: true,
        },
        layout_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'LayoutInstance',
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        icon: {
            type: String,
            default: null,
        },
        color: {
            type: String,
            default: '#000'
        },
        description: {
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

const Singleton = mongoose.model('Singleton', SingletonSchema);

export default Singleton;
