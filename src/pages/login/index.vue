<!-- 登录页 -->
<template>
  <view class="login-container">
    <view class="title">欢迎回来!</view>
    <u-form :model="form" ref="loginForm" class="myFormCss">
      <u-form-item label="手机号码" prop="phone">
        <u-input
          v-model="form.phone"
          placeholder="请输入手机号"
          :border="true"
        />
      </u-form-item>
      <u-form-item label="密码" prop="password" class="item-password">
        <u-input
          v-model="form.password"
          placeholder="请输入密码"
          type="password"
          :border="true"
        />
      </u-form-item>
    </u-form>
    <u-button @click="login" class="loginBtn">登录</u-button>
    <u-toast ref="uToast" />
  </view>
</template>

<script>
export default {
  components: {},

  data () {
    return {
      form: {
        phone: '',//手机号码
        password: '',//密码
      },
      rules: {
        phone: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'change',
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'change',
          }
        ]
      }
    };
  },
  mounted () {
    this.$refs.loginForm.setRules(this.rules);

  },

  computed: {},

  methods: {
    login () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (this.form.phone == '123' && this.form.password == "123") {
            console.log('进入这里没');
            uni.redirectTo({
              url: "/pages/home/index"
            });

          } else {
            this.$refs.uToast.show({
              title: '手机号或密码不正确',
              type: 'error',
            })
            this.$refs.loginForm.resetFields()
          }
        }
      });


    },

  }
}

</script>
<style lang='scss'>
/deep/.myFormCss {
  .u-form-item__body {
    display: block;
  }
  .u-form-item--left {
    width: 150rpx !important;
    flex: 0 0 150rpx !important;
  }
  .u-form-item__message {
    padding-left: 0 !important;
  }
}
.loginBtn {
  background-color: $default-color !important;
  color: #fff !important;
  margin-top: 20rpx;
}
.loginBtn,
.u-hairline-border:after {
  border: 0 !important;
}
.item-password,
.u-form-item {
  padding: 0 0 20rpx 0 !important;
}
</style>
<style lang='scss' scoped>
.login-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 100rpx 100rpx;
  .title {
    font-weight: 700;
    font-size: 36rpx;
    margin-bottom: 40rpx;
  }
}
</style>