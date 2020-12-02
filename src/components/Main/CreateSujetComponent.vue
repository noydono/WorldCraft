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
    <v-card v-if="selectCat == false">
      <v-card-title>
        <h3>Choisir une categorie</h3>
        <i 
          @click="dialog = false" 
          class="fas fa-times ml-auto"
        ></i>
      </v-card-title>

      <v-list width="100%">
        <v-list-group
          v-for="(categorieBig, key) in bigCategorie"
          :key="key"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <h1 
                style="font-size: 20px" 
                v-text="categorieBig.name"
              ></h1>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(categorieSmall, key) in filterSmallCategorie(
              categorieBig._id
            )"
            :key="key"
            @click="SelectCat(categorieSmall._id)"
          >
            <v-list-item-icon class="mt-6 grey--text text--darken-2">
              <v-icon
                v-text="categorieSmall.icon"
                style="font-size: 30px"
              ></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <div class="d-flex flex-row justify-start align-start">
                <div
                  class="subtitle-1 mt-1 grey--text text--darken-4"
                  v-text="categorieSmall.name"
                ></div>
                <v-chip x-small class="ma-2 grey"> nouveaux </v-chip>
              </div>

              <v-list-item-title
                class="subtitle-2 grey--text"
                v-text="categorieSmall.description"
              ></v-list-item-title>
            </v-list-item-content>

            <div class="d-flex flex-row justify-center align-center">
              <v-list-item-avatar class="mr-5">
                <v-img :src="categorieSmall.avatar"></v-img>
              </v-list-item-avatar>
              <v-list-item-title>
                <div class="subtitle-1 black--text">titre du sujet</div>
                <div class="subtitle-2 grey--text">26 juin - by pseudo</div>
              </v-list-item-title>
            </div>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>

    <!-- crud SUjet récuperation du titre, déscritpion, tag -->
    <v-card v-if="selectCat == true">
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
            v-model="newSmallCategorie.title"
            label="Titre du sujet"
          ></v-text-field>
          <v-textarea
            outlined
            v-model="newSmallCategorie.content"
            name="input-7-4"
            label="description de la sujet"
            value="newSmallCategorie.description"
          ></v-textarea>
          <v-text-field
            v-model="newSmallCategorie.tag"
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
            @click="_setForm" 
            type="submit"
          >Suivant</v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  data: () => ({
    newSmallCategorie: {},
    dialog: false,
    selectCat: false,
  }),
  created() {
    this.getBigCategorie();
    this.getSmallCategorie();
  },
  methods: {
    ...mapMutations(["SET_DATA"]),
    ...mapActions(["getBigCategorie", "getSmallCategorie", "setSujet"]),

    _setForm() {
        this.SET_DATA(this.newSmallCategorie);
    },
    formatTag(){  
        let arrayTag = [];
        arrayTag = this.newSmallCategorie.tag.split(" ");
        this.newSmallCategorie.tag = arrayTag;
    },
    submitSujet(event) {
      this.dialog = false;
      event.preventDefault();
      this.setSujet();
    },
    filterSmallCategorie(bId) {
      var arrayCat = [];
      this.smallCategorie.forEach((item) => {
        if (bId === item.categorieBig_id) {
          arrayCat.push(item);
        }
      });

      return arrayCat;
    },
    SelectCat(id) {
      this.newSmallCategorie.categorieSmall_id = id;
      this.selectCat = true;
    },
    retour() {
      this.newSmallCategorie.categorieSmall_id = null;
      this.selectCat = false;
    },
  },
  computed: {
    ...mapState(["bigCategorie", "smallCategorie"]),
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