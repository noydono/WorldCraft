<template>
  <v-row class="mt-12">
    <v-list width="100%">
      <v-list-group
        v-for="(categorie, key) in bigCategorie" :key="key"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <h1 style="font-size:20Px" v-text="categorie.name"></h1>
          </v-list-item-content>
        </template>

        <!-- <v-list-item :to="subItem.link"  v-for="subItem in item.items" :key="subItem.title">
          
          <v-list-item-icon class="mt-6 grey--text text--darken-2">
            <v-icon v-text="subItem.icon" style="font-size:30px"></v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <div  class="d-flex flex-row justify-start align-start">
              <div class="subtitle-1 mt-1 grey--text text--darken-4"  v-text="subItem.title"></div>
              <v-chip  x-small class="ma-2 grey "> nouveaux </v-chip>
            </div>
            
            <v-list-item-title  class="subtitle-2 grey--text" v-text="subItem.presentation"></v-list-item-title>
          </v-list-item-content>

          <div class="d-flex flex-row justify-center align-center">
            <v-list-item-avatar class="mr-5">
              <v-img :src="subItem.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-title>
              <div class="subtitle-1 black--text">titre du sujet</div>
              <div class="subtitle-2 grey--text">26 juin - by pseudo</div>
            </v-list-item-title>
          </div>
          
        </v-list-item> -->

      </v-list-group>
    </v-list>
  </v-row>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
    };
  },
   created() {
    this.getBigCategorie();
  },
  methods: {
    ...mapActions(["getBigCategorie"]),
  },
  computed: {
    ...mapState(["bigCategorie"]),
  },
};
</script>
