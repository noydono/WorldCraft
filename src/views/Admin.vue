<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>admin</h1>
        <createBigCategorie/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import createBigCategorie from '../components/admin/createBigCategorie'
export default {
  name: "Forum",
  data() {
    return {};
  },
  components: {
    createBigCategorie,
  },
};
</script>
