<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>admin</h1>
        <createBigCategorie/>
        <createSmallCategorie/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import createBigCategorie from '../components/admin/createBigCategorie'
import createSmallCategorie from '../components/admin/createSmallCategorie'
export default {
  name: "Forum",
  data() {
    return {};
  },
  components: {
    createBigCategorie,
    createSmallCategorie,
  },
};
</script>
