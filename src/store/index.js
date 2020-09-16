import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from "axios";
import router from "../router";
// import { Object } from "core-js";

export default new Vuex.Store({
  
  state: {
    data: {},
    categorie: [],
    categories:['java:WorldEdit', 'java:Voxel', 'java:build', 'bedrock:build','forum']
  },

  mutations: {
    SET_DATA(state, value) {
      state.data = value;
    },
  },

  actions: {
    async createCategorie(context) {
      await axios.post("http://localhost:4000/createCategorie", context.state.data);
      router.push("/");
    },
  },

  modules: {
  }

})
