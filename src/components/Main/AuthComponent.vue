<template>
  <v-dialog v-model="dialog" persistent max-width="600">
    <template #:activator="{ on, attrs }">
      <v-btn class="mt-2" text v-bind="attrs" v-on="on"> Ce connecter </v-btn>
    </template>

    <!-- crud Sujet récuperation de l'id de la catégorie -->
    <v-card v-if="login == true">
      <form @submit="submitLogin">
        
        <v-card-title>
          <h3>Connection</h3>
          <i @click="dialog = false" class="fas fa-times ml-auto"></i>
        </v-card-title>

        <v-card-text>
          <v-text-field
            v-model="User.email"
            :rules="[rules.required, rules.email]"
            label="E-mail"
          ></v-text-field>
          <v-text-field
            v-model="User.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <a class="ml-2" @click="login = false"> Crée un compte</a>
          <v-btn class="mr-auto" @click="_setForm" type="submit">Ce Connecté</v-btn>
        </v-card-actions>

      </form>
    </v-card>

    <!-- crud SUjet récuperation du titre, déscritpion, tag -->
    <v-card v-if="login == false">
      <form @submit="submitRegister">

        <v-card-title>
          <h3>Crée un compte</h3>
          <i 
            @click="dialog = false" 
            class="fas fa-times ml-auto"
          ></i>
        </v-card-title>

        <v-card-text>
          <div>
            <v-text-field 
              label="pseudo" 
              v-model="User.pseudo" 
              single-line
            ></v-text-field>
          </div>
          <div>
            <v-text-field
              v-model="email"
              :rules="[rules.required,rules.email]"
              label="E-mail"
            ></v-text-field
            ><v-text-field
              v-model="emailConfirm"
              :rules="[rules.required,rules.email, (this.email === this.emailConfirm) || 'les email ne match pas ']"
              label="E-mail"
            ></v-text-field>
          </div>
          <div>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              label="Password "
              counter
              @click:append="show1 = !show1"
            ></v-text-field
            ><v-text-field
              v-model="passwordConfirm"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min, (this.password === this.passwordConfirm) || 'les mot de passe ne match pas ']"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </div>
        </v-card-text>
        <v-card-actions>
          <a 
            class="ml-2" 
            @click="login = true"
          > Ce connecté</a>
          <v-btn 
            class="mr-auto" 
            @click="_setForm" 
            type="submit"
            >s'enregister</v-btn>
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
    emailConfirm:"",
    email:"",
    show1: false,
    dialog: false,
    login: true,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
    }
  }),
  created() {
  },
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
      this.User.password = this.passwordConfirm
      this.User.email = this.emailConfirm
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