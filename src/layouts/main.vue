<template>
  <v-app id="inspire">
    <v-app-bar
      app
      src="https://cdn.discordapp.com/attachments/648554266700808202/691422544095346708/2020-03-22_23.51.10.png"
      dark
      shrink-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
      </template>
      <v-toolbar-title>WorldCraft</v-toolbar-title>
      <v-btn link to="/" class="ml-auto mt-2" text>Accueil</v-btn>
      <v-btn link to="/forum" class="mt-2" text>Forum</v-btn>
      <v-btn link to="/login" class="mt-2" text>Se connecter</v-btn>
      <v-btn link to="/admin" class="mt-2" text>admin</v-btn>
    </v-app-bar>

    <v-content class="grey lighten-5">
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      
      <router-view />
    </v-content>

    <v-footer color="grey darken-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="(link,key4) in links"
          :key="key4"
          color="white"
          text
          rounded
          class="my-2"
          link
          :to="link.redirect"
        >{{ link.name }}</v-btn>
        <v-col class="grey py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>WorldCraft</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    links: [
      {
        name: "Accueil",
        redirect: "/",
      },
      {
        name: "Forum",
        redirect: "/forum",
      },
      {
        name: "Contactez-nous",
        redirect: "/contact",
      },
    ],
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        text: "Link 1",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
      {
        text: "Link 2",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
  }),
  methods: {},
};
</script>
