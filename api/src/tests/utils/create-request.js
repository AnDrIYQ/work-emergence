// @ts-ignore
import defaults from 'superagent-defaults';
import supertest from 'supertest';
import jwt from 'jsonwebtoken';
import app from '@root/app.js';

const createRequest = (getTokenCallback = null, withoutToken = false) => {
    const request = defaults(supertest(app));

    if (withoutToken) {
        return request;
    }

    let token;
    if (getTokenCallback) {
        // @ts-ignore
        token = getTokenCallback();
    } else {
        token = jwt.sign({ userId: 'test-user' }, 'test_secret_key', { expiresIn: '1h' });
    }

    request.set('Authorization', `Bearer ${token}`);

    return request;
};


export default createRequest;
