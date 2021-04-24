<template>
  <v-container class="">
    <h2 class="display-3 mb-3"></h2>

    <v-card class="mb-9" style="border: 1px solid grey">
      <v-card-title
        class="blue-grey lighten-3"
        style="height: 55px; padding: 0 0 0 30px !important"
      >
        {{ sujet.title }}

        <span class="subtitle-2 ml-auto mr-3">{{
          date(sujet.created_at)
        }}</span>
      </v-card-title>
      <v-card-text style="padding: 0 12px 0 12px !important">
        <v-row>
          <v-col
            style="
              height: 100%;
              border-top: 1px solid grey;
              border-right: 1px solid grey;
            "
            md="2"
            class="d-flex flex-column align-center justify-center"
          >
            <span>{{ sujet.author }}</span>
            <v-avatar class="mt-2" color="orange" size="62">
              <span class="white--text headline">62</span>
            </v-avatar>
            <span class="mt-2">Builder</span>
            <span class="mt-2"> <strong>date : </strong> 6/12/21212 </span>
            <span> <strong>post</strong> : 1212</span>
          </v-col>
          <v-col
            style="height: 100%; border-top: 1px solid grey"
            md="10"
            class=""
          >
            <h2></h2>
            <p class="mt-5 text-justify">
              {{ sujet.content }}
            </p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <h3>Reponse :</h3>

    <v-row class="underline"> </v-row>

    <v-card
      v-for="(reponse, key) in cloneItems"
      :key="key"
      class="reponse-card mt-7"
    >
      <v-card-title class="blue-grey lighten-3 subtitle-2 reponse-card-title">
        <span class="subtitle-2 ml-auto mr-3">{{
          date(reponse.created_at)
        }}</span>
      </v-card-title>
      <v-card-text style="padding: 0 12px 0 12px !important">
        <v-row>
          <v-col
            md="2"
            class="d-flex flex-column align-center justify-center reponse-card-col-author"
          >
            <span>{{ reponse.author }}</span>
            <v-avatar class="mt-2" color="orange" size="62">
              <span class="white--text headline">62</span>
            </v-avatar>
            <span class="mt-2">Builder</span>
            <span class="mt-2"> <strong>date : </strong> 6/12/21212 </span>
            <span> <strong>post</strong> : 1212</span>
          </v-col>
          <v-col md="10" class="reponse-card-col-content">
            <p class="mt-5 ml-5 text-justify">
              {{ reponse.content }}
            </p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-pagination
      v-if="reponses.length >= pagination.rowsPerPage"
      v-model="pagination.page"
      :length="pages"
      circle
      color="light-green darken-1"
      class="mt-4"
    ></v-pagination>

    <form @submit="submitReponse">
      <v-card
        v-if="isLogin === true"
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
          <v-btn @click="_setForm()" type="submit" class="float-right mb-5 mr-5"
            >envoyer</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card
        class="mt-5 d-flex flex-column align-center justify-center"
        v-if="isLogin === false"
      >
        <v-card-text> connect toi pour commenter </v-card-text>
      </v-card>
    </form>
  </v-container>
</template>
          
<script>
import { mapActions, mapState, mapMutations } from "vuex";
import VueJwtDecode from "vue-jwt-decode";
import moment from "moment";

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
    this.getSujetById(this.$route.params.id);
    this.getReponses(this.$route.params.id);
  },
  methods: {
    ...mapMutations(["SET_DATA"]),
    ...mapActions(["getSujetById", "setReponse", "getReponses"]),

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
      this.newReponse = {};
      this.getReponses(this.$route.params.id);
      this.SET_DATA();
    },

    date(date) {
      let d = new Date(date);
      let m = moment(d);
      moment.updateLocale("en", {
        relativeTime: {
          future: "dans %s",
          past: " il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minute",
          h: "une heure",
          hh: "%d heure",
          d: "un jour",
          dd: "%d jour",
          w: "une semaine",
          ww: "%d semaine",
          M: "un mois",
          MM: "%d mois",
          y: "une année",
          yy: "%d année",
        },
      });
      return m.fromNow();
    },
  },
  computed: {
    ...mapState({
      sujet: (state) => state.sujet.sujet,
      isLogin: (state) => state.auth.isLogin,
      reponses: (state) => state.reponse.reponses,
    }),

    pages() {
      return Math.ceil(this.reponses.length / this.pagination.rowsPerPage);
    },

    cloneItems() {
      var clone = JSON.parse(JSON.stringify(this.reponses));
      var startFrom =
        this.pagination.page * this.pagination.rowsPerPage -
        this.pagination.rowsPerPage;
      return clone.splice(startFrom, this.pagination.rowsPerPage);
    },
  },
};
</script>

<style lang="sass" scoped>
.author
  text-decoration: none
  &:hover
    text-decoration: underline

.reponse-author
  border-right: 1px solid #919191

.reponse-citation
  overflow-wrap: anywhere

.underline
  padding: 1px
  background-color: grey

.reponse-card-col-content
  height: 100%
  border-top: 1px solid grey

.reponse-card-col-author
  height: 100%
  border-top: 1px solid grey
  border-right: 1px solid grey

.reponse-card-title
  height: 55px
  padding: 0 0 0 30px !important

.reponse-card
  border: 1px solid grey
</style>