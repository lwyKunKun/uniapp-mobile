<!-- 底部tabbar组件 -->
<template>
  <view class="home-bottom">
    <u-tabbar
      v-model="current"
      :list="bottomList"
      active-color="#1CBBB4"
      inactive-color="#BABBBB"
      icon-size="50"
      @change="change"
    ></u-tabbar>
  </view>
</template>

<script>
export default {
  name: 'bottomTabbar',
  components: {},
  data () {
    return {
      bottomList: [
        {
          iconPath: "shouye",
          selectedIconPath: "shouye",
          text: '首页',
          customIcon: true,
          pagePath: "/pages/home/index"
        },
        {
          iconPath: "daiban",
          selectedIconPath: "daiban",
          text: '待办',
          customIcon: true,
          pagePath: "/pages/backlog/index"
        },
        {
          iconPath: "icon-yingyong",
          selectedIconPath: "icon-yingyong",
          text: '应用',
          customIcon: true,
          pagePath: "/pages/use/index"
        },
        {
          iconPath: "wode",
          selectedIconPath: "wode",
          text: '我的',
          customIcon: true,
          pagePath: "/pages/mine/index"
        },
      ],
      current: 0,
    };
  },
  methods: {
    change (index) {
      this.$emit('change', index)
    }
  }
}
</script>