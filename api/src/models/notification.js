// @ts-ignore
import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema(
    {
        account_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Account',
            required: true,
        },
        type: {
            type: String,
            enum: ['info', 'warning', 'error'],
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        isRead: {
            type: Boolean,
            default: false,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: { createdAt: 'createdAt', updatedAt: false },
    }
);

const Notification = mongoose.model('Notification', NotificationSchema);

export default Notification;
