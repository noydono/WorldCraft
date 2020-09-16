<template>
  <v-container>
    <v-row>
      <v-col>
        <bannerComp />
        <listForumComp />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import bannerComp from "../components/Forum/bannerComp";
import listForumComp from "../components/Forum/listForumComp";
export default {
  name: "Forum",
  data() {
    return {};
  },
  components: {
    bannerComp,
    listForumComp,
  },
};
</script>
