<!-- 应用中心列表模板 -->
<template>
  <scroll-view
    class="scroll"
    scroll-y="true"
    scroll-with-animation="true"
    scroll-x="false"
  >
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
        <dragList :listData="item.icon" @listChange="listChange"></dragList>
      </view>
    </view>
  </scroll-view>
</template>

<script>
import dragList from '@/components/useList/modules/dragList.vue'
export default {
  components: {
    dragList
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
.scroll {
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.list-container {
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 0 20rpx 20rpx;
  .list-title {
    width: 100%;
    border-bottom: 2rpx solid #eee;
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