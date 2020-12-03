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
import CreateCategorieComponent from '../components/admin/CreateCategorieComponent'
import CreateSectionComponent from '../components/admin/CreateSectionComponent'

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
