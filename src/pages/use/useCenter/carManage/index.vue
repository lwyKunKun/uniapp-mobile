<!-- 选择车辆列表 -->
<template>
  <view class="selectCarList bgc scroll-father">
    <view class="scroll-area">
      <scrollList
        :refresher="true"
        @onRefresh="refresh"
        @onInfinite="infiniteScroll"
        :infiniting="true"
        :loadMoreState="loadMoreState"
      >
        <u-card v-for="(item, index) in contentList.list" :key="item.id">
          <view class="" slot="body">
            <u-swipe-action
              :index="index"
              @click="click"
              @open="open"
              :options="options"
              :show="item.show"
            >
              <view class="item">
                <image mode="aspectFill" :src="item.images" />
                <!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
                <view class="title-wrap">
                  <view class="car-sign">{{ item.carSign }}</view>
                  <view>
                    <text>行驶证:</text>
                    <text>{{ item.drivingLicense }}</text>
                  </view>
                  <view class="car-info">
                    <view>
                      <text>车牌号:</text> <text>{{ item.carNum }}</text></view
                    >
                    <view class="range"
                      ><text>量程数:</text>
                      <text class="info-right">{{ item.range }}</text></view
                    >
                  </view>
                </view>
              </view>
            </u-swipe-action>
          </view>
        </u-card>
      </scrollList>
    </view>
  </view>
</template>

<script>
import scrollList from '@/components/scroll-list-refresh'
export default {
  components: {
    scrollList

  },

  data () {
    return {
      loadMoreState: 'more',
      contentList: {
        list: [
          {
            id: 0,
            carSign: '轿车-宝马(进口)-宝马7系 [空闲]',
            carName: '宝马7系',
            drivingLicense: '54654645546',
            carNum: '5343543',
            range: "10000KM",
            images: 'https://cdn.uviewui.com/uview/common/logo.png',
            show: false
          },
          {
            id: 1,
            carSign: '越野车-一汽-大众奥迪-奥迪Q5L [空闲]',
            carName: '奥迪Q5L',
            drivingLicense: '54654645546',
            carNum: '5343543',
            range: "10000KM",
            images: 'https://cdn.uviewui.com/uview/common/logo.png',
            show: false
          },
          {
            id: 2,
            carSign: '越野车-普拉多4.0 [空闲]',
            carName: '普拉多4.0',
            drivingLicense: '54654645546',
            carNum: '5343543',
            range: "100020KM",
            images: 'https://cdn.uviewui.com/uview/common/logo.png',
            show: false,
          }
        ],
        total: 3,
        current: 1,
        pages: 10
      },
      options: [
        {
          text: '选择',
          style: {
            backgroundColor: '#C7C6CD'
          }
        },
      ]
    };
  },
  created () {
    this.judgeStatus();

  },

  mounted () {

  },

  computed: {},

  methods: {
    click (index) {
      this.contentList.list.forEach(item => {
        if (item.id == index) {
          uni.navigateTo({
            url: `/pages/use/useCenter/carManage/modules/useCarApply?name=${item.carName}`
          });
        }
        item.show = false
      })

    },
    open (index) {
      this.contentList.list[index].show = true;
      this.contentList.list.map((val, idx) => {
        if (index != idx) this.contentList.list[idx].show = false;
      })

    },
    refresh ({ complete }) {
      setTimeout(() => {
        complete(); // 结束下拉刷新
      }, 1000);
    },
    infiniteScroll ({ setStatus }) {
      //   if (this.contentList.current * this.contentList.pages >= this.contentList.total) {
      //     setStatus('noMore', true);
      //   } else {
      //     this.getNewList(setStatus)
      //   }
    },
    judgeStatus () {//判断一开始的状态
      if (this.contentList.total < this.contentList.pages) {
        this.loadMoreState = 'noMore'
      }
    }
  }
}

</script>
<style lang="scss">
.selectCarList {
  /deep/.u-card__head {
    padding: 0 !important;
  }
  /deep/.u-card__body {
    padding: 0 !important;
  }
  /deep/.u-swipe-del {
    width: 140rpx !important;
    border-top-right-radius: 16rpx !important;
    border-bottom-right-radius: 16rpx !important;
  }
}
</style>

<style lang='scss' scoped>
.selectCarList {
  .item {
    display: flex;
    padding: 20rpx;

    .title-wrap {
      box-sizing: border-box;
      flex: 1;
      padding-right: 30rpx;
    }
  }
  image {
    width: 150rpx;
    flex: 0 0 150rpx;
    height: 150rpx;
    margin-right: 20rpx;
    border-radius: 12rpx;
  }
}

.car-info {
  display: flex;
  font-size: 26rpx;
  color: #babbbc;
  margin-top: 20rpx;
  .range {
    flex: 1;
    margin-left: auto;
    text-align: right;
  }
}
</style>