<template>
  <div>
    <v-container fill-height fluid pa-0>
      <v-layout align-space-between justify-space-between>
        <v-flex xs5 lg3 pr-2>
          <ListsComponent />
        </v-flex>
        <v-flex xs5 lg6>
          <router-view name="tasks" :key="$route.fullPath"></router-view>
        </v-flex>
        <v-flex xs2 lg3 pl-2>
          <OptionsComponent />
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer id="the-footer" height="auto" color="blue white--text">
      <v-layout justify-center>
        <v-flex class="text-center">
          &copy;2019-2022
          <strong>Ynamdar.com</strong> |
          <cite>all rights reserved.</cite>
        </v-flex>
      </v-layout>
    </v-footer>
    <NotificationComponent />
  </div>
</template>

<script>
import ListsComponent from "@/components/ListsComponent.vue";
import OptionsComponent from "@/components/OptionsComponent.vue";
import NotificationComponent from "@/components/NotificationComponent.vue";
export default {
  name: "TodoComponent",
  components: {
    ListsComponent,
    OptionsComponent,
    NotificationComponent,
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
      this.listenWindow("lists-menu", [
        "lists-toolbar",
        "lists-actions-menu",
        "the-footer",
      ]);
    },
  },
  mounted() {
    this.listenWindows();
    window.addEventListener("resize", this.listenWindows);
    document.getElementById("the-footer").style.marginTop = "-18px";
  },
};
</script>

<style></style>
