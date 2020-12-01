import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from "axios";
import router from "../router";
import swal from 'sweetalert';

// import { Object } from "core-js";

export default new Vuex.Store({

  state: {
    data: {},
    smallCategorie: [],
    bigCategorie: [],
    sujet: [],
    sujetId: [],
    login: false
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
    SET_SUJET(state, sujet) {
      state.sujet = sujet;
    },
    SET_SUJETID(state, sujetId) {
      state.sujetId = sujetId;
    },
    SET_LOGIN(state, value) {
      state.login = value
    }
  },

  actions: {
    
    // CATEGORIE
    async setBigCategorie(context) {
      await axios.post("http://localhost:4000/setBigCategorie", context.state.data)
      router.push({ name: "Forum" })
    },
    async getBigCategorie(context) {
      const { data: bigCategorie } = await axios.get("http://localhost:4000/getBigCategorie");
      context.commit("SET_BCATEGORIE", bigCategorie);
    },
    async setSmallCategorie(context) {
      await axios.post("http://localhost:4000/setSmallCategorie", context.state.data);
      router.push({ name: "Forum" })
    },
    async getSmallCategorie(context) {
      const { data: smallCategorie } = await axios.get("http://localhost:4000/getSmallCategorie");
      context.commit("SET_SCATEGORIE", smallCategorie);
    },

    // SUJET
    async setSujet(context) {
      await axios.post("http://localhost:4000/setSujet", context.state.data);
      router.push({ name: "Forum" }).catch(() => { });
    },
    async getSujet(context, id) {
      const { data: sujet } = await axios.get("http://localhost:4000/getSmallCategorie/" + id);
      context.commit("SET_SUJET", sujet);
    },
    async getSujetId(context, id) {
      const { data: sujetId } = await axios.get("http://localhost:4000/getSujet/" + id);
      context.commit("SET_SUJETID", sujetId);
    },

    // AUTH
    async setLogin(context) {
      try {
        let response = await axios.post("http://localhost:4000/login", context.state.data);
        context.commit("SET_LOGIN" , true )
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          swal("Success", "connection reussi", "success");
          router.push("Home").catch(() => { });
        }
      } catch (err) {
        swal("Error", "Quelque chose s'est mal passé : ", "error");
      }
    },
    async setRegister(context) {
      try {
        let response = await axios.post("http://localhost:4000/register", context.state.data);
        console.log(response);
        let token = response.data.token;
        if (token) {
          console.log("token: " + token);
          localStorage.setItem("jwt", token);
          router.push("Home").catch(() => { });
          swal("Success", "Enregistrement reussi", "success");
        } else {
          swal("Error", "Quelque chose s'est mal passé : " + response.data.err, "error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          swal("Error", error.data.err.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
      }
    },
    async UserOut(context) {
      localStorage.removeItem("jwt");
      context.commit("SET_LOGIN", false)
      router.push("/").catch(()=>{});
      swal("Success", "déconnexion reussi", "success");
    }
    
    //     async getUserDetail(context{
    //       import VueJwtDecode from "vue-jwt-decode";
    // getUserDetails() {
    //       let token = localStorage.getItem("jwt");
    //       let decoded = VueJwtDecode.decode(token);
    //       this.user = decoded;
    //     },
    // })
  },

  modules: {
  }

})
