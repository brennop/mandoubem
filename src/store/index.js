import Vue from "vue";
import Vuex from "vuex";
import "@fortawesome/fontawesome-free/css/all.css";
import "typeface-inter";
import { login } from "../services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenticated: false,
  },
  mutations: {
    authenticate(state) {
      state.authenticated = true;
    },
  },
  actions: {
    login({ commit }, data) {
      login(data).then((token) => {
        localStorage.setItem("token", token);
        commit("authenticate");
      });
    },
  },
  getters: {},
});
