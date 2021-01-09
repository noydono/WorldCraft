<template>
  <v-app id="inspire">
    <v-app-bar
      app
      src="https://cdn.discordapp.com/attachments/648554266700808202/691422544095346708/2020-03-22_23.51.10.png"
      dark
      shrink-on-scroll
    >
      <template #img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-toolbar-title >WorldCraft</v-toolbar-title>
      <v-btn to="/" class="ml-auto mt-2" text>Accueil</v-btn>
      <v-btn to="/forum" class="mt-2" text>Forum</v-btn>
      <v-btn v-if="isAdmin == true" to="/admin" class="mt-2" text>admin</v-btn>
      <CreateSujetComponent v-if="loginState == true" />
      <AuthComponent v-if="loginState == false" />
      <v-btn v-if="loginState == true" to="/userdetail" class="mt-2" text
        >mon Compte</v-btn
      >
      <v-btn v-if="loginState == true" @click="logUserOut()" class="mt-2" text
        >déconnection</v-btn
      >
    </v-app-bar>
    <v-content class="grey lighten-5">
      <router-view />
    </v-content>

    <v-footer color="grey darken-1" padless>
      <v-row justify="center" no-gutters> </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import CreateSujetComponent from "../components/Main/CreateSujetComponent";
import AuthComponent from "../components/Main/AuthComponent";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data: () => ({
  }),
  created() {
    let token = localStorage.getItem("jwt");
    if (token) {
      this.SET_LOGIN(true);
    } else {
      this.SET_LOGIN(false);
    }
  },
  methods: {
    ...mapActions(["UserOut"]),
    ...mapMutations(["SET_LOGIN"]),
    logUserOut() {
      this.UserOut();
    },
  },
  computed: {
    ...mapState(["isAdmin","loginState"]),
  },
  components: {
    CreateSujetComponent,
    AuthComponent,
  },
};
</script>
