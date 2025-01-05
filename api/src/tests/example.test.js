// @ts-nocheck
import declareEnv from '@root/declare-test-env.js';

import { describe, test } from 'vitest';
import AuthService from "@root/services/AuthService.js";

describe('Example', () => {
    declareEnv();

    test('example', async () => {
        const response = await AuthService.registerUser();
        const dataAfterCreate = await AuthService.fetchUsers();

        expect(response).toEqual({
            success: true,
            data: {
                _id: expect.any(String),
                name: 'Some user'
            },
        });
        expect(dataAfterCreate).toEqual([
            {
                _id: expect.any(String),
                name: 'Some user'
            }
        ]);
    })
})
