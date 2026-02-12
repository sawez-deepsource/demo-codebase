<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <button @click="handleClick">Action</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CleanCard",
  props: {
    title: { type: String, required: true },
    description: { type: String, default: "" },
  },
  setup(props) {
    function handleClick() {
      // clean handler
    }
    return { handleClick };
  },
});
</script>
