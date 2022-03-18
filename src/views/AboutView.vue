<template>
  <div class="about">
    <h1>This is an about page</h1>
    <new-component />
  </div>
</template>
<script>
import NewComponent from "@/components/NewComponent.vue";
export default {
  name: "AboutView",
  components: { NewComponent },
};
</script>
