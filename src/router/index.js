import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "todo",
    component: () =>
      import(
        /* webpackChunkName: "todoComponent" */ "../components/TodoComponent.vue"
      ),
    children: [
      {
        path: "list/:id",
        name: "tasks",
        components: {
          tasks: () =>
            import(
              /* webpackChunkName: "tasks" */ "../components/TasksComponent.vue"
            ),
        },
        children: [
          {
            path: "task/:taskId",
            name: "notes",
            components: {
              notes: () =>
                import(
                  /* webpackChunkName: "notesModal" */ "../components/NotesModal.vue"
                ),
            },
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(
        /* webpackChunkName: "login" */ "../components/Auth/LoginComponent.vue"
      ),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../components/Auth/SignUp.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
