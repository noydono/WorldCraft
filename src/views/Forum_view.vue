<template>
  <v-container>
    <v-row>
      <v-col>
        <BannerComponent />
        <ListCategorieComponent />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import BannerComponent from "../components/Main/BannerComponent";
import ListCategorieComponent from "../components/Forum/ListCategorieComponent";
export default {
  name: "Forum",
  data() {
    return {};
  },
  components: {
    BannerComponent,
    ListCategorieComponent,
  },
};
</script>
