<!-- 待办详情 -->
<template>
  <view class="details-container bgc">
    <view class="common content">{{ data.content }}</view>
    <view class="common flow">
      <steps
        v-for="(item, index) in list"
        :item="item"
        :key="index"
        active-color="#1CBBB4"
      >
      </steps>
    </view>
    <view class="common opinion">
      <view>问题和意见</view>
      <view>
        <u-dropdown>
          <u-dropdown-item
            v-model="dropDown"
            title="快速键入"
            :options="options"
            class="dropdown"
            @change="change"
          ></u-dropdown-item>
        </u-dropdown>
      </view>
    </view>
    <view class="box">
      <scroll-view
        class="detailOpinion"
        :style="{ height: navHeight + 'px' }"
        scroll-y="false"
        scroll-x="false"
      >
        <u-input
          v-model="detailOpinion"
          type="textarea"
          placeholder="请详细描述您的意见..."
          :auto-height="true"
        />
      </scroll-view>
    </view>
    <view class="btn">
      <u-button>拒绝</u-button>
      <u-button>通过</u-button>
    </view>
  </view>
</template>

<script>
import steps from '@/components/steps/index.vue'
export default {
  components: {
    steps
  },
  data () {
    return {
      data: {},
      list: [
        {
          status: '11',
          user: 'aaaa',
          result: '6666',
          date: '2021-03-02 02:15',
          activity: 1,
          index: 2,
        },
        {
          status: '审核',
          user: '李主任',
          result: '好的',
          date: '2021-03-02 02:15',
          activity: 1,
          index: 1,
        },
        {
          status: '申请',
          user: '雷婉悦',
          result: '提交申请',
          date: '2021-03-02 01:15',
          activity: 1,
          index: 0,

        }],
      active: 0,
      dropDown: '',//下拉
      options: [
        {
          label: '同意',
          value: 1,
        },
        {
          label: '拒绝',
          value: 2,
        },
      ],
      detailOpinion: '',//详细意见
      pH: 0, //窗口高度
      navHeight: 0, //元素的所需高度

    };
  },
  onLoad (option) {
    this.data = JSON.parse(decodeURIComponent(option.item));
  },
  onReady () {//每次刷新页面获取一次高度
    let that = this;
    uni.getSystemInfo({ //调用uni-app接口获取屏幕高度
      success (res) { //成功回调函数
        that.pH = res.windowHeight //windoHeight为窗口高度
        let scrollHeight = uni.createSelectorQuery().select(".detailOpinion"); //获取scrollHeight
        scrollHeight.boundingClientRect(data => {
          let pH = that.pH;
          that.navHeight = pH - data.top - 90  //计算高度：元素高度=窗口高度-元素距离顶部的距离-底部btn的高度-margin-padding
        }).exec()
      }
    })
  },
  mounted () { },

  computed: {},

  methods: {
    change (value) {//下拉选择事件
      this.options.forEach(item => {
        if (item.value == value) {
          this.detailOpinion = item.label
        }
      })

    }
  }
}

</script>
<style lang="scss">
.details-container {
  /deep/.u-dropdown__content__mask {
    background-color: transparent;
  }
}
</style>
<style lang='scss' scoped>
.details-container {
  width: 100%;
  height: 100%;
  padding: 20rpx 0;
  .common {
    padding: 20rpx;
    font-size: 28rpx;
    background-color: #fff;
    margin-bottom: 40rpx;
  }
  .opinion {
    display: flex;
    margin-bottom: 0;
    view {
      &:last-child {
        margin-left: auto;
      }
    }
    /deep/.u-dropdown__menu__item {
      align-items: flex-start;
      .u-flex {
        display: flex;
      }
    }
  }
  .box {
    overflow-x: hidden;
    .detailOpinion {
      background-color: #fff;
      padding: 20rpx;
    }
  }
  .btn {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 999;
    display: flex;
    margin-top: 10rpx;
    height: 80rpx;
    text-align: center;
    .u-btn--default {
      background-color: $default-color;
      color: #fff;
      font-size: 28rpx;
      margin: 0;
      margin-right: 20rpx;
    }
  }
}
</style>