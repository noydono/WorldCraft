<template>
  <v-row class="mt-12">
    
    <v-card class="mx-auto" v-if="sujet.length != 0">
      <v-list
        :disabled="disabled"
        :dense="dense"
        :two-line="twoLine"
        :three-line="threeLine"
        :shaped="shaped"
        :flat="flat"
        :subheader="subheader"
        :sub-group="subGroup"
        :nav="nav"
        :avatar="avatar"
        :rounded="rounded"
      >
        <v-subheader>Sujet</v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            :to="subItem.link"
            v-for="subItem in sujet"
            :key="subItem._id"
            @click="$router.push('/Article/12313661')"
          >
            <v-list-item-avatar class="mr-5">
              <v-img src="https://cdn.vuetifyjs.com/images/lists/5.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <div class="d-flex flex-row justify-start align-start">
                <div
                  class="subtitle-1 mt-1 grey--text text--darken-4"
                  v-text="subItem.title"
                ></div>
                <v-chip x-small class="ma-2 grey"> nouveaux </v-chip>
              </div>

              <v-list-item-title
                class="subtitle-2 grey--text"
                v-html="subItem.content"
              ></v-list-item-title>
            </v-list-item-content>

            <div class="d-flex flex-row justify-center align-center">
              <v-list-item-title>
                <div class="subtitle-1 black--text">pseudo</div>
                <div class="subtitle-2 grey--text">26 juin</div>
              </v-list-item-title>
              <v-list-item-avatar class="mr-5">
                <v-img aspect-ratio="2" src="https://cdn.vuetifyjs.com/images/lists/5.jpg"></v-img>
              </v-list-item-avatar>
            </div>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-card class="mx-auto" v-if="sujet.length == 0">
        <h2>Il n'y a pas de sujet dans cette categorie</h2>
    </v-card>
  </v-row>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
      item: 5,
      disabled: false,
      dense: false,
      twoLine: false,
      threeLine: true,
      shaped: true,
      flat: false,
      subheader: false,
      inactive: false,
      subGroup: false,
      nav: false,
      avatar: true,
      rounded: false,
    }),
  created() {
    this.getSujet(this.$route.params.id);
    

  },
  methods: {
    ...mapActions(["getSujet"])
  },
  computed: {
      
    ...mapState(["sujet"]),
  },
};
</script>