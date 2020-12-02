<template>
  <v-col 
    cols="3" 
    class="mt-12 pt-7"
  >
    <!-- tables top Tag -->
    <v-card 
      class="mb-5 mt-2" 
      max-width="400"
    >
      <v-card-title>
        Top 5 Tag
      </v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Tag</th>
              <th class="text-left">Utilisation</th>
            </tr>
          </thead>
          <tbody>
            
            <tr 
              v-for="(item,key1) in tags" 
              :key="key1"
            >
              <td><a 
                    href="https://google.com" 
                    class="link grey--text text--darken-3"
                  !>{{ item.nameTag }}</a></td>
              <td>{{ item.utilisation }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>

    <v-card
      class="mb-5 mt-5" 
      max-width="400"
    >
      <v-card-title>
        Top 5 Sujet
      </v-card-title>
      <v-simple-table>
        <template #:default>
          <thead>
            <tr>
              <th class="text-left">Sujet</th>
              <th class="text-left">Post</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(item,key2) in tags" 
              :key="key2"
            >
              <td><a 
                    href="https://google.com" 
                    class="link grey--text text--darken-3"
                  >{{ item.nameTag }}</a></td>
              <td>{{ item.utilisation }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>

    <v-card 
      class="mb-5 mt-5" 
      max-width="400"
    >
      <v-card-title>
        Top 5 Utilisateur
      </v-card-title>
      <v-simple-table>
        <template #:default>
          <thead>
            <tr>
              <th class="text-left">Nom</th>
              <th class="text-left">Post</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(item,key3) in tags" 
              :key="key3"
            >
              <td><a 
                    href="https://google.com" 
                    class="link grey--text text--darken-3"
                  >{{ item.nameTag }}</a></td>
              <td>{{ item.utilisation }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        {
          nameTag: "jeans",
          utilisation: 0,
        },
        {
          nameTag: "jeans",
          utilisation: 0,
        },
        {
          nameTag: "jeans",
          utilisation: 0,
        },
        {
          nameTag: "jeans",
          utilisation: 0,
        },
        {
          nameTag: "jeans",
          utilisation: 0,
        },
      ],
    };
  },
};
</script>

