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
    categorieState: [],
    sectionState: [],
    sujetState: [],
    sujetIdState: [],
    reponseState: [],
    loginState: false
  },

  mutations: {


    /*
    *
    *  global mutations
    * 
    * * */
    SET_DATA(state, value) {
      state.data = value;
    },


    /*
    *
    *  Gestion de Categorie
    * 
    * * */
    SET_CATEGORIE(state, categorie) {
      state.categorieState = categorie;
    },


    /*
    *
    *  Gestion de section
    * 
    * * */
    SET_SECTION(state, section) {
      state.sectionState = section;
    },


    /*
    *
    *  Gestion de sujet
    * 
    * * */
    SET_SUJET(state, sujet) {
      state.sujetState = sujet;
    },

    SET_SUJETID(state, sujetId) {
      state.sujetIdState = sujetId;
    },

    /*
    *
    *  Gestion de reponse
    * 
    * * */
    SET_REPONSE(state, reponse) {
      state.reponseState = reponse;
    },


    /*
    *
    *  Gestion d'user
    * 
    * * */
    SET_LOGIN(state, value) {
      state.loginState = value
    }

  },

  actions: {

    /*
    *
    *  Gestion de Categorie
    * 
    * * */
    async setCategorie(context) {

      await axios.post("http://localhost:4000/setCategorie", context.state.data)
      router.push({ name: "Forum" })


    },
    async getCategorie(context) {

      const { data: categorieState } = await axios.get("http://localhost:4000/getCategorie");
      context.commit("SET_CATEGORIE", categorieState );

    },
   

    /*
    *
    *  Gestion de Section
    * 
    * * */
    async setSection(context) {

      await axios.post("http://localhost:4000/setSection", context.state.data);
      router.push({ name: "Forum" })

    },
    async getSection(context) {

      const { data: sectionState } = await axios.get("http://localhost:4000/getSection");
      context.commit("SET_SECTION", sectionState);

    },

    
    /*
    *
    *  Gestion de Sujet
    * 
    * * */
    async setSujet(context) {

      await axios.post("http://localhost:4000/setSujet", context.state.data);
      router.push({ name: "Forum" }).catch(() => { });

    },
    async getSujet(context, id) {

      const { data: sujetState } = await axios.get("http://localhost:4000/getSujet/" + id);
      context.commit("SET_SUJET", sujetState);

    },
    async getSujetId(context, id) {

      const { data: sujetIdState } = await axios.get("http://localhost:4000/getSujetId/" + id);
      context.commit("SET_SUJETID", sujetIdState);

    },

    /*
    *
    *  Gestion de Reponse
    * 
    * * */
   async setReponse(context) {
    try{

      await axios.post("http://localhost:4000/setReponse", context.state.data);
      router.push({ name: "Forum" }).catch(() => { });
      swal("Sucess", "Votre reponse a été poster ", "success");
    
    }catch(err){
      swal("Error", "Quelque chose s'est mal passé : " + err, "error");
    }
    

  },
  async getReponse(context, id) {
    try{

      const { data: reponseState } = await axios.get("http://localhost:4000/getReponse/" + id);
      context.commit("SET_REPONSE", reponseState);
    
    }catch(err){
      console.log("err getReponse : " + err )
    }
    

  },

    
    /*
    *
    *  Gestion d'User
    * 
    * * */
    async setLogin(context) {
      
      try {
        let response = await axios.post("http://localhost:4000/login", context.state.data);
        context.commit("SET_LOGIN", true)
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          swal("Success", "Connexion reussi", "success");
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
          swal("Success", "Enregistrement réussi", "success");
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
      router.push("Home").catch(() => { });
      swal("Success", "déconnexion réussi", "success");

    }

    //       async getUserDetail(context{
    //       getUserDetails() {
    //      import VueJwtDecode from "vue-jwt-decode";
    //       let token = localStorage.getItem("jwt");
    //       let decoded = VueJwtDecode.decode(token);
    //       this.user = decoded;
    //     },
    // })
  },

  modules: {
  }

})
