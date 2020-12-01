<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>admin</h1>
        <CreateBigCategorieComponent/>
        <CreateSmallCategorieComponent/>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CreateBigCategorieComponent from '../components/admin/CreateBigCategorieComponent'
import CreateSmallCategorieComponent from '../components/admin/CreateSmallCategorieComponent'

export default {
  name: "Forum",
  data() {
    return {};
  },
  components: {
    CreateBigCategorieComponent,
    CreateSmallCategorieComponent,
    
  },
};
</script>
