import axiosInstance from "./api";
import TokenService from "./token.service";

const setup = (store) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = TokenService.getAccessToken();
      if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;
        // config.headers["x-access-token"] = token; // for Node.js Express back-end
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      if (error.response.status === 401) {
        const payload = store.getters["auth/getAuth"];

        var response = await axiosInstance.post("user/refresh-token", payload);

        await store.dispatch("auth/saveTokensToStorage", response.data);
        error.config.headers[
          "Authorization"
        ] = `bearer ${response.data.accessToken}`;
        return axios(error.config);
      } else {
        return Promise.reject(error);
      }
    }
    // async (err) => {
    //   const originalConfig = err.config;

    //   if (originalConfig.url !== "/user/login" && err.response) {
    //     // Access Token was expired
    //     if (err.response.status === 401 && !originalConfig._retry) {
    //       originalConfig._retry = true;

    //       try {
    //         const rs = await axiosInstance.post("/user/refreshToken", {
    //           refreshToken: TokenService.getRefreshToken(),
    //         });

    //         const { accessToken } = rs.data;

    //         store.dispatch('auth/refreshToken', accessToken);
    //         TokenService.updateLocalAccessToken(accessToken);

    //         return axiosInstance(originalConfig);
    //       } catch (_error) {
    //         return Promise.reject(_error);
    //       }
    //     }
    //   }

    //   return Promise.reject(err);
    // }
  );
};

export default setup;