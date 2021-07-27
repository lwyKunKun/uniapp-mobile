<!-- 待办 -->
<template>
  <view class="backlog-container bgc">
    <z-paging
      ref="paging"
      v-model="currentList"
      @query="queryList"
      auto-show-back-to-top
      refresher-threshold="100rpx"
      :fixed="false"
    >
      <!-- 需要固定在顶部不滚动的view放在slot="top"的view中，如果需要跟着滚动，则不要设置slot="top" -->
      <view slot="top">
        <u-tabs
          :list="tabList"
          :is-scroll="false"
          :current="tabIndex"
          @change="tabsChange"
          :bar-width="barWidth"
          active-color="#1CBBB4"
          inactive-color="#6D6D6F"
        ></u-tabs>
      </view>
      <!-- 自定义没有更多数据view -->
      <custom-nomore slot="loadingMoreNoMore"></custom-nomore>
      <!-- 设置自己的空数据组件 -->
      <!-- <empty-view slot="empty"></empty-view> -->

      <!-- 如果希望其他view跟着页面滚动，可以放在z-paging标签内 -->
      <!-- list数据，建议像下方这样在item外层套一个view，而非直接for循环item，因为slot插入有数量限制 -->
      <view class="list">
        <u-card
          v-for="(item, index) in currentList"
          :key="index"
          :title="item.user"
          :sub-title="item.state"
          sub-title-color="#1CBBB4"
          :head-border-bottom="true"
          border-radius="24"
          @click="gotoDetail(item)"
        >
          <view class="" slot="body">
            <view class="content">{{ item.content }}</view>
            <view class="time">{{ item.time }}</view>
          </view>
        </u-card>
      </view>
      <view slot="bottom">
        <!-- 这里接收页面传进来的slot，这样相当于将页面传进来的slot传给z-paging的slot="bottom"了 -->
        <bottomTabbar></bottomTabbar>
      </view>
    </z-paging>
  </view>
</template>

<script>
import bottomTabbar from '@/components/bottom-tabbar/index.vue'
import scrollList from '@/components/scroll-list-refresh'
export default {
  components: {
    bottomTabbar,
    scrollList
  },
  data () {
    return {
      tabList: [
        {
          name: '待处理'
        },
        {
          name: '已处理'
        },
      ],
      pendingList: [
        {
          id: 1,
          user: '1雷婉悦',
          state: '已审核',
          time: '2021-03-02 01:14:52',
          content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
        },
        {
          id: 2,
          user: '2雷婉悦',
          state: '已审核',
          time: '2021-03-02 01:14:52',
          content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
        },
        {
          id: 3,
          user: '3雷婉悦',
          state: '已审核',
          time: '2021-03-02 01:14:52',
          content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
        },
        {
          id: 4,
          user: '4雷婉悦',
          state: '已审核',
          time: '2021-03-02 01:14:52',
          content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
        },
        {
          id: 5,
          user: '5雷婉悦',
          state: '已审核',
          time: '2021-03-02 01:14:52',
          content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
        },
        {
          id: 6,
          user: '6雷婉悦',
          state: '已审核',
          time: '2021-03-02 01:14:52',
          content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
        },
        {
          id: 7,
          user: '7雷婉悦',
          state: '已审核',
          time: '2021-03-02 01:14:52',
          content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
        },
        {
          id: 8,
          user: '8雷婉悦',
          state: '已审核',
          time: '2021-03-02 01:14:52',
          content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
        },
        {
          id: 9,
          user: '9雷婉悦',
          state: '已审核',
          time: '2021-03-02 01:14:52',
          content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
        },
        {
          id: 10,
          user: '10雷婉悦',
          state: '已审核',
          time: '2021-03-02 01:14:52',
          content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
        },
        {
          id: 11,
          user: '11雷婉悦',
          state: '已审核',
          time: '2021-03-02 01:14:52',
          content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
        },
        {
          id: 12,
          user: '12雷婉悦',
          state: '已审核',
          time: '2021-03-02 01:14:52',
          content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
        },
      ],//待处理数据
      processedList: [],//已处理数据
      tabIndex: 0,//tabs条
      barWidth: 100,
      currentList: [],//当前数据
    };
  },
  created () {
  },

  mounted () {

  },
  methods: {
    tabsChange (index) {
      this.tabIndex = index;
      //当切换tab或搜索时请调用组件的reload方法，请勿直接调用：queryList方法！！
      this.$refs.paging.reload();
    },
    queryList (pageNo, pageSize) {
      this.$request.queryList(pageNo, pageSize, this.tabIndex, this.tabIndex == 0 ? this.pendingList : this.processedList, (data) => {
        this.$refs.paging.complete(data);
      })
    },
    gotoDetail (item) {//点击跳转详情
      console.log(item);
      uni.navigateTo({
        url: '/pages/backlog/modules/details?item=' + encodeURIComponent(JSON.stringify(item))
      });
    },



  }
}

</script>
<style lang="scss">
.backlog-container {
  .u-card {
    /deep/.u-card__head {
      padding: 30rpx !important;
      .u-row-between {
        display: flex !important;
        border-bottom: 2rpx solid #eee;
        .u-card__head--right {
          margin-left: auto !important;
        }
      }
    }
    /deep/.u-card__body {
      padding: 0 30rpx 30rpx 30rpx !important;
    }
  }
}
</style>
<style lang='scss' scoped>
.backlog-container {
  display: flex;
  flex-direction: column;
  .list-container {
    position: relative;
    flex: 1;
  }
}

.content {
  display: -webkit-box;
  max-height: 80rpx;
  text-align: justify;
  letter-spacing: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
.time {
  color: #a7a8aa;
  font-size: 22rpx;
}
</style>