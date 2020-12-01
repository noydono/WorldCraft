<template>
  <v-container fluid>
    <v-row >
      <BannerComponent />
      <CardComponent />
      <TopSujetComponent class="sujet" />
    </v-row>
  </v-container>
</template>

<script>

import CardComponent from "../components/Home/CardComponent";
import TopSujetComponent from "../components/Home/TopSujetComponent";
import BannerComponent from "../components/Main/BannerComponent";

export default {
  name: "Home",
  components: {
    CardComponent,
    TopSujetComponent,
    BannerComponent
  },
};
</script>
<style scoped>
.link {
  text-decoration: none;
}
@media screen and (min-width: 200px) and (max-width: 1000px) {
  .sujet {
    display: none;
  }
  v-row{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
}
</style>
