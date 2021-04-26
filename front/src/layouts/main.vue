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
      <CreateSujetComponent v-if="isLogin == true" />
      <AuthComponent v-if="isLogin == false" />
      <v-btn v-if="isLogin == true" to="/userdetail" class="mt-2" text
        >mon Compte</v-btn
      >
      <v-btn v-if="isLogin == true" @click="logUserOut()" class="mt-2" text
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
import CreateSujetComponent from "../components/global/createSujetComponent";
import AuthComponent from "../components/global/auth/authComponent";
import VueJwtDecode from 'vue-jwt-decode'
import { mapState, mapActions, mapMutations } from "vuex";

export default {

  data: () => ({
  }),

  created(){
    let token = localStorage.getItem("worldcraft");
    if (token) {
      this.SET_LOGIN(true);
      if(VueJwtDecode.decode(token).isAdmin === true){
        this.SET_ADMIN(true)
      }else{
        this.SET_ADMIN(false)
      }
    } else {
      this.SET_LOGIN(false);
    }
  },
    
  updated(){
    let token = localStorage.getItem("worldcraft");
    if (token) {
      this.SET_LOGIN(true);
      if(VueJwtDecode.decode(token).isAdmin === true){
        this.SET_ADMIN(true)
      }else{
        this.SET_ADMIN(false)
      }
    } else {
      this.SET_LOGIN(false);
    }
  },
  methods: {
    ...mapActions(["logout"]),
    ...mapMutations(["SET_LOGIN","SET_ADMIN"]),
    
    logUserOut() {
      this.SET_ADMIN(false)
      this.logout();
    },
  },
  computed: {
    ...mapState({
      isLogin: state => state.auth.isLogin,
      isAdmin: state => state.auth.isAdmin
    }),
  },
  components: {
    CreateSujetComponent,
    AuthComponent,
  },
};
</script>
