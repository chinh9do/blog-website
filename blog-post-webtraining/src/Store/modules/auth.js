import axios from "axios";
import router from "@/routes";

const authModule = {
    namespaced: true,
    state() {
        return {
            token: '',
            refreshToken: ''
        }
    },
    mutations: {
        authUSer(state, payload) {
            state.token = payload.token;
            state.refreshToken = payload.refreshToken
        },
        resetAuth(state) {
            state.token = null;
            state.refreshToken = null
        }
    },
    actions: {
        removeToken() {
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
        },
        setToken(context, payload) {
            localStorage.setItem('token', payload.token);
            localStorage.setItem('refreshToken', payload.refreshToken);
        },

        signIn(context, payload) {
            console.log(payload)
            const response = { token: '111', refreshToken: '2222' }
            context.commit('authUser', response.data);
            context.dispatch('setToken', response.data)
            // axios.post('', {})
            //     .then((reposne) => {
            //         console.log(response.data);
            //         context.commit('authUser', reposne.data);
            //         context.dispatch('setToken', reposne.data)
            //     })
            //     .catch(error => {
            //         console.log(error)
            //     });
        },
        signOut(context, payload) {
            context.commit('resetAuth');
            context.dispatch('removeToken');
            router.push('/');
        }
    }
};

export default authModule;