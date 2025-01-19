// @ts-ignore
import mongoose from 'mongoose';

const RecordSchema = new mongoose.Schema(
    {
        instance_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        instance_type: {
            type: String,
            enum: ['TableEntity', 'ListEntity'],
            required: true,
        },
        layout_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'LayoutInstance',
            required: true,
        },
        author_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Participation',
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

const Record = mongoose.model('Record', RecordSchema);

export default Record;
