// @ts-ignore
import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
    {
        instance_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        instance_type: {
            type: String,
            enum: ['Record', 'Singleton', 'Report'],
            required: true,
        },
        member_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Participation',
            required: true,
        },
        content: {
            type: String,
            required: true,
            trim: true,
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

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;
