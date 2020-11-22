<template>
  <v-row class="mt-12">
    <v-card class="mx-auto" v-if="sujet.length != 0">
      <v-list
        :disabled="false"
        :dense="false"
        :two-line="false"
        :three-line="true"
        :shaped="true"
        :flat="false"
        :subheader="false"
        :sub-group="false"
        :nav="false"
        :avatar="true"
        :rounded="false"
        max-width="900"
        width="800"
        
      >
        <v-subheader>Sujet</v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            :to="subItem.link"
            v-for="subItem in cloneItems"
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
                <v-img
                  aspect-ratio="2"
                  src="https://cdn.vuetifyjs.com/images/lists/5.jpg"
                ></v-img>
              </v-list-item-avatar>
            </div>
          </v-list-item>
          <v-pagination
            v-if="sujet.length >= pagination.rowsPerPage"
            v-model="pagination.page"
            :length="pages"
            circle
            color="light-green darken-1"
            class="pb-5"
          ></v-pagination>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-card class="mx-auto text-center" v-if="sujet.length == 0">
      <h2 class="py-5 px-5">oups !!!</h2>
      <p class="px-5">
        il n'y a pas encore de sujet soit le premier a en crée un.
      </p>
      <v-btn block> Crée un sujet </v-btn>
    </v-card>
  </v-row>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      item: 5,
      pagination: {
        page: 1,
        rowsPerPage: 10,
      },
    };
  },
  created() {
    this.getSujet(this.$route.params.id);
    
  },
  methods: {
    ...mapActions(["getSujet"]),
  },
  computed: {
    ...mapState(["sujet"]),
    
    pages() {
      return Math.ceil(this.sujet.length  / this.pagination.rowsPerPage);
    },
    cloneItems() {
      var clone = JSON.parse(JSON.stringify(this.sujet));
      var startFrom =
        this.pagination.page * this.pagination.rowsPerPage -
        this.pagination.rowsPerPage;
      return clone.splice(startFrom, this.pagination.rowsPerPage);
    },
  },
};
</script>