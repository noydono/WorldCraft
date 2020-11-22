<template>
  <v-row>
    <v-col>
      <h1>create Sujet categorie</h1>
      <form @submit="submitSujet">
        <v-text-field
          v-model="newSmallCategorie.title"
          label="Titre de la sujet"
        ></v-text-field>
        <v-text-field
          v-model="newSmallCategorie.content"
          label="description de la sujet"
        ></v-text-field>
        <v-btn @click="_setForm" type="submit">crée Small categorie</v-btn>
      </form>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  data: () => ({
    newSmallCategorie: {},
  }),
  created() {
  },
  methods: {
    ...mapMutations(["SET_DATA"]),
    ...mapActions(["setSujet"]),

    _setForm() {
      this.SET_DATA(this.newSmallCategorie);
    },

    submitSujet(event) {
      event.preventDefault();
      this.setSujet();
    },
  },
  computed: {
    
  },
};
</script>
