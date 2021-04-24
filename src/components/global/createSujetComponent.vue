<template>
  <v-dialog 
    v-model="dialog" 
    persistent 
    max-width="600"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn 
        class="mt-2" 
        text 
        v-bind="attrs" 
        v-on="on"
      > Crée un sujet </v-btn>
    </template>

    <!-- crud Sujet récuperation de l'id de la catégorie -->
    <v-card v-if="selectCategorie == false">
      <v-card-title>
        <h3>Choisir une categorie</h3>
        <i 
          @click="dialog = false" 
          class="fas fa-times ml-auto"
        ></i>
      </v-card-title>

      <v-list width="100%">
        <v-list-group
          v-for="(categorie, key) in categories"
          :key="key"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <h1 
                style="font-size: 20px" 
                v-text="categorie.name"
              ></h1>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(section, key) in filterSmallCategorie(
              categorie.id
            )"
            :key="key"
            @click="SelectCategorie(section.id)"
          >
            <v-list-item-icon class="mt-6 grey--text text--darken-2">
              <v-icon
                v-text="section.icon"
                style="font-size: 30px"
              ></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <div class="d-flex flex-row justify-start align-start">
                <div
                  class="subtitle-1 mt-1 grey--text text--darken-4"
                  v-text="section.name"
                ></div>
                <!-- <v-chip x-small class="ma-2 grey"> nouveaux </v-chip> -->
              </div>

              <v-list-item-title
                class="subtitle-2 grey--text"
                v-text="section.description"
              ></v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>

    <!-- crud SUjet récuperation du titre, déscritpion, tag -->
    <v-card v-if="selectCategorie == true">
      <form @submit="submitSujet">
        <v-card-title>
          <h3>Creation de sujet</h3>
          <i 
            @click="dialog = false" 
            class="fas fa-times ml-auto"
          ></i>
        </v-card-title>

        <v-card-text>
          <v-text-field
            v-model="newSujet.title"
            label="Titre du sujet"
            @change="_setForm()"
          ></v-text-field>
          <v-textarea
            outlined
            v-model="newSujet.content"
            name="input-7-4"
            label="description de la sujet"
            value="newSujet.description"
          ></v-textarea>
          <v-text-field
            v-model="newSujet.tag"
            label="Tag du sujet"
            @change="formatTag()"
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-btn 
            color="green darken-1" 
            @click="retour()"
          >Annuler</v-btn>
          <v-btn 
            class="mr-auto" 
            @click="_setForm()" 
            type="submit"
          >Suivant</v-btn>
        </v-card-actions>
      </form>
    </v-card>

  </v-dialog>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
import VueJwtDecode from "vue-jwt-decode";

export default {

  data: () => ({
    newSujet: {},
    dialog: false,
    selectCategorie: false,
  }),

  created() {

    this.getCategorie();
    this.getSection();

  },

  methods: {

    ...mapMutations(["SET_DATA"]),
    ...mapActions(["getCategorie", "getSection", "setSujet"]),

    _setForm() {
        let token = localStorage.getItem("jwt");
        if(token){
          let decoded = VueJwtDecode.decode(token);
          this.newSujet.author = decoded.pseudo
        }        
        this.SET_DATA(this.newSujet);
    },

    formatTag(){  
        let arrayTag = [];
        arrayTag = this.newSujet.tag.split(" " || " # ");
        this.newSujet.tag = arrayTag;
    },

    submitSujet(event) {
      this.dialog = false;
      event.preventDefault();
      this.setSujet();
    },

    filterSmallCategorie(categorieID) {
      var arrayCat = [];
      this.sections.forEach((item) => {
        if (categorieID === item.categorie_id) {
          arrayCat.push(item);
        }
      });
      return arrayCat;
    },

    SelectCategorie(id) {
      this.newSujet.section_id = id;
      this.selectCategorie = true;
    },

    retour() {
      this.newSujet.section_id = null;
      this.selectCategorie = false;
    },

  },

  computed: {

    ...mapState({
      categories: state => state.categorie.categories, 
      sections: state => state.section.sections
      }),

  },
};

</script>

<style lang="scss" scoped>
.fas {
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: rotate(90deg);
  }
}
</style>