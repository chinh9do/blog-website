import { jwtDecrypt } from "@/shared/jwtHelper";
class TokenService {
  getLocalRefreshToken() {
    return localStorage.getItem("refreshToken");
  }

  getLocalAccessToken() {
    return localStorage.getItem("token");
  }

  updateLocalAccessToken(token) {
    localStorage.setItem("token", token);
  }

  getExpiredDate() {
    return jwtDecrypt(this.getLocalAccessToken())?.exp;
  }

  getUserId() {
    return jwtDecrypt(this.getLocalAccessToken())?.userId;
  }

  getUserName() {
    return jwtDecrypt(this.getLocalAccessToken())?.userName;
  }

  setToken(payload) {
    console.log(JSON.stringify(payload));
    localStorage.setItem("token", payload.token);
    localStorage.setItem("refreshToken", payload.refreshToken);
  }

  removeToken() {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  }
}

export default new TokenService();
