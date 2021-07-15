<template>
  <view class="steps">
    <view class="steps_list">
      <view
        class="icon"
        :class="{ 'active-node': item.activity == item.index }"
        :style="
          item.activity == item.index
            ? `backgroundColor:${activeColor}`
            : 'backgroundColor:#BABABC'
        "
      >
      </view>

      <view
        class="tail"
        :style="
          item.activity == item.index
            ? `backgroundColor:${activeColor}`
            : 'backgroundColor:#BABABC'
        "
        :hidden="item.index == 0"
      ></view>
    </view>
    <view class="steps_content">
      <view
        :style="
          item.activity == item.index ? `color:${activeColor}` : 'color:#000'
        "
        >{{ item.status }}</view
      >
      <view class="description">
        <view>{{ item.user }}</view>
        <view>{{ item.result }}</view>
        <view>{{ item.date }}</view>
      </view>
    </view>
  </view>
</template>

<script>
/*
item：每条记录详情
activity: 当前进度条状态
index：进度条排列序号 index == 0代表最后一个没有竖立进度条
activeColor：被选中的颜色
 */
export default {
  name: 'm-steps',
  data () {
    return {

    }
  },
  props: {
    item: {
      type: Object,
    },
    activeColor: {//被选中的颜色
      type: String,
    }

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.description {
  display: flex;
  color: #d7d8d9;
  font-size: 24rpx;
  justify-content: flex-start;
  view {
    margin-right: 10rpx;
  }
}
.steps {
  display: flex;
  .steps_list {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10rpx 20rpx 0;
    .icon {
      width: 30rpx;
      height: 30rpx;
      background-color: #aaa;
      border-radius: 50%;
    }
    .tail {
      height: calc(100% - 30rpx);
      transform: translateY(10%);
      width: 2rpx;
      background-color: #eee;
    }
  }
}
</style>
