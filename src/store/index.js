import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import auth from './auth/auth'
import categorie from './categorie/categorie'
import section from './section/section'
import sujet from './sujet/sujet'
import reponse from './reponse/reponse'

export default new Vuex.Store({
  modules: {
    auth,
    categorie,
    section,
    sujet,
    reponse
  },
  state: {
    data: {},
  },
  mutations: {
    SET_DATA(state, value) {
      state.data = value;
    },
  },
  actions: {},


})