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
        :isNotEmpty="isNotEmpty"
      >
        <u-card
          v-for="(item, index) in currentList.list"
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
        list: [
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
            user: '2雷婉悦',
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
          },],
        total: 21,
        current: 1,
        pages: 10
      },//待处理数据
      processedList: {},//已处理数据
      current: 0,
      barWidth: 100,
      currentList: {},//当前数据
      loadMoreState: 'more',
      isNotEmpty: true,//数据是否不为空
      newPendingList: [],
    };
  },
  created () {
    this.currentList = this.pendingList
    this.newPendingList = this.currentList.list
    this.currentList.total > 0 && this.currentList.list.length > 0 ? this.isNotEmpty = true : this.isNotEmpty = false
    this.judgeStatus();
  },

  mounted () {

  },
  methods: {
    tabsChange (index) {
      this.current = index;
      if (this.current == 0) {
        this.currentList = {
          ...this.pendingList,
          list: this.newPendingList
        }
      } else {
        this.currentList = this.processedList
      }
      this.currentList.total > 0 && this.currentList.list.length > 0 ? this.isNotEmpty = true : this.isNotEmpty = false
      this.judgeStatus();
    },
    refresh ({ complete }) {
      setTimeout(() => {
        complete(); // 结束下拉刷新
      }, 1000);
    },
    infiniteScroll ({ setStatus }) {
      if (this.currentList.current * this.currentList.pages >= this.currentList.total) {
        setStatus('noMore', true);
      } else {
        this.getNewList(setStatus)
      }
    },
    getNewList (callback) {//上拉获取更多数据
      callback('loading', false)
      setTimeout(() => {
        if (this.current == 0) {//待处理
          this.pendingList = {
            list: [
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
              {
                id: 13,
                user: '13雷婉悦',
                state: '已审核',
                time: '2021-03-02 01:14:52',
                content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
              },
              {
                id: 14,
                user: '14雷婉悦',
                state: '已审核',
                time: '2021-03-02 01:14:52',
                content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
              },
              {
                id: 15,
                user: '15雷婉悦',
                state: '已审核',
                time: '2021-03-02 01:14:52',
                content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
              },
              {
                id: 16,
                user: '16雷婉悦',
                state: '已审核',
                time: '2021-03-02 01:14:52',
                content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
              },
              {
                id: 17,
                user: '17雷婉悦',
                state: '已审核',
                time: '2021-03-02 01:14:52',
                content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
              },
              {
                id: 18,
                user: '18雷婉悦',
                state: '已审核',
                time: '2021-03-02 01:14:52',
                content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
              },
              {
                id: 19,
                user: '19雷婉悦',
                state: '已审核',
                time: '2021-03-02 01:14:52',
                content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
              },
              {
                id: 20,
                user: '20雷婉悦',
                state: '已审核',
                time: '2021-03-02 01:14:52',
                content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
              },
            ],
            total: 21,
            current: 2,
            pages: 10
          },//待处理数据
            this.newPendingList.push(...this.pendingList.list)
          this.currentList = {
            ...this.pendingList,
            list: this.newPendingList
          }
          setTimeout(() => {
            this.pendingList = {
              list: [
                {
                  id: 21,
                  user: '21雷婉悦',
                  state: '已审核',
                  time: '2021-03-02 01:14:52',
                  content: '112222222222221啦啦啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿aaaaaaaa'
                },
              ],
              total: 21,
              current: 3,
              pages: 10
            },//待处理数据
              this.newPendingList.push(...this.pendingList.list)
            this.currentList = {
              ...this.pendingList,
              list: this.newPendingList
            }


          }, 1000)

        } else {//已处理

        }
      }, 1000);
    },
    judgeStatus () {//判断一开始的状态
      if (this.currentList.total < this.currentList.pages) {
        this.loadMoreState = 'noMore'
      }
    },
    gotoDetail (item) {//点击跳转详情
      console.log(item);
      uni.navigateTo({
        url: '/pages/backlog/modules/details?item=' + encodeURIComponent(JSON.stringify(item))
      });
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