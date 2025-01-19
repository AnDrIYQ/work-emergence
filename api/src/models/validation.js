// @ts-ignore
import mongoose from 'mongoose';

const ValidationSchema = new mongoose.Schema(
    {
        required: {
            type: Boolean,
            default: false,
        },
        min: {
            type: Number,
            default: null,
        },
        max: {
            type: Number,
            default: null,
        },
        regexp: {
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

const Validation = mongoose.model('Validation', ValidationSchema);

export default Validation;
