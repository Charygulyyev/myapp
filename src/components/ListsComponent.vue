<template>
  <v-navigation-drawer permanent style="width: 100%">
    <v-toolbar id="lists-toolbar" class="pl-4" color="blue" dark>
      <v-toolbar-title ml-12 v-if="!SEARCHBAR">
        <v-icon>mdi-clipboard-text</v-icon>
        Your lists
      </v-toolbar-title>
      <SearchBar v-if="SEARCHBAR" />
      <v-spacer></v-spacer>
      <v-btn icon @click.prevent="toggleSearchbar()"
        ><v-icon>mdi-magnify</v-icon></v-btn
      >
    </v-toolbar>
    <v-list id="lists-actions-menu">
      <v-list-item
        color="blue"
        @click.prevent="openNewListForm()"
        v-if="isOpen"
      >
        <v-list-item-content>
          <v-list-item-title>Create a new list</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-title>
            <v-btn icon>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-list-item-title>
        </v-list-item-action>
      </v-list-item>
      <v-list-item v-if="openNewListFormValue">
        <NewList />
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list id="lists-menu">
      <v-list-item
        :class="{ 'v-list-item--active': false }"
        v-for="(list, ind) in lists"
        :key="ind"
        :to="{ name: 'tasks', params: { id: list.id } }"
      >
        <v-list-item-content>
          <v-list-item-title>
            {{ list.title }}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-title>
            {{ list.tasks }}
          </v-list-item-title>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import NewList from "@/components/NewList.vue";
import { mapGetters } from "vuex";
export default {
  name: "ListsComponent",
  components: {
    SearchBar,
    NewList,
  },
  computed: {
    ...mapGetters(["SEARCHBAR", "NEW_LIST_FORM"]),
    openNewListFormValue: {
      get() {
        return this.NEW_LIST_FORM;
      },
      set(value) {
        this.$store.commit("SET_NEW_LIST_FORM", value);
      },
    },
    isOpen() {
      return !this.NEW_LIST_FORM;
    },
  },
  methods: {
    toggleSearchbar: function () {
      this.$store.commit("SET_SEARCHBAR", !this.SEARCHBAR);
    },
    openNewListForm: function () {
      this.$store.commit("SET_NEW_LIST_FORM", true);
    },
  },
  data() {
    return {
      lists: [
        {
          id: 1,
          title: "npmjs cdn links",
          tasks: 8,
        },
        {
          id: 2,
          title: "Font awesome css",
          tasks: 45,
        },
        {
          id: 3,
          title: "Lorem ipsum",
          tasks: 17,
        },
        {
          id: 4,
          title: "Dolor sit amet",
          tasks: 31,
        },
        {
          id: 5,
          title: "npmjs cdn links",
          tasks: 8,
        },
        {
          id: 6,
          title: "Font awesome css",
          tasks: 45,
        },
        {
          id: 7,
          title: "Lorem ipsum",
          tasks: 17,
        },
        {
          id: 8,
          title: "Dolor sit amet",
          tasks: 31,
        },
        {
          id: 9,
          title: "npmjs cdn links",
          tasks: 8,
        },
        {
          id: 10,
          title: "Font awesome css",
          tasks: 45,
        },
        {
          id: 11,
          title: "Lorem ipsum",
          tasks: 17,
        },
        {
          id: 12,
          title: "Dolor sit amet",
          tasks: 31,
        },
        {
          id: 13,
          title: "npmjs cdn links",
          tasks: 8,
        },
        {
          id: 14,
          title: "Font awesome css",
          tasks: 45,
        },
        {
          id: 15,
          title: "Lorem ipsum",
          tasks: 17,
        },
        {
          id: 16,
          title: "Dolor sit amet",
          tasks: 31,
        },
      ],
    };
  },
};
</script>

<style></style>
