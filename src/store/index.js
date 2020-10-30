import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from "axios";
import router from "../router";
// import { Object } from "core-js";

export default new Vuex.Store({
  
  state: {
    data: {},
    smallCategorie: [],
    bigCategorie:[]
  },

  mutations: {
    SET_DATA(state, value) {
      state.data = value;
    },
    SET_BCATEGORIE(state, bigCategorie) {
      state.bigCategorie = bigCategorie;
    },
    SET_SCATEGORIE(state, smallCategorie) {
      state.smallCategorie = smallCategorie;
    },
  },

  actions: {
    async setBigCategorie(context) {
      await axios.post("http://localhost:4000/setBigCategorie", context.state.data);
      router.push("/");
    },
    async getBigCategorie(context) {
      const { data: bigCategorie } = await axios.get("http://localhost:4000/getBigCategorie");
      context.commit("SET_BCATEGORIE", bigCategorie);
    },
    async setSmallCategorie(context) {
      await axios.post("http://localhost:4000/setSmallCategorie", context.state.data);
      router.push("/");
    },
    async getSmallCategorie(context) {
      const { data: smallCategorie } = await axios.get("http://localhost:4000/getSmallCategorie");
      context.commit("SET_SCATEGORIE", smallCategorie);
    },
  },

  modules: {
  }

})
