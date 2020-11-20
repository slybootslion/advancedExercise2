<template>
  <div>
    <input v-bind="$attrs" :value="value" @input="onInput" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      this.$parent.$emit("validate");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
