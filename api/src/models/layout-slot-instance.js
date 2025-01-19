// @ts-ignore
import mongoose from 'mongoose';

const LayoutSlotInstanceSchema = new mongoose.Schema(
    {
        slot_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Slot',
            required: true,
        },
        layout_instance_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'LayoutInstance',
            required: true,
        },
        field_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Field',
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

const LayoutSlotInstance = mongoose.model('LayoutSlotInstance', LayoutSlotInstanceSchema);

export default LayoutSlotInstance;
