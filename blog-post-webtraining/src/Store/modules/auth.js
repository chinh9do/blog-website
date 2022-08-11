import axios from "axios";
import router from "@/routes";
import AuthService from "../../services/auth.service";

const authModule = {
  namespaced: true,
  state() {
    return {
      loggedIn: false,
      token: "",
      refreshToken: "",
    };
  },
  mutations: {
    loginSuccess(state) {
      state.status.loggedIn = true;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
    },
    logout(state) {
      state.status.loggedIn = false;
    },
    refreshToken(state, accessToken) {
      state.status.loggedIn = true;
      state.token = accessToken;
    },
    authUSer(state, payload) {
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
    },
    resetAuth(state) {
      state.token = null;
      state.refreshToken = null;
    },
  },
  actions: {
    async signIn({ commit, dispatch }, user) {
      console.log(user);
      try {
        const response = await AuthService.login(user);
        console.log(response.data);
        commit("authUser", response.data);
        commit("loginSuccess");
        dispatch("setToken", response.data);
        router.push("/");
      } catch (_error) {
        commit("loginFailure");
        console.log(_error);
      }
    },
    signOut({ commit }) {
      AuthService.logout();
      commit("logout");
    },
    refreshToken({ commit }, accessToken) {
      commit("refreshToken", accessToken);
    },
  },
};

export default authModule;
