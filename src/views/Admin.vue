<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>admin</h1>
        <createCategorie/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import createCategorie from '../components/admin/createCategorie'
export default {
  name: "Forum",
  data() {
    return {};
  },
  components: {
    createCategorie,
  },
};
</script>
