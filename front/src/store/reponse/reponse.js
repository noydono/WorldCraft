
import axios from "axios";
import swal from 'sweetalert';

const ApiUrl = "http://localhost:8080/reponse"
export default{

  state: {
    reponses: [],
  },

  mutations: {

    SET_REPONSES(state, reponses) {
      state.reponses = reponses;
    },

  },

  actions: {


    async setReponse(context) {
      try {

        await axios.post( ApiUrl + "/create/"+ context.rootState.data.sujet_id, context.rootState.data);
        swal("Sucess", "Votre reponse a été poster ", "success");

      } catch (exception) {

        swal("Error", "Quelque chose s'est mal passé ", "error");

      }


    },
    async getReponses(context, id) {
      try {

        const { data: reponses } = await axios.get( ApiUrl + "/getAllById/" + id);
        context.commit("SET_REPONSES", reponses);

      } catch (exception) {
        swal("Error", "Quelque chose s'est mal passé ", "error");
      }


    },

  },

}