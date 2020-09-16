<template>
  <v-row class="mt-12">
    <v-list width="100%">
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <h1 style="font-size:20Px" v-text="item.title"></h1>
          </v-list-item-content>
        </template>

        <v-list-item :to="subItem.link"  v-for="subItem in item.items" :key="subItem.title">
          
          <v-list-item-icon class="mt-6 grey--text text--darken-2">
            <v-icon v-text="subItem.icon" style="font-size:30px"></v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <div  class="d-flex flex-row justify-start align-start">
              <div class="subtitle-1 mt-1 grey--text text--darken-4"  v-text="subItem.title"></div>
              <v-chip  x-small class="ma-2 grey "> nouveaux </v-chip>
            </div>
            
            <v-list-item-title  class="subtitle-2 grey--text" v-text="subItem.presentation"></v-list-item-title>
          </v-list-item-content>

          <div class="d-flex flex-row justify-center align-center">
            <v-list-item-avatar class="mr-5">
              <v-img :src="subItem.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-title>
              <div class="subtitle-1 black--text">titre du sujet</div>
              <div class="subtitle-2 grey--text">26 juin - by pseudo</div>
            </v-list-item-title>
          </div>
          
        </v-list-item>

      </v-list-group>
    </v-list>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Minecraft (java): World Edit",
          active: true,
          items: [
            {
              title: "Commande",
              icon: "far fa-comment-alt",
              avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
              presentation: "list des commandes ",
              link : "/listSujet",

            },{
              title: "Brush",
              icon: "far fa-comment-alt",
              avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
              presentation: "tu recherche un brush special ou tu veut en partager un n'essite pas . ",
              link : "/listSujet"
            },{
              title: "Aide",
              icon: "far fa-comment-alt",
              avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
              presentation: "si ta besoin d'aide c'est ici !",
              link : "/listSujet"
            },
          ],
        },
        {
          title: "Minecraft (java): Voxel sniper",
          items: [
            {
              title: "Breakfast & brunch",
              icon: "far fa-comment-alt",
              avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
              presentation: "sujet blablablablablabl",
              link : "/listSujet"
            },
            {
              title: "New American",
              icon: "far fa-comment-alt",
              avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
              presentation: "sujet blablablablablabl",
              link : "/listSujet"
            },
            {
              title: "Sushi",
              icon: "far fa-comment-alt",
              avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
              presentation: "sujet blablablablablabl",
              link : "/listSujet"
            },
          ],
        },
        {
          action: "",
          title: "Minecraft (java) : Build",
          items: [
            {
              title: "List Item",
              icon: "far fa-comment-alt",
              avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
              presentation: "sujet blablablablablabl",
              link : "/listSujet"
            },
          ],
        },
        {
          title: "Minecraft (bedrock) : Build",
          items: [
            {
              title: "List Item",
              icon: "far fa-comment-alt",
              avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
              presentation: "sujet blablablablablabl",
              link : "/listSujet"
            },
          ],
        },
        {
          title: "Forum",
          items: [
            {
              title: "Réglementation",
              icon: "far fa-comment-alt",
              avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
              presentation: "Toutes les régles a respecter sur le forum. N'oublie pas de signer la réglementation ",
              link : "/listSujet"            
            },{
              title: "Nouveauté",
              icon: "far fa-comment-alt",
              avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
              presentation: "Toutes les nouveauté ajouter au forum.",
              link : "/listSujet"
            },{
              title: "Présentations",
              icon: "far fa-comment-alt",
              avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
              presentation: "Vient te présenter ou lire la présentation des autres ",
              link : "/listSujet"
            },{
              title: "candidature",
              icon: "far fa-comment-alt",
              avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
              presentation: "si rejoindre l'equipe du forum t'interesse n'ésiter pas à postuler ",
              link : "/listSujet"
            },
          ],
        },
      ],
    };
  },
};
</script>
