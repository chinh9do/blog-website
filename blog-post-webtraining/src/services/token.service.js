import { jwtDecrypt } from "@/shared/jwtHelper";
class TokenService {

  getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }

  getAccessToken() {
    return localStorage.getItem("token");
  }

  getAuth() {
    return { accessToken: this.getAccessToken(), refreshToken: this.getRefreshToken() }
  }

  updateLocalAccessToken(token) {
    localStorage.setItem("token", token);
  }

  getExpiredDate() {
    return jwtDecrypt(this.getAccessToken())?.exp;
  }

  getUserId() {
    return jwtDecrypt(this.getAccessToken())?.userId;
  }

  getUserName() {
    return jwtDecrypt(this.getAccessToken())?.userName;
  }

  saveAuth(payload) {
    console.log(JSON.stringify(payload));
    localStorage.setItem("token", payload.accessToken);
    localStorage.setItem("refreshToken", payload.refreshToken);
  }

  removeToken() {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  }
}

export default new TokenService();
