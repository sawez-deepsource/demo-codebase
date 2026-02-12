<template>
  <!-- JS-0713: vue/no-undef-components (if rule active) -->
  <div>
    <h1>{{ title }}</h1>

    <!-- JS-0726: vue/no-v-html -->
    <div v-html="rawHtml"></div>

    <!-- JS-0727: vue/require-v-for-key — missing :key -->
    <li v-for="item in items">{{ item.name }}</li>

    <!-- JS-0710: vue/no-unused-vars -->
    <div v-for="unused in items">static content</div>

    <!-- JS-0724: vue/no-textarea-mustache -->
    <textarea>{{ message }}</textarea>

    <!-- Clean usage -->
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "BadForm",
  setup() {
    const title = ref("Bad Form");
    const rawHtml = ref("<b>bold</b>");
    const items = ref([
      { id: 1, name: "One" },
      { id: 2, name: "Two" },
    ]);
    const message = ref("Hello");

    return { title, rawHtml, items, message };
  },
});
</script>
