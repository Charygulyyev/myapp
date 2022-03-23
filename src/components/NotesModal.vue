<template>
  <v-layout row justify-center>
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="60%"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-title primary-title> Notes Modal title </v-card-title>
        <v-card-text>
          <v-container>
            <v-form>
              <v-textarea
                v-model="note"
                label="Note"
                name="note"
                placeholder="Start writing your note here..."
              ></v-textarea>
              <v-btn color="success">
                save
                <v-icon>mdi-check</v-icon>
              </v-btn>
            </v-form>
          </v-container>
          <v-list three-line subheader>
            <v-subheader>Notes</v-subheader>
            <v-list-item v-for="(note, ind) in notes" :key="ind">
              <v-list-item-content>
                <v-list-item-title>{{ note.note }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="red">mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-btn plain dark color="primary" @click="closeModal">close</v-btn>
          <v-spacer></v-spacer>
          <v-btn plain dark color="red">remove task</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: "NotesModal",
  methods: {
    closeModal: function () {
      this.dialog = false;
      this.$router.go(-1);
    },
  },
  data() {
    return {
      note: "",
      dialog: true,
      notes: [
        {
          id: 1,
          note: "Lorem ipsum dolor sit amet",
        },
        {
          id: 2,
          note: "Fonta awesomus dolora gaheri jacuta",
        },
        {
          id: 3,
          note: "Amet consectetur adipisicing elit.",
        },
        {
          id: 4,
          note: " Ipsum aliquid, eos, velit optio debitis dolorum corrupti.",
        },
        {
          id: 5,
          note: "Quam assumenda saepe alias id odit fugiat recusandae.",
        },
      ],
    };
  },
};
</script>

<style></style>
