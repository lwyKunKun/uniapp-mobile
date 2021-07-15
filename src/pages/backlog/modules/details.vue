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
    <view class="detailOpinion">
      <u-input
        v-model="detailOpinion"
        type="textarea"
        placeholder="请详细描述您的意见..."
        :auto-height="true"
      />
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

    };
  },
  onLoad (option) {
    this.data = JSON.parse(decodeURIComponent(option.item));
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
</style>
<style lang='scss' scoped>
.details-container {
  width: 100%;
  height: 100vh;
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
  .detailOpinion {
    background-color: #fff;
    padding: 20rpx;
  }
  .btn {
    display: flex;
    justify-content: flex-end;
    margin-top: 10rpx;
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