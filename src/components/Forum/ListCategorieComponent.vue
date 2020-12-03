<template>
  <v-row class="mt-12">
    <v-list width="100%">
      <v-list-group
        v-for="(categorie, key) in categorieState"
        :key="key"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>

            <h1 
              style="font-size: 20px" 
              v-text="categorie.name"
            ></h1>

          </v-list-item-content>
        </template>

        <v-list-item
          v-for="(section, key) in filterSection(
            categorie._id
          )"
          :key="key"
          :to="{ path: '/listSujet/' + section._id }"
        >
          <v-list-item-icon class="mt-6 grey--text text--darken-2">
            <v-icon
              v-text="section.icon"
              style="font-size: 30px"
            ></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <div class="d-flex flex-row justify-start align-start">
              <div
                class="subtitle-1 mt-1 grey--text text--darken-4"
                v-text="section.name"
              ></div>
              <v-chip x-small class="ma-2 grey"> nouveaux </v-chip>
            </div>
            <v-list-item-title
              class="subtitle-2 grey--text"
              v-text="section.description"
            ></v-list-item-title>
          </v-list-item-content>

          <div class="d-flex flex-row justify-center align-center">
            <v-list-item-avatar class="mr-5">
              <v-img :src="section.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-title>
              <div class="subtitle-1 black--text">titre du sujet</div>
              <div class="subtitle-2 grey--text">26 juin - by pseudo</div>
            </v-list-item-title>
          </div>

        </v-list-item>
      </v-list-group>
    </v-list>
  </v-row>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  created() {
    this.getCategorie();
    this.getSection();
  },
  methods: {
    ...mapActions(["getCategorie", "getSection"]),

    filterSection(bId) {
      var arrayCat = [];
      this.sectionState.forEach((item) => {
        if (bId === item.categorie_id) {
          arrayCat.push(item);
        }
      });

      return arrayCat;
    },
  },
  computed: {
    ...mapState(["categorieState", "sectionState"]),
  },
};
</script>
