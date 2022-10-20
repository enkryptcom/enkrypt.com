import { createStore } from "vuex";

export default createStore({
  state: {
    isInternalPage: false,
  },
  mutations: {
    setInternal(state, val) {
      state.isInternalPage = val;
    },
  },
  actions: {
    initInternal({ commit }, internal) {
      commit("setInternal", internal);
    },
  },
  getters: {
    isInternalPage(state, getters) {
      return state.isInternalPage;
    },
  },
});
