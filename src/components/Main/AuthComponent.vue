<template>
  <v-dialog v-model="dialog" persistent max-width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="mt-2" text v-bind="attrs" v-on="on"> Connexion </v-btn>
    </template>

    <!-- crud Sujet récuperation de l'id de la catégorie -->
    <v-card v-if="login == true">
      <form @submit="submitLogin">
        <v-card-title>
          <i @click="dialog = false" class="fas fa-times ml-auto"></i>
        </v-card-title>
        <v-card-text>
          <v-container class="d-flex flex-column justify-center align-center">
            <h2 style="font-size:25px;" class=" mb-2">S'identifier</h2>

            <v-row>
              <v-col md="12" sm="6">
                <v-text-field
                  v-model="User.email"
                  :rules="[rules.required, rules.email]"
                  label="E-mail"
                  outlined
                ></v-text-field>
                <v-text-field
                  class="mt-2"
                  v-model="User.password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  label="Password"
                  counter
                  @click:append="show1 = !show1"
                  outlined
                ></v-text-field>
              </v-col>
              <v-btn block class="success" @click="_setForm" type="submit"
                >Ce Connecter</v-btn
              >
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions class="d-flex flex-row justify-center mb-2">
          <span
            >Pas encore membre ?
            <a class="ml-2" @click="login = false">Crée un compte</a></span
          >
        </v-card-actions>
      </form>
    </v-card>

    <!-- crud SUjet récuperation du titre, déscritpion, tag -->
    <v-card v-if="login == false">
      <form @submit="submitRegister">
        <v-card-title>
          <i @click="dialog = false" class="fas fa-times ml-auto"></i>
        </v-card-title>

        <v-card-text>
          <v-container class="d-flex flex-column justify-center align-center">
            <h2 style="font-size:25px;" class=" mb-2">Crée un compte</h2>

            <v-row class="ml-2 mr-2">
              <v-col md="12" sm="6">
                <v-text-field
                  label="Pseudo"
                  v-model="User.pseudo"
                  height="50px"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="User.email"
                  :rules="[rules.required, rules.email]"
                  label="E-mail"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show2 ? 'text' : 'password'"
                  label="Choisissez un mot de passe"
                  counter
                  @click:append="show2 = !show2"
                  outlined
                ></v-text-field
                ><v-text-field
                  v-model="passwordConfirm"
                  :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[
                    rules.required,
                    rules.min,
                    this.password === this.passwordConfirm ||
                      'les mots de passe ne correspondent pas  ',
                  ]"
                  :type="show3 ? 'text' : 'password'"
                  label="Confirmé le mot de passe"
                  counter
                  @click:append="show3 = !show3"
                  outlined
                ></v-text-field>
              </v-col>
              <v-btn block class="success" @click="_setForm" type="submit"
                >Crée un compte</v-btn
              >
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions class="d-flex flex-row justify-center mb-2">
          <span
            >Déjà membre ?<a class="ml-2" @click="login = true"
              >Ce connecter</a
            ></span
          >
        </v-card-actions>
      </form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data: () => ({
    User: {},
    password: "",
    passwordConfirm: "",
    emailConfirm: "",
    email: "",
    show1: false,
    show2: false,
    show3: false,
    dialog: false,
    login: true,
    rules: {
      required: (value) => !!value || "Obligatoire.",
      min: (v) => v.length >= 8 || "Min 8 caractères",
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "e-mail non valide.";
      },
    },
  }),
  created() {},
  methods: {
    ...mapMutations(["SET_DATA"]),
    ...mapActions(["setLogin", "setRegister"]),

    _setForm() {
      this.SET_DATA(this.User);
    },

    submitLogin(event) {
      this.dialog = false;
      event.preventDefault();
      this.setLogin(this.User);
    },

    submitRegister(event) {
      this.User.password = this.passwordConfirm;
      console.log(this.User);
      this.dialog = false;
      event.preventDefault();
      this.setRegister(this.User);
    },
  },
  computed: {},
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