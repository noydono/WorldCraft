<template>
  <v-row>
    <v-col>

      <h1>create categorie</h1>

      <form @submit="submitCategorie">

        <v-text-field 
          v-model="newCategorie.name" 
          label="Titre de la Categorie" 
        >
        </v-text-field>

        <v-btn 
          @click="_setForm" 
          type="submit"
        >
        crée une categorie
        </v-btn>

      </form>
      
    </v-col>
  </v-row>
</template>

<script>

import { mapMutations, mapActions, mapState } from "vuex";

export default {
   data: () => ({
      newCategorie:{},
    }),
  methods: {

    ...mapMutations(["SET_DATA"]),
    ...mapActions(["setCategorie"]),

    _setForm() {
      //send data to mutation in state DATA
      this.SET_DATA(this.newCategorie);
    },

    submitCategorie(event) {
      event.preventDefault();
      this.setCategorie();
    },
    
  },computed: {

    ...mapState(["categorieState"]),

  },
};

</script>

