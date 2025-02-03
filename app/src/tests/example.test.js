import { describe, it, expect } from 'vitest';

describe('Example Test Suite', () => {
    it('should add numbers correctly', () => {
        const sum = 1 + 1;
        expect(sum).toBe(2);
    });

    it('should compare strings correctly', () => {
        const message = 'Hello Vitest';
        expect(message).toMatch(/Vitest/);
    });
});
