// @ts-nocheck
import declareEnv from '@root/declare-test-env';
import createRequest from '@root/tests/utils/create-request';
import { describe, test } from 'vitest';

// Register
/* @todo Test min/max length password */
/* @todo Test unique email */
/* @todo Test confirm password equal */
/* @todo Test code send and activate account */

// Login
/* @todo Test wrong password */
/* @todo Test success login */

describe('Authentication tests', () => {
    declareEnv();
    const request = createRequest();

    test('Test', async () => {
        const response = await request.post('/register').send({ username: 'as', password: 'q1w2e3' });

    });
})
