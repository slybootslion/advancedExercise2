<template>
  <div>
    <!-- 
        需求分析
        KForm：指定数据、校验规则
        KFormItem：执行校验、显示错误信息
        KInput：维护数据
       -->
    <k-form :model="userInfo" :rules="rules" ref="loginForm">
      <k-form-item label="用户名：" prop="username">
        <k-input v-model="userInfo.username" placeholder="输入用户名" />
      </k-form-item>
      <k-form-item label="密码：" prop="password">
        <k-input
          v-model="userInfo.password"
          type="password"
          placeholder="输入密码"
        />
      </k-form-item>
      <button type="buttom" @click="login">登录</button>
    </k-form>
    <Notice :title="noticeTitle" :message="noticeMessage"></Notice>
  </div>
</template>

<script>
import KInput from "./KInput";
import KFormItem from "./KFormItem";
import KForm from "./KForm.vue";
import Notice from "../Notice";
export default {
  name: "FormComp",
  components: {
    KInput,
    KFormItem,
    KForm,
    Notice,
  },
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "输入用户名" }],
        password: [{ required: true, message: "输入密码" }],
      },
      noticeTitle: "",
      noticeMessage: "",
    };
  },
  methods: {
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (!valid) {
          const notice = this.$create(Notice, {
            title: "社会你杨哥喊你来搬砖",
            message: "校验失败",
            duration: 2000,
          });
          notice.show();
          return false;
        }
        console.log("form submit!");
      });
    },
  },
};
KInput;
</script>

<style lang="scss" scoped>
</style>
