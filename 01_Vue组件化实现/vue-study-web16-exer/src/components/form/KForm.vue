<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "KForm",
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    validate(fn) {
      const tasks = this.$children
        .filter((item) => item.prop)
        .map((item) => item.validate());
        
      Promise.all(tasks)
        .then(() => fn(true))
        .catch(() => fn(false));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
