<template>
  <v-row>
    <v-col>
      <h1>create categorie</h1>
      <form @submit="submitIdea">

        <v-text-field 
        v-model="newCat.name" 
        label="Titre de la categorie" 
        ></v-text-field>

        <v-textarea 
        v-model="newCat.description" 
        outlined 
        label="description"
        ></v-textarea>

        <v-select 
        v-model="newCat.categorie" 
        :items="categories" 
        label="Standard"
        ></v-select>

        <v-text-field 
        v-model="newCat.tag" 
        label="#tag" 
        ></v-text-field>

        <v-btn @click="_setForm" type="submit">crée categorie</v-btn>
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
    ...mapActions(["createCategorie"]),

    _setForm() {
      this.SET_DATA(this.newCat);
    },

    submitIdea(event) {
      event.preventDefault();
      this.createCategorie();
    },
    
  },computed: {

    ...mapState(["categories"]),

  },
};

</script>

<style scoped>
</style>
