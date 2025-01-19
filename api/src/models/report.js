// @ts-ignore
import mongoose from 'mongoose';

const ReportSchema = new mongoose.Schema(
    {
        workspace_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Workspace',
            required: true,
        },
        member_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Participation',
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
        type: {
            type: String,
            enum: ['bar', 'line', 'pie', 'scatter', 'heatmap'], // Перелік типів діаграм
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

const Report = mongoose.model('Report', ReportSchema);

export default Report;
