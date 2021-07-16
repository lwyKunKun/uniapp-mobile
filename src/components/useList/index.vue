<!-- 应用中心列表模板 -->
<template>
  <view class="use-list-template">
    <view class="list-container" v-for="(item, index) in data" :key="index">
      <view class="list-title">
        <u-icon
          name="icon-yingyong"
          custom-prefix="custom-icon"
          size="30"
          color="#1CBBB4"
        ></u-icon>
        <text class="title">{{ item.title }}</text>
      </view>
      <view class="list-use">
        <AppList :listData="item.icon" @listChange="listChange"></AppList>
      </view>
    </view>
  </view>
</template>

<script>
import AppList from '@/components/useList/modules/dragList.vue'
export default {
  components: {
    AppList
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }

  },

  data () {
    return {


    };
  },

  mounted () { },

  computed: {},

  methods: {
    listChange (option) {
      console.log("listChange", option)
    }
  }
}

</script>
<style lang='scss' scoped>
.use-list-template {
  padding: 0 20rpx 20rpx;
}
.list-container {
  width: 100%;
  height: auto;
  .list-title {
    width: 100%;
    border: 2rpx solid #f7fcfc;
    height: 80rpx;
    line-height: 80rpx;
    .title {
      font-size: 28rpx;
      margin-left: 20rpx;
    }
  }
  .list-use {
    margin-top: 20rpx;
    .grid-text {
      font-size: 28rpx;
      margin-top: 4rpx;
      color: $u-type-info;
    }
  }
}
</style>