import Vue from "vue";
import Vuex from "vuex";
import UIstore from "./modules/ui";
import User from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    UIstore,
    User,
  },
});
