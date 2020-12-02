<template>
  <v-row>
    <v-col>

      <h1>create Big categorie</h1>

      <form @submit="submitIdea">

        <v-text-field 
          v-model="newCat.name" 
          label="Titre de la BigCategorie" 
        >
        </v-text-field>

        <v-btn 
          @click="_setForm" 
          type="submit"
        >
        crée Big categorie
        </v-btn>

      </form>
      
    </v-col>
  </v-row>
</template>

<script>

import { mapMutations, mapActions, mapState } from "vuex";

export default {
   data: () => ({
      newCat:{},
    }),
  methods: {

    ...mapMutations(["SET_DATA"]),
    ...mapActions(["setBigCategorie"]),

    _setForm() {
      //send data to mutation in state DATA
      this.SET_DATA(this.newCat);
    },

    submitIdea(event) {
      event.preventDefault();
      this.setBigCategorie();
    },
    
  },computed: {

    ...mapState(["bigCategorie"]),

  },
};

</script>

<style scoped>
</style>
