import router from "@/routes";
import AuthService from "@/services/auth.service";
import TokenService from "@/services/token.service";

const authModule = {
  namespaced: true,
  state() {
    return {
      loggedIn: false,
      token: "",
      error: [false, ''],
      refreshToken: "",
    };
  },
  getters: {
    getAuth(state) {
      return { token: state.token, refreshToken: state.refreshToken }
    },
    getError(state) {
      return state.error
    }
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
    saveAuthData(state, payload) {
      TokenService.saveAuth(payload);
  
      state.token = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
    resetAuth(state) {
      state.token = null;
      state.refreshToken = null;
    },
    setError(state, message) {
      state.error = [true, message]
    }
  },
  actions: {
    async signIn({ commit }, user) {
      AuthService.login(user).then((response) => {
        console.log(response.data);
        commit("loginSuccess");
        commit("saveAuthData", response.data);
        router.push("/");
      }).catch(error => {
        commit("loginFailure");
        commit('setError', error?.message)
        console.log(error);
      });
    },
    signOut({ commit }) {
      TokenService.removeToken();
      commit("logout");
      commit("resetAuth");
    },
    refreshToken({ commit }, accessToken) {
      commit("refreshToken", accessToken);
    },
  }
};

export default authModule;
