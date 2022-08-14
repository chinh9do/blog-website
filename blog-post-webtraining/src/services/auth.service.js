import api from "./api";

class AuthService {
  async login(userModel) {
    const response = await api.post("/user/login", userModel);

    return response.data;
  }
}

export default new AuthService();
