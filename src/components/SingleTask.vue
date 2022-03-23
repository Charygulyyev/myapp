<template>
  <v-list-item>
    <v-list-item-action>
      <v-btn @click.prevent="openModal" icon>
        <v-icon color="red">mdi-pencil</v-icon>
      </v-btn>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>{{ task.title }}</v-list-item-title>
      <v-list-item-subtitle>{{ task.sub_title }}</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <v-btn icon>
        <v-icon color="green" v-if="task.isCompleted"
          >mdi-checkbox-marked-circle</v-icon
        >
        <v-icon color="grey" v-else>mdi-checkbox-marked-circle</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  name: "SingleTask",
  props: {
    task: Object,
    index: Number,
  },
  methods: {
    openModal: function () {
      this.$router.push({ name: "notes", params: { taskId: this.task.id } });
    },
  },
};
</script>

<style></style>
