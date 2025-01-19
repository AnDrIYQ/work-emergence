// @ts-nocheck
import { validationResult } from 'express-validator';

class AuthController {
    registerUser(request, response) {
        const { username, password } = request.body;
        const { headers } = request;
        console.log(headers.authorization);

        const { errors } = validationResult(request);
        if (errors.length) {
            return response.status(400).json({ errors });
        }

        return response.status(201).json({ message: "User registered successfully", user: { username, password } });
    }
}

export default AuthController;
