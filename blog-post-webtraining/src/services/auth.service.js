import api from "./api";
import TokenService from "./token.service";

class AuthService {
  async login(userModel) {
    const response = await api.post("/user/login", userModel);

    if (response.data.accessToken) {
      TokenService.setToken(response.data);
    }

    return response.data;
  }

  logout() {
    TokenService.removeToken();
  }

  // register({ username, email, password }) {
  //   return api.post("/auth/signup", {
  //     username,
  //     email,
  //     password,
  //   });
  // }
}

export default new AuthService();
