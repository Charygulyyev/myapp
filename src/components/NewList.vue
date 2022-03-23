<template>
  <v-container pa-0>
    <v-form ref="form" @submit.prevent="submit()">
      <v-text-field
        append-icon="mdi-plus"
        solo
        ref="title"
        v-model="title"
        placeholder="Title"
        :rules="[rules.required]"
        @blur="closeForm()"
      />
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "NewList",
  data() {
    return {
      title: "",
      rules: {
        required: (value) => !!value || "required",
      },
    };
  },
  methods: {
    submit: function () {
      console.log("submitted");
    },
    closeForm: function () {
      this.$store.commit("SET_NEW_LIST_FORM", false);
    },
  },
  mounted() {
    this.$refs.title.focus();
  },
};
</script>
