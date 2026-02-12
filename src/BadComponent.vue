<template>
  <!-- JS-0623: vue/require-v-for-key — v-for without :key -->
  <ul>
    <li v-for="item in items">{{ item.name }}</li>
  </ul>

  <!-- JS-0693: vue/no-v-html — using v-html (XSS risk) -->
  <div v-html="rawHtml"></div>

  <!-- JS-0617: vue/no-textarea-mustache -->
  <textarea>{{ message }}</textarea>

  <!-- JS-0712: vue/no-template-target-blank -->
  <a href="https://example.com" target="_blank">link</a>

  <!-- JS-0618: vue/no-unused-components — ChildComponent registered but not used -->
  <div>
    <p>No child used here</p>
  </div>
</template>

<script>
export default {
  name: "BadComponent",
  components: {
    ChildComponent: { template: "<span>child</span>" },
  },
  props: {
    // JS-0682: vue/require-default-prop — prop without default
    title: {
      type: String,
    },
    // JS-0683: vue/require-prop-types — prop without type
    subtitle: {},
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      rawHtml: "<b>bold</b>",
      message: "hello",
    };
  },
  methods: {
    // JS-0611: vue/no-mutating-props — modifying a prop directly
    updateTitle() {
      this.title = "new title";
    },
  },
};
</script>
