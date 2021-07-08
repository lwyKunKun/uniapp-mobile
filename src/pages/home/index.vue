<template>
  <view class="home-container bgc">
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
    <!-- <view class="list-container">
      <scroll-view
        class="scrool-more"
        style="height: 98%"
        scroll-y="true"
        scroll-with-animation="true"
        refresher-enabled="true"
        :refresher-triggered="triggered"
        :refresher-threshold="100"
        @refresherpulling="onPulling"
        @refresherrefresh="onRefresh"
        @refresherrestore="onRestore"
        @refresherabort="onAbort"
      >
        <view class="home-notice-list">
          <u-card
            :show-head="false"
            class="card-box"
            v-for="(item, index) in contentList"
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
      </scroll-view>
    </view> -->
    <view class="list-container">
      <page-content
        :refresher="true"
        @onRefresh="refresh"
        @on-infinite="infiniteScroll"
        :infiniting="true"
      >
        <view class="home-notice-list">
          <u-card
            :show-head="false"
            class="card-box"
            v-for="(item, index) in contentList"
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
      </page-content>
    </view>
    <view class="home-bottom">
      <u-tabbar v-model="current" :list="list" :mid-button="true"></u-tabbar>
    </view>
  </view>
</template>

<script>
import pageContent from '../../components/scroll-list-refresh/index.vue'
export default {
  components: {
    pageContent

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
          title: '关于各部门做好2021年工作计划的通知',
          content: '关于各部门做好2021年工作计划的通知lalallalllllllllllllllll55555555kkkkkkkkk啦啦啦啦啦啦啦啦啦啦啦呜呜呜呜呜呜哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈呜呜呜uwuwuwuwuuwuwuwuwuuw',
          date: '2021-03-02 01:00:21'
        },
        {
          title: '明天下午三点开会',
          content: '明天下午三点开会,请大家准时到会议室参加!',
          date: '2021-07-07 05:30:21'
        },
        {
          title: '明天下午三点开会',
          content: '明天下午三点开会,请大家准时到会议室参加!',
          date: '2021-07-07 05:30:21'
        },
        {
          title: '明天下午三点开会',
          content: '明天下午三点开会,请大家准时到会议室参加!',
          date: '2021-07-07 05:30:21'
        },
        {
          title: '明天下午三点开会',
          content: '明天下午三点开会,请大家准时到会议室参加!',
          date: '2021-07-07 05:30:21'
        },
        {
          title: '关于各部门做好2021年工作计划的通知',
          content: '关于各部门做好2021年工作计划的通知lalallalllllllllllllllll55555555kkkkkkkkk啦啦啦啦啦啦啦啦啦啦啦呜呜呜呜呜呜哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈呜呜呜uwuwuwuwuuwuwuwuwuuw',
          date: '2021-03-02 01:00:21'
        },
      ],
      list: [
        {
          iconPath: "home",
          selectedIconPath: "home-fill",
          text: '首页',
          // count: 2,
          // isDot: true,
          customIcon: false,
        },
        {
          iconPath: "photo",
          selectedIconPath: "photo-fill",
          text: '放映厅',
          customIcon: false,
        },
        {
          iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
          selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
          text: '发布',
          midButton: true,
          customIcon: false,
        },
        {
          iconPath: "play-right",
          selectedIconPath: "play-right-fill",
          text: '直播',
          customIcon: false,
        },
        {
          iconPath: "account",
          selectedIconPath: "account-fill",
          text: '我的',
          count: 23,
          isDot: false,
          customIcon: false,
        },
      ],
      current: 0,
      triggered: false,//设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发

    }
  },
  onLoad () {
    this._freshing = false;
    setTimeout(() => {
      this.triggered = true;
    }, 1000)
  },
  mounted () {
  },
  methods: {
    refresh ({ complete }) {
      setTimeout(() => {
        complete(); // 结束下拉刷新
      }, 1000);
    },
    infiniteScroll ({ setStatus }) {
      setTimeout(() => {
        console.log(setStatus);
        setStatus('noMore', this.contentList.length > 6 ? true : false);
      }, 1000);
    },
  }
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
  display: flex;
  flex-direction: column;

  .home-notice {
    width: 100%;
    padding: 20rpx 0;
  }
  .list-container {
    flex: 1;
    position: relative;
    .scrool-more {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
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
