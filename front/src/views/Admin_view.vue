<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>admin</h1>
        <CreateCategorieComponent/>
        <CreateSectionComponent/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CreateCategorieComponent from '../components/pages/admin/createCategorieComponent'
import CreateSectionComponent from '../components/pages/admin/createSectionComponent'

export default {
  name: "Admin",
  data() {
    return {};
  },
  components: {
    CreateCategorieComponent,
    CreateSectionComponent,
    
  },
};
</script>
