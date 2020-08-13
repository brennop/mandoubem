import Vue from 'vue';
import Vuex from 'vuex';
import '@fortawesome/fontawesome-free/css/all.css';
import 'typeface-inter';
import { login, getReceivers } from '../services/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenticated: localStorage.getItem('token'),
    receivers: []
  },
  mutations: {
    authenticate(state) {
      state.authenticated = true;
    },
    setReceivers(state, receivers) {
      state.receivers = receivers;
    }
  },
  actions: {
    login({ commit }, data) {
      login(data).then(token => {
        localStorage.setItem('token', token);
        commit('authenticate');
      });
    },
    getReceivers({ commit }) {
      getReceivers().then(receivers => commit('setReceivers', receivers));
    }
  },
  getters: {}
});
