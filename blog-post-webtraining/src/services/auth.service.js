import api from "./api";
import TokenService from "./token.service";

class AuthService {
  async login(userModel) {
    const response = await api.post("/user/login", userModel);

    return response.data;
  }
}

export default new AuthService();
