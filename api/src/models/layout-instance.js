// @ts-ignore
import mongoose from 'mongoose';

const LayoutInstanceSchema = new mongoose.Schema(
    {
        instance_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        instance_type: {
            type: String,
            enum: ['Record', 'Singleton'],
            required: true,
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

const LayoutInstance = mongoose.model('LayoutInstance', LayoutInstanceSchema);

export default LayoutInstance;
