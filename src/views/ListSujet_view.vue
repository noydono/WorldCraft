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
import ListSujetComponent from "../components/pages/forum/listSujetComponent";
import BannerComponent from "../components/global/bannerComponent";
export default {
  components: {
    BannerComponent,
    ListSujetComponent,
  },
};
</script>
