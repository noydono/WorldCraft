<template>
  <v-container class="mx-auto">
    <v-row>
      <v-col class="d-flex flex-column align-center justify-center">
        <v-card width="1000px" v-for="(sujet, key) in sujetIdState" :key="key">
          <v-card-text>
            <h1
              class="pink--text text--accent-1 mt-2"
              v-text="sujet.title"
            ></h1>
          </v-card-text>

          <v-card-text class="text-justify">
            {{ sujet.content }}
          </v-card-text>
          <div class="mt-2">
            <v-chip
              class="ma-2"
              v-for="(tag, key) in sujet.tag"
              :key="key"
              v-text="tag"
            ></v-chip>
          </div>
          <v-card-actions>
            <div class="ml-2" style="font-size: 15px">
              Posté le
              <span v-html="date()"></span>
              par
              <a href="">{{ sujet.author }}</a>
            </div>

            <v-btn class="ml-auto" text color="pink accent-1">
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
            <v-list-item-group color="primary">
              <v-list-item
                style="height: 150px"
                v-for="(reponse, key) in cloneItems"
                :key="key"
              >
                <v-container>
                  <v-row class="blue lighten-5"> 
                    <v-col
                      class=" d-flex flex-column justify-center align-center blue lighten-4"
                      md="2"
                    >
                    <span class="text-justify">
                        {{ reponse.author }}
                      </span>
                      <v-avatar  size="62">
                        <v-img
                          src="https://cdn.vuetifyjs.com/images/lists/5.jpg"
                        ></v-img>
                      </v-avatar>
                      
                    </v-col>
                    <v-col md="8" class="m-3">{{ reponse.content }}</v-col>
                  </v-row>
                </v-container>
              </v-list-item>
              <v-pagination
                v-if="reponseState.length >= pagination.rowsPerPage"
                v-model="pagination.page"
                :length="pages"
                circle
                color="light-green darken-1"
                class="pb-5"
              ></v-pagination>
            </v-list-item-group>
          </v-card-text>
        </v-card>
        <form @submit="submitReponse">
          <v-card
            v-if="loginState === true"
            width="1000px"
            class="mt-5 d-flex flex-column align-center justify-center"
          >
            <v-card-title>
              <span>Ajoute ta réponse</span>
            </v-card-title>
            <v-card-text style="width: 500px">
              <v-textarea
                v-model="newReponse.content"
                outlined
                label="Commenter"
                value
                class="mt-5"
              ></v-textarea>
            </v-card-text>
            <v-card-actions>
              <v-btn
                @click="_setForm()"
                type="submit"
                class="float-right mb-5 mr-5"
                >envoyer</v-btn
              >
            </v-card-actions>
          </v-card>
          <v-card
            class="mt-5 d-flex flex-column align-center justify-center"
            v-if="loginState === false"
          >
            <v-card-text> connect toi pour commenter </v-card-text>
          </v-card>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import VueJwtDecode from "vue-jwt-decode";

export default {
  data() {
    return {
      newReponse: {},
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
    this.getReponse(this.$route.params.id);
  },
  methods: {
    ...mapMutations(["SET_DATA"]),
    ...mapActions(["getSujetId", "setReponse", "getReponse"]),
    _setForm() {
      let token = localStorage.getItem("jwt");
      if (token) {
        let decoded = VueJwtDecode.decode(token);
        this.newReponse.author = decoded.pseudo;
      }
      this.newReponse.sujet_id = this.$route.params.id;
      this.SET_DATA(this.newReponse);
    },
    submitReponse(event) {
      event.preventDefault();
      this.setReponse();
    },
    date() {
      let SujetDate = this.sujetIdState[0].created_at,
        d = new Date(SujetDate),
        options = {
          weekday: "short",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
      d = d.toLocaleDateString("fr-FR", options);
      return `${d}`;
    },
  },
  computed: {
    ...mapState(["sujetIdState", "loginState", "reponseState"]),

    pages() {
      return Math.ceil(this.reponseState.length / this.pagination.rowsPerPage);
    },
    cloneItems() {
      var clone = JSON.parse(JSON.stringify(this.reponseState));
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