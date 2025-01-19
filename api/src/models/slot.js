// @ts-ignore
import mongoose from 'mongoose';

const SlotSchema = new mongoose.Schema(
    {
        layout_instance_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'LayoutInstance',
            required: true,
        },
        column: {
            type: Number,
            required: true,
        },
        width: {
            type: Number,
            required: true,
            min: 0,
            max: 100,
        },
        row: {
            type: Number,
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

const Slot = mongoose.model('Slot', SlotSchema);

export default Slot;
