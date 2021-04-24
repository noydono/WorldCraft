<template>
  <v-row class="d-flex flex-row justify-center align-center">
    <v-col md="5">
      <v-card>
        <v-card-title class="grey lighten-1 "> Mon Compte </v-card-title>

        <v-card-text class=" mt-3 d-flex flex-column justify-center align-center">
         
          <span> <strong>Pseudo : </strong>  {{user.pseudo}}</span>
          <v-avatar class="mt-2" color="orange" size="62">
            <span class="white--text headline">62</span>
          </v-avatar>
          <span class="mt-2"> <strong>Rôle : </strong> {{user.role}}</span>
          <span class="mt-2" v-html="userDate()"> </span>

        </v-card-text>

        <v-card-actions class="grey lighten-1">
          <v-btn class="ml-auto"> modifier </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import VueJwtDecode from "vue-jwt-decode";

export default {
  data: () => ({
    user: {},
    NewUser: {},
  }),
  created() {
    this.getUserDetail();
  },
  methods: {
    ...mapMutations(["SET_DATA"]),
    ...mapActions(["UpdateUserDetails"]),

    _setForm() {
      this.SET_DATA(this.NewUser);
    },

    getUserDetail() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    userDate(){
      let UserDate = this.user.created_at,
        d = new Date(UserDate),
        options = {
          weekday: "short",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
      d = d.toLocaleDateString("fr-FR", options);
      return `<strong class="mr-1"> date : </strong> ${d}`
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.fas {
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: rotate(90deg);
  }
}
</style>