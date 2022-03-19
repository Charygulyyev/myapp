<template>
  <v-app>
    <v-card color="grey lighten-4" flat tile class="mb-4">
      <v-toolbar dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-main>
      <router-view />
    </v-main>
    <v-footer>
      <v-footer absolute fixed app color="primary" dark light height="64" inset>
      </v-footer>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
