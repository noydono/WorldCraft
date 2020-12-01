<template>
  <v-container>
    <v-row>
      <v-col>
        <BannerComponent />
        <ListSujetComponent />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListSujetComponent from "../components/Forum/ListSujetComponent";
import BannerComponent from "../components/Main/BannerComponent";
export default {
  components: {
    BannerComponent,
    ListSujetComponent,
  },
};
</script>
