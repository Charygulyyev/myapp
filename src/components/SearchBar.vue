<template>
  <input
    type="text"
    placeholder="Search here..."
    v-on:input="search()"
    v-model.trim="input"
    @blur="closeSearchBar()"
    ref="input"
  />
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    search: function () {
      console.log(this.input);
    },
    closeSearchBar: function () {
      this.$store.commit("SET_SEARCHBAR", false);
    },
  },
};
</script>

<style></style>
