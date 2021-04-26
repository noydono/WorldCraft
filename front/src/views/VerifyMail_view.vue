<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title> Votre compte a bien été verifier </v-card-title>
          <v-card-text>
        <span class="display-1"> vous pouvait cliqué sur le boutton si dessou pour retourné a l'acceuil et vous reconnecté .
          J'ai la fleme de fair un design cette page me ser juste a supprimer le jwt au cas ou le verification a ete fait aprés une conncetion car je rajoute un isVerified dans le jwt
           </span>
          </v-card-text>
          <v-card-actions>
            <v-btn block @click="destroy()">Accueil</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "VerifyMail",
  data() {
    return {};
  },
  created() {
    localStorage.removeItem("jwt");
  },
methods:{
destroy(){
  localStorage.removeItem('jwt')
  this.$router.push("Home").catch(() => { });
}
},
  components: {},
};
</script>
