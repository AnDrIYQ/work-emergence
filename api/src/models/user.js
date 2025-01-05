const { Schema, model } = require('mongoose');

const schema = new Schema(
    { name: String },
    {
        toObject: {
            versionKey: false,
        }
    }
);

export default model('Test', schema);