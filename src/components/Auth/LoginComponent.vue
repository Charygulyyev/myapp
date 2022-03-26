<template>
  <v-container fill-height>
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-form>
          <v-card class="elevation-20">
            <v-toolbar dark color="blue">
              <v-toolbar-title> Login Form </v-toolbar-title>
            </v-toolbar>
            <v-alert type="error" :value="error" icon="mdi-close">
              The username or password are incorrect!
            </v-alert>
            <v-card-text>
              <v-text-field
                v-model="username"
                prepend-icon="mdi-account"
                name="login"
                label="Login"
                id="loginId"
                type="text"
              />
              <v-text-field
                v-model="password"
                prepend-icon="mdi-lock"
                name="password"
                label="Password"
                id="passwordId"
                type="password"
              />
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-actions>
              <v-btn to="/signup" class="uppercase" rounded dark color="indigo"
                >sign up</v-btn
              >
              <v-spacer></v-spacer>
              <v-btn
                @click.prevent="login()"
                class="uppercase"
                rounded
                dark
                color="primary"
                >login <v-icon>mdi-chevron-right</v-icon></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "LoginComponent",
  methods: {
    login() {},
  },
  data() {
    return {
      username: "",
      password: "",
      error: false,
    };
  },
};
</script>
