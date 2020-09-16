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

import listSujetComp from "../components/Forum/listSujetComp";
import bannerComp from "../components/Forum/bannerComp";
export default {

  components: {
    bannerComp,
    listSujetComp,
   
  },
};
</script>
