<template>
  <v-container fluid>
    <v-row class="home--row">
      <bannerComp />
      <cardHomeComp />
      <topSujetComp class="sujet" />
    </v-row>
  </v-container>
</template>

<script>
import cardHomeComp from "../components/Home/card";
import topSujetComp from "../components/Home/topSujet";
import bannerComp from "../components/Home/banner";

export default {
  name: "Home",
  components: {
    cardHomeComp,
    topSujetComp,
    bannerComp
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
  .home--row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
}
</style>
