import jwt from 'jsonwebtoken';

// @ts-ignore

export const authMiddleware = (request, response, next) => {
    const token = request.headers.authorization?.split(' ')[1];
    if (!token) {
        return response.status(401).json({ error: 'Unauthorized' });
    }

    try {
        request.user = jwt.verify(token, 'test_secret_key');
        next();
    } catch (error) {
        return response.status(401).json({ error: 'Invalid token' });
    }
};
