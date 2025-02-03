
export default class AuthService {
    static login(login, password) {
        return api.post('/login', {
            login,
            password,
        });
    }
}