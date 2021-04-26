
import axios from "axios";
import router from "../../router";
import swal from 'sweetalert';

const ApiUrl = "http://localhost:8080/section"

export default{

    state: {
        sections: [],
    },

    mutations: {

        
        SET_SECTION(state, section) {
            state.sections = section;
        }

    },

    actions: {

        async setSection(context) {

            try {
                
                await axios.post(ApiUrl + "/create", context.rootState.data);
                router.push({ name: "Forum" })
                swal("Sucess", "Votre section a été ajouter ", "success");

            } catch (exception) {

                swal("Error", "Quelque chose s'est mal passé ", "error");

            }

        },
        async getSections(context) {

            try {

                const { data: sections } = await axios.get(ApiUrl + "/get");
                context.commit("SET_SECTION", sections)

            } catch (exception) {

                swal("Error", "Quelque chose s'est mal passé " , "error");

            }

        }

    },

}