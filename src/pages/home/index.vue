<template>
  <view class="home-container bgc">
    <z-paging
      ref="paging"
      v-model="currentList"
      @query="queryList"
      auto-show-back-to-top
      refresher-threshold="100rpx"
      :fixed="false"
    >
      <view slot="top">
        <view class="home-banner bgc-padding">
          <u-swiper
            :list="imgList"
            border-radius="10"
            :title="true"
            :effect3d="true"
          ></u-swiper>
        </view>
        <view class="home-notice">
          <u-cell-group :border="false">
            <u-cell-item icon="volume-up" title="通知公告"></u-cell-item>
          </u-cell-group>
        </view>
      </view>
      <view class="home-notice-list">
        <u-card
          :show-head="false"
          class="card-box"
          v-for="(item, index) in currentList"
          :key="index"
        >
          <view class="" slot="body">
            <view class="home-notice-body">
              <view class="home-notice-top-left">
                <view class="notice">公告</view>
              </view>
              <view class="home-notice-top-right">
                <view class="title-top">
                  <view class="title">{{ item.title }}</view>
                  <view class="point"></view>
                </view>
                <view class="content-middle">{{ item.content }}</view>
                <view class="date-bottom">{{ item.date }}</view>
              </view>
            </view>
          </view>
        </u-card>
      </view>
      <view slot="bottom">
        <bottom-tabbar></bottom-tabbar>
      </view>
    </z-paging>
  </view>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      imgList: [
        {
          image: '../../static/img/banner1.jpeg',
          title: '第一张图'
        },
        {
          image: '../../static/img/banner2.jpeg',
          title: '第二张图'
        },
        {
          image: '../../static/img/banner3.jpeg',
          title: '第三张图'
        },

      ],
      contentList: [
        {
          title: '1关于各部门做好2021年工作计划的通知',
          content: '关于各部门做好2021年工作计划的通知lalallalllllllllllllllll55555555kkkkkkkkk啦啦啦啦啦啦啦啦啦啦啦呜呜呜呜呜呜哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈呜呜呜uwuwuwuwuuwuwuwuwuuw',
          date: '2021-03-02 01:00:21'
        },
        {
          title: '2明天下午三点开会',
          content: '明天下午三点开会,请大家准时到会议室参加!',
          date: '2021-07-07 05:30:21'
        },
        {
          title: '3明天下午三点开会',
          content: '明天下午三点开会,请大家准时到会议室参加!',
          date: '2021-07-07 05:30:21'
        },
        {
          title: '4明天下午三点开会',
          content: '明天下午三点开会,请大家准时到会议室参加!',
          date: '2021-07-07 05:30:21'
        },
        {
          title: '5明天下午三点开会',
          content: '明天下午三点开会,请大家准时到会议室参加!',
          date: '2021-07-07 05:30:21'
        },
        {
          title: '6关于各部门做好2021年工作计划的通知',
          content: '关于各部门做好2021年工作计划的通知lalallalllllllllllllllll55555555kkkkkkkkk啦啦啦啦啦啦啦啦啦啦啦呜呜呜呜呜呜哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈呜呜呜uwuwuwuwuuwuwuwuwuuw',
          date: '2021-03-02 01:00:21'
        },
        {
          title: '7关于各部门做好2021年工作计划的通知',
          content: '关于各部门做好2021年工作计划的通知lalallalllllllllllllllll55555555kkkkkkkkk啦啦啦啦啦啦啦啦啦啦啦呜呜呜呜呜呜哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈呜呜呜uwuwuwuwuuwuwuwuwuuw',
          date: '2021-03-02 01:00:21'
        },
        {
          title: '8关于各部门做好2021年工作计划的通知',
          content: '关于各部门做好2021年工作计划的通知lalallalllllllllllllllll55555555kkkkkkkkk啦啦啦啦啦啦啦啦啦啦啦呜呜呜呜呜呜哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈呜呜呜uwuwuwuwuuwuwuwuwuuw',
          date: '2021-03-02 01:00:21'
        },
        {
          title: '9关于各部门做好2021年工作计划的通知',
          content: '关于各部门做好2021年工作计划的通知lalallalllllllllllllllll55555555kkkkkkkkk啦啦啦啦啦啦啦啦啦啦啦呜呜呜呜呜呜哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈呜呜呜uwuwuwuwuuwuwuwuwuuw',
          date: '2021-03-02 01:00:21'
        },
        {
          title: '10关于各部门做好2021年工作计划的通知',
          content: '关于各部门做好2021年工作计划的通知lalallalllllllllllllllll55555555kkkkkkkkk啦啦啦啦啦啦啦啦啦啦啦呜呜呜呜呜呜哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈呜呜呜uwuwuwuwuuwuwuwuwuuw',
          date: '2021-03-02 01:00:21'
        },
        {
          title: '11关于各部门做好2021年工作计划的通知',
          content: '关于各部门做好2021年工作计划的通知lalallalllllllllllllllll55555555kkkkkkkkk啦啦啦啦啦啦啦啦啦啦啦呜呜呜呜呜呜哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈呜呜呜uwuwuwuwuuwuwuwuwuuw',
          date: '2021-03-02 01:00:21'
        },
      ],
      currentList: [],
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    queryList (pageNo, pageSize) {
      this.$request.queryList(pageNo, pageSize, this.contentList, (data) => {
        this.$refs.paging.complete(data);
      })
    },
  },
}
</script>
<style lang="scss">
.home-notice-list {
  .card-box {
    margin: 20rpx !important;
  }
  .u-border:after {
    border-width: 0px !important;
  }
  /deep/.u-card__body {
    padding: 20rpx 20rpx 10rpx 0 !important;
  }
}
</style>

<style lang="scss" scoped>
.home-container {
  .home-notice {
    width: 100%;
    padding: 20rpx 0;
  }
  .home-notice-list {
    .home-notice-body {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      .home-notice-top-left {
        margin-top: 10rpx;
        .notice {
          background-color: $default-color;
          color: #fff;
          padding: 5rpx 15rpx 5rpx 10rpx;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          font-size: 16rpx;
        }
      }
      .home-notice-top-right {
        padding-left: 15rpx;
        flex: 1;
        min-width: 0;
        .title-top {
          display: flex;
          align-items: center;
          margin-top: -5rpx;
          .title {
            width: 95%;
            font-weight: 700;
            color: #000;
            font-size: 36rpx;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .point {
            width: 10rpx;
            height: 10rpx;
            background-color: $default-color;
            border-radius: 50%;
            margin-left: auto;
          }
        }
        .content-middle {
          margin-top: 10rpx;
          font-size: 18rpx;
          color: #b5b5b7;
          font-weight: 700;
          display: -webkit-box;
          max-height: 80rpx;
          text-align: justify;
          color: #838791;
          letter-spacing: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-all;
        }
        .date-bottom {
          font-size: 16rpx;
          color: #b4b5b8;
          margin-top: 15rpx;
        }
      }
    }
  }
}
</style>
