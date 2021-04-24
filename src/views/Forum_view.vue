<template>
  <v-container>
    <v-row>
      <v-col>
        <ListCategorieComponent />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ListCategorieComponent from "../components/pages/forum/listCategorieComponent";
export default {
  name: "Forum",
  data() {
    return {};
  },
  components: {
    ListCategorieComponent,
  },
};
</script>
