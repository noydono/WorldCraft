import axios from "axios";
import router from "../../router";
import swal from 'sweetalert';

const API = "http://localhost:8080/categorie"
export default {

  state: {

    categories: []

  },

  mutations: {

       
    SET_CATEGORIE(state, categories) {
      state.categories = categories;
    }

  },

  actions: {

    async setCategorie(context) {
      try{

        await axios.post( API + "/create", context.rootState.data)
        router.push({ name: "Forum" })
        swal("Sucess", "Votre categorie a été ajouter ", "success");

      }catch(exception){

        swal("Error", "Quelque chose s'est mal passé : " + exception, "error");

      }



    },

    async getCategorie(context) {

      try{

        const { data: categories } = await axios.get( API + "/get");
        context.commit("SET_CATEGORIE", categories );

      }catch(exception){

        swal("Error", "Quelque chose s'est mal passé : " + exception, "error");
        
      }


    }

  }
}
