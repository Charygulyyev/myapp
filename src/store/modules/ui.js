export default {
  state: {
    drawer: false,
    notification: {
      display: false,
      text: "Notification placeholder text!",
      timeout: 3000,
      class: "success",
    },
    searchbar: false,
    newListForm: false,
  },
  getters: {
    DRAWER: (state) => state.drawer,
    NOTIFICATION: (state) => state.notification,
    SEARCHBAR: (state) => state.searchbar,
    NEW_LIST_FORM: (state) => state.newListForm,
  },
  mutations: {
    SET_DRAWER: (state, payload) => {
      state.drawer = payload;
    },
    SET_NOTIFICATION: (state, { display, text, alertTimeout, alertClass }) => {
      state.notification.display = display;
      state.notification.text = text;
      state.notification.timeout = alertTimeout;
      state.notification.class = alertClass;
    },
    SET_SEARCHBAR: (state, payload) => {
      state.searchbar = payload;
    },
    SET_NEW_LIST_FORM: (state, payload) => {
      state.newListForm = payload;
    },
  },
  actions: {},
};
