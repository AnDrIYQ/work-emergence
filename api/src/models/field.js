// @ts-ignore
import mongoose from 'mongoose';

const FieldSchema = new mongoose.Schema(
    {
        instance_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        instance_type: {
            type: String,
            enum: ['Record', 'Singleton', 'Report', 'User'],
            required: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        type: {
            type: String,
            enum: [
                'Text',
                'Textarea',
                'Number',
                'Select',
                'MultipleSelect',
                'File',
                'Image',
                'Gallery',
                'WYSIWYG',
                'Audio',
                'DateTime',
                'MapPoint',
                'Range',
                'Checkbox',
                'Rating',
                'UserReference',
                'EntityReference',
                'Tracker',
                'Color',
                'Group',
            ],
            required: true,
        },
        value: {
            type: mongoose.Schema.Types.Mixed,
            default: null,
        },
        validation_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Validation',
            default: null,
        },
        parent_field_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Field',
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

const Field = mongoose.model('Field', FieldSchema);

export default Field;
