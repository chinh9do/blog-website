import api from "./api";
import TokenService from "./token.service";
import axios from "axios";
import store from "@/store";

const jwtInterceptor = api;

jwtInterceptor.interceptors.request.use((config) => {
  const token = TokenService.getAccessToken();
  if (token === null || token === undefined) {
    return config;
  }

  config.headers.common["Authorization"] = `Bearer ${token}`;
  return config;
});

jwtInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      const authData = TokenService.getAuth();
      var response = await api.post("users/refresh-token", authData);

      await store.dispatch("auth/refreshToken", response.data);
      error.config.headers[
        "Authorization"
      ] = `Bearer ${response.data.accessToken}`;
      // identity server 4 instead of authentication
      return axios(error.config);
    } else {
      return Promise.reject(error);
    }
  }
);

export default jwtInterceptor;