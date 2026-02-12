<template>
  <div class="greeting">
    <h1>{{ greeting }}</h1>
    <p v-if="showSubtitle">{{ subtitle }}</p>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CleanComponent",
  props: {
    greeting: {
      type: String,
      default: "Hello",
    },
    subtitle: {
      type: String,
      default: "",
    },
    showSubtitle: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
