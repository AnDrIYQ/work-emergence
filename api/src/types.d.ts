import { ObjectId } from 'mongoose';

export type User = {
    _id: string|undefined|ObjectId;
    name: string;
};
export type UserInputData = {
    name: string;
};

export type ServiceActionResponse<T> = {
    success: boolean;
    data?: T;
    error?: string;
};
