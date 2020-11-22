<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>admin</h1>
        <createBigCategorie/>
        <createSmallCategorie/>
        <createSujet/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import createBigCategorie from '../components/admin/createBigCategorie'
import createSmallCategorie from '../components/admin/createSmallCategorie'
import createSujet from '../components/admin/createSujet'
export default {
  name: "Forum",
  data() {
    return {};
  },
  components: {
    createBigCategorie,
    createSmallCategorie,
    createSujet,
  },
};
</script>
