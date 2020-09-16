<template>
  <v-row class="mt-12">
    <v-card
      class="mx-auto"
      
    >
      <v-list
        :disabled="disabled"
        :dense="dense"
        :two-line="twoLine"
        :three-line="threeLine"
        :shaped="shaped"
        :flat="flat"
        :subheader="subheader"
        :sub-group="subGroup"
        :nav="nav"
        :avatar="avatar"
        :rounded="rounded"
      >
        <v-subheader>Title</v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item :to="subItem.link"  v-for="subItem in items" :key="subItem.title" @click="$router.push('/Article/12313661')">
          
          <v-list-item-avatar class="mr-5">
              <v-img :src="subItem.avatar"></v-img>
            </v-list-item-avatar>

          <v-list-item-content >
            
            <div  class="d-flex flex-row justify-start align-start">
              
              <div class="subtitle-1 mt-1 grey--text text--darken-4"  v-text="subItem.title"></div>
              <v-chip  x-small class="ma-2 grey "> nouveaux </v-chip>
            </div>
            
            <v-list-item-title  class="subtitle-2 grey--text" v-html="subItem.subtitle"></v-list-item-title>
          </v-list-item-content>

          <div class="d-flex flex-row justify-center align-center">
            <v-list-item-title>
              <div class="subtitle-1 black--text">pseudo</div>
              <div class="subtitle-2 grey--text">26 juin</div>
            </v-list-item-title>
            <v-list-item-avatar class="mr-5">
              <v-img aspect-ratio="2" :src="subItem.avatar"></v-img>
            </v-list-item-avatar>
          </div>
          
        </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-card>
  </v-row>
</template>
<script>
  export default {
    data: () => ({
      item: 5,
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ ',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ],
      disabled: false,
      dense: false,
      twoLine: false,
      threeLine: true,
      shaped: true,
      flat: false,
      subheader: false,
      inactive: false,
      subGroup: false,
      nav: false,
      avatar: true,
      rounded: false,
    }),
  }
</script>