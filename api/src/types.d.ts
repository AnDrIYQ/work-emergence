// import { ObjectId } from 'mongoose';
export type ServiceActionResponse<T> = {
    success: boolean;
    data?: T;
    errors?: string[];
};

export type RegisterUserInputData = {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
};

export type ConfirmAccountInputData = {
    code: string;
};
