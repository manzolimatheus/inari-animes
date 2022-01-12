import { createStore } from "vuex";

export default createStore({
  state: {
    toast: {
      show: false,
      message: "",
    },
  },
  mutations: {
    showToast(state, payload) {
      state.toast.show = true;
      state.toast.message = payload.message;
    },
  },
  actions: {},
  modules: {},
});
