<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-center justify-center>
      <v-flex xs10 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="blue">
            <v-toolbar-title>SignUp Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-alert type="error" :value="true">
                This user already exists, try a different set of data.
              </v-alert>
              <v-text-field
                prepend-icon="mdi-account"
                name="Login"
                label="Login"
                id="SignUpLoginId"
                type="text"
                :rules="[rules.required]"
              />
              <v-text-field
                prepend-icon="mdi-email"
                name="Email"
                label="Email"
                id="SignUpEmailId"
                type="email"
                :rules="[rules.required, rules.email]"
              />
              <v-text-field
                prepend-icon="mdi-lock"
                v-model="password"
                name="Password"
                label="Password"
                id="SignUpPasswordId"
                type="password"
                :rules="[rules.required]"
              />
              <v-text-field
                prepend-icon="mdi-lock"
                v-model="password2"
                name="Password"
                label="Confirm password"
                id="SignUpConfirmPasswordId"
                type="password"
                :rules="[rules.required]"
                :error="!valid()"
              />
            </v-form>
          </v-card-text>
          <v-divider light></v-divider>
          <v-card-actions>
            <v-btn to="/login" color="black" dark rounded>SignIn</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success" rounded @click.prevent="register()"
              >Register
              <v-icon>mdi-chevron-up</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      password: "",
      password2: "",
      rules: {
        required: (value) => !!value || "required",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail!";
        },
      },
    };
  },
  methods: {
    valid() {
      return this.password === this.password2;
    },
    register() {
      this.$router.push("/login");
    },
  },
};
</script>
