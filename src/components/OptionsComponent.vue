<template>
  <div v-if="show">
    <v-card>
      <v-toolbar color="red" class="white--text">
        <v-toolbar-title>
          <small><v-icon color="white">mdi-cog</v-icon></small>
          <small>Options</small>
        </v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-group
          v-for="(item, ind) in items"
          :key="ind"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>
          <v-list-item
            v-for="(subItem, ind) in item.items"
            :key="ind"
            v-on="
              item.action === 'mdi-sort'
                ? { click: () => sort(subItem.by) }
                : { click: () => filter(subItem.by) }
            "
          >
            <v-list-item-content>
              <v-list-item-title>{{ subItem.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group prepend-icon="mdi-wrench" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>List Options</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item @click="displayNotification()">
            <v-list-item-content>
              <v-list-item-title>Remove list</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click.prevent="openDrawer()">
            <v-list-item-content>
              <v-list-item-title>Change background</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
    <MoreOptions />
  </div>
</template>

<script>
import MoreOptions from "@/components/MoreOptions.vue";
export default {
  name: "OptionsComponent",
  components: {
    MoreOptions,
  },
  methods: {
    displayNotification: function () {
      this.$store.commit("SET_NOTIFICATION", {
        display: true,
        alertClass: "red",
        alertTimeout: 3000,
        text: "List removed!",
      });
    },
    openDrawer: function () {
      this.$store.commit("SET_DRAWER", true);
    },
    sort(value) {
      console.log("Sort by " + value);
    },
    filter(value) {
      console.log("Filter by " + value);
    },
  },
  computed: {
    show: function () {
      return !!this.$route.params.id;
    },
  },
  data() {
    return {
      items: [
        {
          action: "mdi-sort",
          title: "Sort by",
          active: false,
          items: [
            {
              title: "Date",
              by: "date",
            },
            {
              title: "Name",
              by: "name",
            },
          ],
        },
        {
          action: "mdi-filter",
          title: "Filter by",
          active: false,
          items: [
            {
              title: "Reamining",
              by: "remaining",
            },
            {
              title: "Completed",
              by: "completed",
            },
            {
              title: "All",
              by: "all",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
