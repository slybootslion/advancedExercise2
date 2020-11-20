<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <span v-if="error" class="error">{{ error }}</span>
  </div>
</template>

<script>
import Schema from "async-validator";

export default {
  name: "KFormItem",
  inject: ["form"],
  props: {
    label: {
      type: String,
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      error: "",
    };
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      const { rules, model } = this.form;
      const rule = rules[this.prop];
      const value = model[this.prop];
      const desc = { [this.props]: rule }; // 校验规则
      const schema = new Schema(desc);
      return schema.validate({ [this.props]: value }, errors => {
        if (errors) {
          this.error = errors[0].message;
        } else {
          this.error = "";
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: #c00;
}
</style>
