<template>
  <v-app id="inspire">
    <v-app-bar
      app
      src="https://cdn.discordapp.com/attachments/648554266700808202/691422544095346708/2020-03-22_23.51.10.png"
      dark
      shrink-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-toolbar-title>WorldCraft</v-toolbar-title>
      <v-btn  to="/" class="ml-auto mt-2" text>Accueil</v-btn>
      <v-btn  to="/forum" class="mt-2" text>Forum</v-btn>
      <v-btn v-if=" isAdmin == true "  to="/admin" class="mt-2" text>admin</v-btn>
      <v-btn v-if=" login == true "  to="/userdetail" class="mt-2" text>mon Compte</v-btn>
      <v-btn v-if=" login == true "  @click="logUserOut()" class="mt-2" text>déconnection</v-btn>
      <CreateSujetComponent v-if=" login == true " />
      <AuthComponent v-if=" login == false " />
    </v-app-bar>
    <v-content class="grey lighten-5">
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>

      <router-view />
    </v-content>

    <v-footer color="grey darken-1" padless>
      <v-row justify="center" no-gutters>
        
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import CreateSujetComponent from "../components/Main/CreateSujetComponent";
import AuthComponent from "../components/Main/AuthComponent";
import {mapState , mapActions} from "vuex";


export default {
  props: {
    source: String,
  },
  data: () => ({
   
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        text: "Link 1",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
      {
        text: "Link 2",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
  }),
  methods: {
    ...mapActions(["UserOut"]),
    logUserOut() {
      this.UserOut()
    }
  },
  computed:{
    ...mapState(["login","isAdmin"]),
  },
  components: {
    CreateSujetComponent,
    AuthComponent
  },
};
</script>
