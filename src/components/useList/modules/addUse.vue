<template>
  <view class="addUse-modal">
    <u-form :model="form" ref="form">
      <u-form-item label="应用名" prop="applyName">
        <u-input v-model="form.applyName" placeholder="请输入应用名" />
      </u-form-item>
      <u-form-item label="图标" prop="iconName">
        <u-input v-model="form.iconName" placeholder="请输入图标名" />
      </u-form-item>
    </u-form>
  </view>
</template>

<script>
export default {
  name: "addUse",
  props: {
  },
  data () {
    return {
      form: {
        applyName: '',//应用名
        iconName: ''//icon名字

      }
    };
  },
  methods: {
    resetVal () {
      this.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.addUse-modal {
  padding: 0 20rpx;
  /deep/.u-form-item--left {
    flex: 0 0 15% !important;
  }
}
</style>
