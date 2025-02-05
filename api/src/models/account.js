// @ts-ignore
// eslint-disable-next-line no-undef
const { Schema, model } = require('mongoose');
import Exception from '@root/exceptions.js';

// eslint-disable-next-line no-undef
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const schema = new Schema(
    {
        email: {
            type: String,
            validate: {
                validator: async function (/** @type {any} */ value) {
                    // @ts-ignore
                    const existingUser = await this.constructor.findOne({ email: value });
                    return !existingUser;
                },
                message: (/** @type {{ value: any; }} */ props) =>
                    Exception.getError('User with email "{value}" already exists', {
                        value: props.value,
                    }),
            },
            required: [true, Exception.getError('Field email is required')],
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: [8, Exception.getError('Password must be minimum 8 symbols')],
            maxlength: [16, Exception.getError('Password must be maximum 16 symbols')],
        },
        activated: {
            type: Boolean,
            default: false
        },
    },
    {
        toObject: {
            versionKey: false,
        },
    }
);

/**
 * @param {string} candidatePassword
 * @throws Error
 * @returns {Promise<boolean>}
 */
schema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

schema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    }
    next();
});

export default model('Account', schema);