<template>
  <v-col 
    cols="8" 
    md="8" 
    sm="12" 
    class="mt-5"
  >
    <div class="ml-8 ">
      <div class="title grey--text text--darken-3">Derniere publication :</div>
    </div>
     
    <v-row class="d-flex flex-row justify-center">
     
      <v-card
        href="http://google.com"
        v-for="(item, key) in cloneItems"
        :key="key"
        class="mr-5 ml-5 mb-10 mt-5"
      >
        <v-hover v-slot:default="{ hover }">
          <v-img
            src="https://picsum.photos/500/400"
            width="500"
            height="400"
            class="d-flex flex-row align-end"
          >
            <div class="card-hover">
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-subtitle> By {{ item.author }}</v-card-subtitle>
              <v-expand-transition>
              <div  v-if="hover">
                <v-card-text class="card-hover-text" >{{ item.description }}</v-card-text>
              </div>
            </v-expand-transition>
            </div>
            
          </v-img>
        </v-hover>
      </v-card>
      <v-pagination
        v-if="pagination.total >= pagination.rowsPerPage"
        v-model="pagination.page"
        :length="pages"
        circle
        color="light-green darken-1"
        @input="onPageChange"
       ></v-pagination>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "test1",
          description: "testazeazeazeazeazeaze",
          author: "test",
        },
        {
          title: "test2",
          description: "testazeazeazeazeazeaze",
          author: "test",
        },
        {
          title: "test3",
          description: "testazeazeazeazeazeaze",
          author: "test",
        },
        {
          title: "test4",
          description: "testazeazeazeazeazeaze",
          author: "test",
        },
        {
          title: "test5",
          description: "testazeazeazeazeazeaze",
          author: "test",
        },
        {
          title: "test6",
          description: "testazeazeazeazeazeaze",
          author: "test",
        },
        {
          title: "test7",
          description: "testazeazeazeazeazeaze",
          author: "test",
        },
        {
          title: "test8",
          description: "testazeazeazeazeazeaze",
          author: "test",
        },
        {
          title: "test9",
          description: "testazeazeazeazeazeaze",
          author: "test",
        },
        {
          title: "test10",
          description: "testazeazeazeazeazeaze",
          author: "test",
        },
        {
          title: "test11",
          description: "testazeazeazeazeazeaze",
          author: "test",
        },
        {
          title: "test12",
          description: "testazeazeazeazeazeaze",
          author: "test",
        },
        {
          title: "test13",
          description: "testazeazeazeazeazeaze",
          author: "test",
        },
        {
          title: "test14",
          description: "test1azeazeazeazeazeaze",
          author: "test1",
        },
        {
          title: "test15",
          description: "test2azeazeazeazeazeaze",
          author: "test2",
        },
        {
          title: "test16",
          description: "test",
          author: "test",
        },
        {
          title: "test17",
          description: "test",
          author: "test",
        },
        {
          title: "test18",
          description: "test",
          author: "test",
        },
        {
          title: "test19",
          description: "test",
          author: "test",
        },
        {
          title: "test20",
          description: "test",
          author: "test",
        },
        {
          title: "test21",
          description: "test",
          author: "test",
        },
      ],
      pagination: {
        page: 1,
        total: 0,
        rowsPerPage: 10,
      },
    };
  },
 mounted () {
    this.pagination.total = this.items.length
  },
  methods: {
    onPageChange(event) {
      console.log(event)
    },
  },
  computed: {
    pages () {
      return Math.ceil(this.pagination.total / this.pagination.rowsPerPage)
    },
    cloneItems() {
        var clone = JSON.parse(JSON.stringify(this.items));
        var startFrom = (this.pagination.page*this.pagination.rowsPerPage)-this.pagination.rowsPerPage;
        return clone.splice(startFrom, this.pagination.rowsPerPage);
    }
  }
};
</script>

<style>

.card-hover{

  background-color: rgba(255, 255, 255, 0.479);
  
}
.card-hover-text{

  color: black;
  
}
  </style>
