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
import bannerComp from "../components/Forum/banner";
import listForumComp from "../components/Forum/listForum";
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
