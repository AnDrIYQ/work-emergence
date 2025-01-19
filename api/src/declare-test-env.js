// @ts-nocheck
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { vol } from 'memfs';

vi.mock('node:fs', async () => {
    const memfs = await vi.importActual('memfs');
    return { default: memfs.fs };
});

vi.mock('node:fs/promises', async () => {
    const memfs = await vi.importActual('memfs');
    return { default: memfs.fs.promises };
});

export default function declareEnv() {
    let mongoServer;

    beforeAll(async () => {
        try {
            mongoServer = await MongoMemoryServer.create();
            const uri = mongoServer.getUri();

            await mongoose.connect(uri);

            vol.reset();
        } catch (error) {
            console.error("Error during setup:", error);
            throw error;
        }
    });

    afterAll(async () => {
        try {
            await mongoose.disconnect();
            await mongoServer.stop();

            vol.reset();
        } catch (error) {
            console.error("Error during teardown:", error);
        }
    });
}
