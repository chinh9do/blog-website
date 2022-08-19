import api from "./api";

class AuthService {
  async login(userModel) {
    return await api.post("users/login", userModel);
  }
}

export default new AuthService();
