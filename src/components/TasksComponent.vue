<template>
  <div>
    <v-card>
      <v-toolbar id="tasks-toolbar" color="blue" dark>
        <v-toolbar-title>
          <v-icon>mdi-tag</v-icon>
          Title of the list
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
      </v-toolbar>
      <v-list two-line id="tasks-list">
        <template v-for="(task, ind) in tasks">
          <SingleTask :key="ind" :task="task" :index="ind" />
        </template>
      </v-list>
      <v-divider></v-divider>
      <v-card-actions id="tasks-actions">
        <v-layout>
          <v-flex>
            <NewTask />
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>
    <router-view :key="$route.fullPath" name="notes"></router-view>
  </div>
</template>

<script>
import SingleTask from "@/components/SingleTask.vue";
import NewTask from "@/components/NewTask.vue";
export default {
  name: "TasksComponent",
  components: {
    SingleTask,
    NewTask,
  },
  methods: {
    listenWindow: function (elemId, idArr) {
      let newArr = [],
        h = 0,
        q = 0;
      let elem = document.getElementById(elemId);
      newArr = idArr.map((id) => document.getElementById(id).clientHeight);
      newArr.map((num) => {
        q += num;
      });
      q += 1;
      h = document.body.clientHeight - q;
      elem.style.maxHeight = h + "px";
      elem.style.overflow = "auto";
    },
    listenWindows: function () {
      this.listenWindow("tasks-list", [
        "tasks-toolbar",
        "tasks-actions",
        "the-footer",
      ]);
    },
  },
  mounted() {
    this.listenWindows();
    window.addEventListener("resize", this.listenWindows);
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "loreana ipsuama",
          sub_title: "This task contains 7 notes.",
          isCompleted: true,
        },
        {
          id: 2,
          title: "loreana ipsuama",
          sub_title: "This task contains 7 notes.",
          isCompleted: false,
        },
        {
          id: 3,
          title: "loreana ipsuama",
          sub_title: "This task contains 7 notes.",
          isCompleted: false,
        },
        {
          id: 4,
          title: "loreana ipsuama",
          sub_title: "This task contains 7 notes.",
          isCompleted: true,
        },
        {
          id: 5,
          title: "loreana ipsuama",
          sub_title: "This task contains 7 notes.",
          isCompleted: true,
        },
        {
          id: 6,
          title: "loreana ipsuama",
          sub_title: "This task contains 7 notes.",
          isCompleted: false,
        },
        {
          id: 7,
          title: "loreana ipsuama",
          sub_title: "This task contains 7 notes.",
          isCompleted: false,
        },
        {
          id: 8,
          title: "loreana ipsuama",
          sub_title: "This task contains 7 notes.",
          isCompleted: true,
        },
        {
          id: 9,
          title: "loreana ipsuama",
          sub_title: "This task contains 7 notes.",
          isCompleted: true,
        },
        {
          id: 10,
          title: "loreana ipsuama",
          sub_title: "This task contains 7 notes.",
          isCompleted: false,
        },
        {
          id: 11,
          title: "loreana ipsuama",
          sub_title: "This task contains 7 notes.",
          isCompleted: false,
        },
        {
          id: 12,
          title: "loreana ipsuama",
          sub_title: "This task contains 7 notes.",
          isCompleted: true,
        },
      ],
    };
  },
};
</script>

<style></style>
