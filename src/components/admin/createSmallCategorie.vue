<template>
  <v-row>
    <v-col>
      <h1>create Small categorie</h1>
      <form @submit="submitSmallCategorie">
        <v-text-field
          v-model="newSmallCategorie.name"
          label="Titre de la smallCategorie"
        ></v-text-field>
        <v-text-field
          v-model="newSmallCategorie.description"
          label="description de la smallCategorie"
        ></v-text-field>
        <v-select
          :items="bigCategorie"
          item-text="name"
          item-value="_id"
          label="Big Categorie"
          v-model="newSmallCategorie.categorieBig_id"
        ></v-select>
        <v-btn @click="_setForm" type="submit">crée Small categorie</v-btn>
      </form>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";

export default {
  data: () => ({
    newSmallCategorie: {},
  }),
  created() {
    this.getBigCategorie();
  },
  methods: {
    ...mapMutations(["SET_DATA"]),
    ...mapActions(["setSmallCategorie", "getBigCategorie"]),

    _setForm() {
      //send data to mutation in state DATA
      this.SET_DATA(this.newSmallCategorie);
    },

    submitSmallCategorie(event) {
      event.preventDefault();
      this.setSmallCategorie();
    },
  },
  computed: {
    ...mapState(["bigCategorie"]),
  },
};
</script>
