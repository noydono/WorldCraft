<template>
  <v-row>
    <v-col>
      
      <h1>create Section</h1>

      <form @submit="submitSection">

         <v-select
          :items="categories"
          item-text="name"
          item-value="_id"
          label="Categorie"
          v-model="newSection.categorie_id"
        ></v-select>

        <v-text-field
          v-model="newSection.name"
          label="Titre de la section"
        ></v-text-field>

        <v-text-field
          v-model="newSection.description"
          label="description de la section"
        ></v-text-field>

        <v-btn @click="_setForm" type="submit">crée Section</v-btn>

      </form>

    </v-col>
  </v-row>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";

export default {
  data: () => ({
    newSection: {},
  }),
  created() {
    this.getCategorie();
  },
  methods: {
    ...mapMutations(["SET_DATA"]),
    ...mapActions(["setSection", "getCategorie"]),

    _setForm() {
      //send data to mutation in state DATA
      this.SET_DATA(this.newSection);
    },

    submitSection(event) {
      event.preventDefault();
      this.setSection();
    },
  },
  computed: {
    ...mapState({
      categories: state => state.categorie.categories, 
      }),
  },
};
</script>
