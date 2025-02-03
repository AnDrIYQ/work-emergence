// @ts-nocheck
import express from "express";
import session from 'express-session';
import bodyParser from "body-parser";
import AuthController from "./controllers/AuthController";
import { body } from 'express-validator';
import 'dotenv/config';

// Middlewares
import { authMiddleware } from '@root/middlewares/auth';

const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30,
    },
}));

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
