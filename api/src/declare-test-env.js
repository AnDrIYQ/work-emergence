// @ts-nocheck
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

export default function declareEnv() {
    let mongoServer;
    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        await mongoose.connect(uri);
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });
}