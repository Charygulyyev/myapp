<template>
  <v-snackbar
    v-model="snackbar"
    :color="NOTIFICATION.class"
    :timeout="NOTIFICATION.timeout"
    bottom
    right
  >
    <v-layout align-center justify-space-between>
      <v-flex xs10>
        <v-icon>mdi-alert</v-icon>
        {{ NOTIFICATION.text }}
      </v-flex>
      <v-flex xs2>
        <v-btn icon @click.native="snackbar = false">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-snackbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NotificationComponent",
  computed: {
    ...mapGetters(["NOTIFICATION"]),
    snackbar: {
      get() {
        return this.$store.getters.NOTIFICATION.display;
      },
      set(value) {
        this.$store.commit("SET_NOTIFICATION", {
          display: value,
          text: "",
          alertTimeout: 0,
          alertClass: "success",
        });
      },
    },
  },
};
</script>

<style></style>
