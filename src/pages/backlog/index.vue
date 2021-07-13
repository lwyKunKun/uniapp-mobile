<!-- 待办 -->
<template>
  <view class="backlog-container bgc">
    <u-tabs
      :list="tabList"
      :is-scroll="false"
      :current="current"
      @change="tabsChange"
      :bar-width="barWidth"
      active-color="#1CBBB4"
      inactive-color="#6D6D6F"
    ></u-tabs>
    <view class="list-container">
      <scrollList
        :refresher="true"
        @onRefresh="refresh"
        @onInfinite="infiniteScroll"
        :infiniting="true"
        :loadMoreState="loadMoreState"
      >
        <u-card
          v-for="(item, index) in currentList.list"
          :key="index"
          :title="item.user"
          :sub-title="item.state"
          sub-title-color="#1CBBB4"
          :head-border-bottom="true"
          border-radius="24"
        >
          <view class="" slot="body">
            <view class="content">{{ item.content }}</view>
            <view class="time">{{ item.time }}</view>
          </view>
        </u-card>
      </scrollList>
    </view>

    <bottomTabbar></bottomTabbar>
  </view>
</template>

<script>
import bottomTabbar from '../../components/bottom-tabbar/index.vue'
import scrollList from '../../components/scroll-list-refresh'
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
      pendingList: {
        list: [{
          user: '1雷婉悦',
          state: '已审核',
          time: '2021-03-02 01:14:52',
          content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
        },
        {
          user: '2雷婉悦',
          state: '已审核',
          time: '2021-03-02 01:14:52',
          content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
        },
        {
          user: '2雷婉悦',
          state: '已审核',
          time: '2021-03-02 01:14:52',
          content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
        }],
        total: 3,
        current: 1,
        pages: 10

      },
      processedList: {},
      current: 0,
      barWidth: 100,
      title: '雷婉悦',
      subTitle: '2020-05-15',
      currentList: {},
      loadMoreState: 'more'

    };
  },

  mounted () {
    this.currentList = this.pendingList
    this.lwy();
  },
  methods: {
    tabsChange (index) {
      this.current = index;
      this.current == 0 ? this.currentList = this.pendingList : this.currentList = this.processedList
      this.lwy();
    },
    refresh ({ complete }) {
      setTimeout(() => {
        complete(); // 结束下拉刷新
      }, 1000);
    },
    infiniteScroll ({ setStatus }) {
      console.log('鼠标滚动了吗？');
      if (this.currentList.current * this.currentList.pages === this.contentList.total) {
        setStatus('noMore', true);
      } else {
        this.getNewList(setStatus)
      }
    },
    getNewList (callback) {//上拉获取更多数据
      setTimeout(() => {
        callback('loading', false)
        this.contentList = {
          total: 20,
          current: 2,
          pages: 10

        }
      }, 1000);
    },
    lwy () {
      if (this.currentList.total < this.currentList.pages) {
        this.loadMoreState = 'noMore'
      }
    }

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