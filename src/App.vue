<template>
  <v-app>
    <!--
      <LoginComponent />
      <SignUp />
      <TodoComponent /> -->
    <router-view></router-view>
  </v-app>
</template>

<script>
//import LoginComponent from "@/components/Auth/LoginComponent.vue";
//import SignUp from "@/components/Auth/SignUp.vue";
//import TodoComponent from "@/components/TodoComponent.vue";
export default {
  name: "App",
  components: {
    //LoginComponent,
    //SignUp,
    //TodoComponent,
  },
  data: () => ({
    //
  }),
};
</script>
<style lang="sass">
@import ./assets/sass/main
</style>
