import mongoose from 'mongoose';

const EntitySchema = new mongoose.Schema(
    {
        workspace_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Workspace',
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
        discriminatorKey: 'type',
        timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
    }
);

const Entity = mongoose.model('Entity', EntitySchema);

const TableEntity = Entity.discriminator(
    'TableEntity',
    new mongoose.Schema({}, { timestamps: false })
);

const ListEntity = Entity.discriminator(
    'ListEntity',
    new mongoose.Schema({}, { timestamps: false })
);

export { Entity, TableEntity, ListEntity };
