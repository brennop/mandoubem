import Vue from 'vue';
import Vuex from 'vuex';
import '@fortawesome/fontawesome-free/css/all.css';
import 'typeface-inter';
import { login, getReceivers, getReceived, getSent } from '../services/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenticated: localStorage.getItem('token'),
    receivers: [],
    received: [],
    sent: [],
    action: 'send'
  },
  mutations: {
    authenticate(state) {
      state.authenticated = true;
    },
    setReceivers(state, receivers) {
      state.receivers = receivers;
    },
    setReceived(state, received) {
      state.received = received;
    },
    setSent(state, sent) {
      state.sent = sent;
    },
    setAction(state, action) {
      state.action = action;
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
    },
    getReceived({ commit }) {
      getReceived().then(receivers => commit('setReceived', receivers));
    },
    getSent({ commit }) {
      getSent().then(sent => {
        commit('setSent', sent);
      });
    },
    changeAction({ commit }, isIntersecting) {
      commit('setAction', isIntersecting ? 'send' : 'scroll');
    }
  },
  getters: {}
});
