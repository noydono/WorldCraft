
import axios from "axios";
import router from "../../router";
import swal from 'sweetalert';

const ApiUrl = "http://localhost:8080/sujet"
export default{

  state: {

    sujets: [],
    sujet: [],

  },

  mutations: {

    SET_SUJETS(state, sujets) {
      state.sujets = sujets;
    },

    SET_SUJET(state, sujet) {
      state.sujet = sujet;
    },

  },

  actions: {

    async setSujet(context) {

      try {
        console.log(context.rootState.data);
          await axios.post( ApiUrl + "/create", context.rootState.data);
          router.push({ name: "Forum" }).catch(() => { });
          swal("Sucess", "Votre sujet a été poster ", "success");      

      } catch (exception) {

          swal("Error", "Quelque chose s'est mal passé ", "error");

      }
      

    },
    
    async getSujetsById(context, id) {

      try {
        
        const { data: sujets } = await axios.get( ApiUrl +"/getAllById/" + id);
        context.commit("SET_SUJETS", sujets);      

      } catch (exception) {

          swal("Error", "Quelque chose s'est mal passé ", "error");

      }

    },

    async getSujetById(context, id) {

      try{

        const { data: sujet } = await axios.get( ApiUrl +"/getById/" + id);
        context.commit("SET_SUJET", sujet);

      }catch (exception) {

          swal("Error", "Quelque chose s'est mal passé ", "error");

      }

    },
  },

}
