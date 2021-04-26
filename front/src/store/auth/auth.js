import axios from "axios";
// import router from "../../router";
import swal from 'sweetalert';

const ApiUrl = "http://localhost:8080/auth"

export default {

  state: {
    isLogin: false,
    isAdmin: false
  },

  mutations: {

    SET_LOGIN(state, value) {
      state.isLogin = value
    },
    SET_ADMIN(state, value) {
      state.isAdmin = value
    }

  },

  actions: {

    async signup(context) {

      
      try {

        let response = await axios.post( ApiUrl + "/signup", context.rootState.data );
        let token = response.data;

        if (token) {

          localStorage.setItem("worldcraft", token);
          swal("Success", "Un Mail De verification vous a été envoyer", "success");
        
        } else {
          
          swal("Error", "Quelque chose s'est mal passé : " + response.data.err, "error");
        
        }

      } catch (err) {

          swal("Error",err, "error");
    
      }

    },

    async signin(context) {
      
      try {

        let response = await axios.post( ApiUrl + "/login", context.rootState.data);
        context.commit("SET_LOGIN", true)
        
        let token = response.data;

        localStorage.setItem("worldcraft", token);
        if (token) {
          swal("Success", "Connexion reussi", "success");
        }

      } catch (err) {
        swal("Error", "Quelque chose s'est mal passé : " + err, "error");
      }

    },
    
    async logout(context) {

      try{

        localStorage.removeItem("worldcraft");
        context.commit("SET_LOGIN", false)
        swal("Success", "déconnexion réussi", "success");

      }catch(exception){

        swal("Error", "Quelque chose s'est mal passé : ", "error");

      }
      

    },
  }
}
