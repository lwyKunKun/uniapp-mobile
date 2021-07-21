<!--底部固定按钮  -->
<template>
  <view
    @tap="click"
    class="bottomFixedBtn"
    :style="{ backgroundColor: backgroundColor, color: color }"
  >
    <u-icon
      :name="icon"
      custom-prefix="custom-icon"
      size="50"
      v-if="isCustomIcon"
    ></u-icon>
    <u-icon name="plus" v-else size="50"></u-icon>
  </view>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    backgroundColor: {/*默认加号背景色*/
      type: String,
      default: "#228B22"
    },
    color: {/*默认的字体颜色*/
      type: String,
      default: "#FFFFFF"
    },
    icon: {
      type: String,
    },
    isCustomIcon: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click () {/*悬浮的加号点击事件*/
      this.$emit('clickBtn')
    }
  }
}

</script>

<style>
.bottomFixedBtn {
  /*基础*/
  position: fixed; /*相对于手机屏幕布局*/
  z-index: 99; /*叠层设置*/
  /*设置内部加号居中*/
  display: flex;
  align-items: center;
  justify-content: center;
  /*宽高*/
  width: 90upx;
  height: 90upx;
  /*位于屏幕的位置（可根据需求改）*/
  bottom: 30px;
  right: 50upx;
  /*圆形（若需要正方形的加号可以去掉此样式）*/
  border-radius: 40px;
  /*四边阴影（让加号看起来有立体感）*/
  /* -webkit-box-shadow: #808080 0px 0px 4px;
  -moz-box-shadow: #808080 0px 0px 4px;
  box-shadow: #808080 0px 0px 4px; */
  /*加号大小*/
  font-size: 65upx;
}
</style>
