<template>
  <v-container>
    <v-row>
      <v-col>
        <bannerComp />
        <listSujetComp />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import listSujetComp from "../components/Forum/listSujet";
import bannerComp from "../components/Forum/banner";
export default {

  components: {
    bannerComp,
    listSujetComp,
   
  },
};
</script>
