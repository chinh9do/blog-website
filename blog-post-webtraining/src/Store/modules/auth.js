import router from "@/routes";
import AuthService from "@/services/auth.service";
import TokenService from "@/services/token.service";
import { errorNotify } from "@/shared/notifications";

const authModule = {
  namespaced: true,
  state() {
    return {
      loggedIn: false,
      token: "",
      refreshToken: "",
    };
  },
  getters: {
    getLoggedInStatus(state) {
      return state.loggedIn;
    },
    getAuth(state) {
      return { accessToken: state.token, refreshToken: state.refreshToken };
    },
    getError(state) {
      return state.error;
    },
  },
  mutations: {
    loginSuccess(state) {
      state.loggedIn = true;
    },
    loginFailure(state) {
      state.loggedIn = false;
    },
    logout(state) {
      state.loggedIn = false;
    },
    saveAuth(state, payload) {
      state.token = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
    resetAuth(state) {
      state.token = null;
      state.refreshToken = null;
    },
  },
  actions: {
    signIn({ commit }, user) {
      AuthService.login(user)
        .then((response) => {
          commit("loginSuccess");
          TokenService.saveAuth(response.data);
          router.push("/");
        })
        .catch((error) => {
          errorNotify(commit, error.message);

          console.log("error", error);

          commit("loginFailure");
        });
    },
    signOut({ commit }) {
      TokenService.removeToken();
      commit("logout");
      commit("resetAuth");
      router.push('/');
    },
    refreshToken({ commit }, payload) {
      commit("loginSuccess");
      commit("saveAuth", payload);
      TokenService.saveAuth(payload.data);
    },

    autoLogin({ commit }) {
      const auth = TokenService.getAuth();
      // console.log('okokokook', auth)
      if (auth.accessToken !== null) {
        commit("loginSuccess");
        commit('saveAuth', auth);
      }
    }
  },
};

export default authModule;
