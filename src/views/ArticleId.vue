<template>
  <v-container class="mx-auto">
    <v-row class="my-auto">
      <v-card>
        <v-card-text>
          <h1 class="pink--text text--accent-1">Brunch this weekend?</h1>
          <div>
            <v-chip class="ma-2">#Default</v-chip>
            <v-chip class="ma-2" color="primary">#tag</v-chip>
          </div>
          <p class="mt-1">
            <i class="far fa-user ml-2"></i>
            <a class="author grey--text text--darken-1 ml-2" href>Alex</a>,
            <a class="author grey--text text--darken-1" href>coco</a>,
            <a class="author grey--text text--darken-1" href>Alex</a>
            <i class="far fa-clock ml-4 ml-2"></i> 20/07/1994
          </p>
          <v-divider></v-divider>
        </v-card-text>

        <v-card-text>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem mollitia dolorum nisi odio, quasi quidem nam
            debitis obcaecati odit asperiores ipsa voluptatem consequatur
            reprehenderit quis harum voluptatum illum reiciendis atque.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem mollitia dolorum nisi odio, quasi quidem nam
            debitis obcaecati odit asperiores ipsa voluptatem consequatur
            reprehenderit quis harum voluptatum illum reiciendis atque.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem mollitia dolorum nisi odio, quasi quidem nam
            debitis obcaecati odit asperiores ipsa voluptatem consequatur
            reprehenderit quis harum voluptatum illum reiciendis atque.
          </p>
        </v-card-text>

        <v-card-actions class="d-flex flex-row-reverse">
          <v-btn text color="pink accent-1">
            <i class="far fa-heart"></i>
            <span>123124</span>
          </v-btn>
          <v-btn text color="pink accent-1">
            <i class="far fa-bell"></i>
            <span>123124</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>

    <v-row class="my-auto mt-5">
      <v-card width="100%">
        <v-container class="py-0">
          <v-row>
            <v-col
              cols="3"
              md="2"
              class="reponse-author d-flex flex-column align-center justify-center blue-grey lighten-4"
            >
              <v-avatar class="mt-3">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
              </v-avatar>

              <a class="author pink--text text--accent-1 mt-1" href>Rwby</a>
              <p class="reponse-citation text-center mt-2">
                <i class="fas fa-quote-left" style="font-size:7px"></i>
                cecie st une citation blabalbalbalbalblablablablablaal
                <i
                  class="fas fa-quote-right"
                  style="font-size:7px"
                ></i>
              </p>
            </v-col>

            <v-col cols="12" md="10">
              <p class="caption">
                <i class="far fa-clock ml-2 ml-2"></i> ajouter le 123/123/123
              </p>
              <p class="p-reponse ml-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem mollitia dolorum nisi odio, quasi quidem nam
                debitis obcaecati odit asperiores ipsa voluptatem consequatur
                reprehenderit quis harum voluptatum illum reiciendis atque.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem mollitia dolorum nisi odio, quasi quidem nam
                debitis obcaecati odit asperiores ipsa voluptatem consequatur
                reprehenderit quis harum voluptatum illum reiciendis atque.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem mollitia dolorum nisi odio, quasi quidem nam
                debitis obcaecati odit asperiores ipsa voluptatem consequatur
                reprehenderit quis harum voluptatum illum reiciendis atque.
              </p>
               <v-card-actions class="float-right">
                <v-btn text color="pink accent-1">
                  <i class="far fa-heart"></i>
                  <span>123124</span>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
         
        </v-container>
      </v-card>
    </v-row>
    <form action>
      <v-row class="my-auto mt-5">
        <v-card width="100%" class="d-flex flex-column justify-center align-center">
          <v-textarea outlined name label="Commenter" value class="mt-5" style="width:40%"></v-textarea>
          <v-btn class="float-right mb-5 mr-5">envoyer</v-btn>
        </v-card>
      </v-row>
    </form>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="sass">
.author
  text-decoration: none
  &:hover
    text-decoration: underline

.reponse-author
  border-right: 1px solid #919191

.reponse-citation
  overflow-wrap: anywhere
</style>