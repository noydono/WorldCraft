<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="3">
       <loginCompenent></loginCompenent>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import loginCompenent from "../components/Home/login";

export default {
  name: "LoginPage",
  components:{
      loginCompenent
  }
};
</script>