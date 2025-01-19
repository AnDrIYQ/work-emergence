// @ts-nocheck
import express from "express";
import bodyParser from "body-parser";
import AuthController from "./controllers/AuthController";
import { body } from 'express-validator';

// Middlewares
import { authMiddleware } from '@root/middlewares/auth';

const app = express();

// Middleware for parsing JSON
app.use(bodyParser.json());

// Initialize AuthController
const authController = new AuthController();

// Routes
app.post("/register",
    authMiddleware,
    body('username').isString().notEmpty().withMessage('Username is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    authController.registerUser.bind(authController)
);

export default app;
