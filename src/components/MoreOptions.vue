<template>
  <v-layout>
    <v-navigation-drawer v-model="isOpen" absolute right temporary width="36%">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img :src="userProfile" alt="User avatar" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Planyyev Plany</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-form>
        <v-container fluid>
          <v-flex xs12>
            <img :src="imageUrl" alt="" height="150px" />
            <v-file-input
              v-model="choosenFiles"
              @change="previewFiles"
              placeholder="Choose your files..."
              label="Choose your files..."
              accept="image/*"
              multiple
              solo
              :show-size="true"
            >
              <template v-slot:selection="{ index, text }">
                <v-chip small v-if="index < 3">
                  <span>{{ text }}</span>
                  <v-btn icon @click.stop="deleteFile(index)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-chip>
                <span v-else-if="index === 3"
                  >&nbsp;&nbsp;...+{{ choosenFiles.length - 3 }} file(s)</span
                >
              </template>
            </v-file-input>
            <v-btn :loading="isLoading" :disabled="disabled" right>
              Set as background
              <v-icon right dark> mdi-cloud-upload </v-icon>
            </v-btn>
          </v-flex>
        </v-container>
      </v-form>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  name: "MoreOptions",
  data() {
    return {
      userProfile: "https://randomuser.me/api/portraits/med/men/75.jpg",
      imageName: "",
      imageUrl: "",
      choosenFiles: [],
      isLoading: false,
      disabled: false,
    };
  },
  methods: {
    deleteFile(ind) {
      this.choosenFiles.splice(ind, 1);
      this.previewFiles();
    },
    previewFiles() {
      if (this.choosenFiles[0] !== undefined) {
        this.imageName = this.choosenFiles[0].name;
        const fr = new FileReader();
        fr.readAsDataURL(this.choosenFiles[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
        });
      }
    },
  },
  computed: {
    isOpen: {
      get() {
        return this.$store.getters.DRAWER;
      },
      set(value) {
        this.$store.commit("SET_DRAWER", value);
      },
    },
  },
};
</script>

<style></style>
