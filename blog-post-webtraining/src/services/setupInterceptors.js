import api from "./api";
import TokenService from "./token.service";
import axios from "axios";
import store from "@/store";

const jwtInterceptor = api;

jwtInterceptor.interceptors.request.use((config) => {
  // const authData = store.getters["auth/getAuth"];
  // console.log(authData, 'start')
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
      console.log(authData, '401')
      var response = await api.post("users/refresh-token", authData);
      console.log(response, '402')
      await store.dispatch("auth/refreshToken", response.data);
      // TokenService.saveAuth(response.data);
      error.config.headers[
        "Authorization"
      ] = `Bearer ${response.data.accessToken}`;
      return axios(error.config);
    } else {
      return Promise.reject(error);
    }
  }
);

export default jwtInterceptor;


// const jwtInterceptor = (store) => {
//   axiosInstance.interceptors.request.use(
//     (config) => {
//       const token = TokenService.getAccessToken();
//       if (token) {
//         config.headers["Authorization"] = 'Bearer ' + token;
//         // config.headers["x-access-token"] = token; // for Node.js Express back-end
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

//   axiosInstance.interceptors.response.use(
//     (res) => {
//       console.log(res, 'res 401');
//       return res;
//     },
//     async (error) => {
//       console.log(error, 'error 401');

//       if (error.response.status === 401) {
//         const payload = store.getters["auth/getAuth"];
//         var response = await axiosInstance.post("users/refresh-token", payload);

//         await store.dispatch("auth/refreshToken", response.data);
//         error.config.headers[
//           "Authorization"
//         ] = `bearer ${response.data.accessToken}`;
//         return axios(error.config);
//       } else {
//         return Promise.reject(error);
//       }
//     }
//     // async (err) => {
//     //   const originalConfig = err.config;
//     //   console.log(err, 'error 401');
//     //   if (originalConfig.url !== "/users/login" && err.response) {
//     //     if (originalConfig.url !== "/users/login" && err.response) {
//     //       // Access Token was expired
//     //       if (err.response.status === 401 && !originalConfig._retry) {
//     //         originalConfig._retry = true;

//     //         try {
//     //           const rs = await axiosInstance.post("/users/refresh-token", {
//     //             refreshToken: TokenService.getRefreshToken(),
//     //           });

//     //           const { accessToken } = rs.data;

//     //           store.dispatch('auth/refreshToken', accessToken);
//     //           TokenService.updateLocalAccessToken(accessToken);

//     //           return axiosInstance(originalConfig);
//     //         } catch (_error) {
//     //           return Promise.reject(_error);
//     //         }
//     //       }
//     //     }

//     //     return Promise.reject(err);
//     //   }
//   );
// };

// export default jwtInterceptor;