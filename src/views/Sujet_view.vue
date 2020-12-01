<template>
  <v-container class="mx-auto">
    <v-row>
      <v-col class="d-flex flex-column align-center justify-center">
        <v-card width="1000px" v-for="(sujet, key) in sujetId" :key="key">
          <v-card-text>
            <h1 class="pink--text text--accent-1 mt-2 ml-2" v-text="sujet.title"></h1>
            <div class="mt-2">
              <v-chip
                class="ma-2"
                v-for="(tag, key) in sujet.tag"
                :key="key"
                v-text="tag"
              ></v-chip>
            </div>
            <p class="mt-1">
              <i class="far fa-user ml-2"></i>
              <a class="author grey--text text--darken-1 ml-2" href>Alex</a>,
              <a class="author grey--text text--darken-1" href>coco</a>,
              <a class="author grey--text text--darken-1" href>Alex</a>
              <i class="far fa-clock ml-4 ml-2"></i> 20/07/1994
            </p>
            <v-divider></v-divider>
          </v-card-text>

          <v-card-text class="text-justify">
          
              {{ sujet.content }}
            
          </v-card-text>

          <v-card-actions class="d-flex flex-row-reverse">
            <v-btn text color="pink accent-1">
              <i class="far fa-heart"></i>
              <span>123124</span>
            </v-btn>
            <v-btn text color="pink accent-1">
              <i class="far fa-bell"></i>
              <span>123124</span>
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="mt-5" width="1000px">
          <v-card-title>
            <span>Reponse</span>
          </v-card-title>
          <v-card-text>
            <v-list-item-group  color="primary">
              <v-list-item>
                <v-list-item-avatar class="mr-5 mt-6">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/lists/5.jpg"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <div class="d-flex flex-row justify-start align-start">
                    <div class="subtitle-1 mt-1 grey--text text--darken-4">
                      coucou c'est un test
                    </div>
                  </div>

                  <v-list-item-title class="subtitle-2 grey--text"
                    >coucou c'est un test</v-list-item-title
                  >
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
          v-if="reponse.length >= pagination.rowsPerPage"
          v-model="pagination.page"
          :length="pages"
          circle
          color="light-green darken-1"
          class="pb-5"
        ></v-pagination>
            </v-list-item-group>
          </v-card-text>
        </v-card>
        <form>
          <v-card width="1000px" class="mt-5 d-flex flex-column align-center justify-center">
            <v-card-title>
              <span>Ajoute ta reponse</span>
            </v-card-title>
            <v-card-text style="width:500px">
              <v-textarea
                outlined
                name
                label="Commenter"
                value
                class="mt-5"
              ></v-textarea>
            </v-card-text>
            <v-card-actions>
            <v-btn class="float-right mb-5 mr-5">envoyer</v-btn>
            </v-card-actions>
          </v-card>
        </form>
      </v-col>
    </v-row>
  </v-container>
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
      news: false,
    };
  },
  created() {
    this.getSujetId(this.$route.params.id);
  },
  mounted() {},
  methods: {
    ...mapActions(["getSujetId"]),
  },
  computed: {
    ...mapState(["sujetId","reponse"]),
    pages() {
      return Math.ceil(this.reponse.length  / this.pagination.rowsPerPage);
    },
    cloneItems() {
      var clone = JSON.parse(JSON.stringify(this.reponse));
      var startFrom =
        this.pagination.page * this.pagination.rowsPerPage -
        this.pagination.rowsPerPage;
      return clone.splice(startFrom, this.pagination.rowsPerPage);
    },
  },
};
</script>

<style lang="sass">
.author
  text-decoration: none
  &:hover
    text-decoration: underline

.reponse-author
  border-right: 1px solid #919191

.reponse-citation
  overflow-wrap: anywhere
</style>