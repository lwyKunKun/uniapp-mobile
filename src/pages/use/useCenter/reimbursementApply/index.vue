<!-- 报销列表 -->
<template>
  <view class="reimbursementList bgc scroll-father">
    <z-paging
      ref="paging"
      v-model="currentList"
      @query="queryList"
      auto-show-back-to-top
      refresher-threshold="100rpx"
      :fixed="false"
    >
      <view class="list">
        <u-card
          :show-head="false"
          class="card-box"
          v-for="(item, index) in currentList"
          :key="index"
        >
          <view class="" slot="body">
            <view class="header">
              <view>{{ item.costType }} - </view>
              <view>{{ item.status }}</view>
            </view>
            <view class="content">{{ item.applyReason }}</view>
            <view class="footer">
              <text class="user">{{ item.user }}</text>
              <text>{{ item.date }}</text>
            </view>
          </view>
        </u-card>
      </view>
    </z-paging>
    <bottomFixedBtn
      backgroundColor="#1CBBB4"
      @clickBtn="clickAddBtn"
    ></bottomFixedBtn>
  </view>
</template>

<script>
import bottomFixedBtn from '@/components/bottomFixedBtn/index'
export default {
  components: {
    bottomFixedBtn
  },

  data () {
    return {
      contentList: [
        {
          costType: '1招待费',
          status: '申请',
          applyReason: '差旅费报销申请,报销金额:1000元,事由:出差住宿乌拉拉啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦',
          user: '雷婉悦',
          date: '2021-03-01 15:31:50'
        },
        {
          costType: '2办公费',
          status: '申请',
          applyReason: '办公费报销申请,报销金额:1000元,事由:出差住宿乌拉拉啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦',
          user: '雷婉悦',
          date: '2021-03-01 15:31:50'
        },
        {
          costType: '3差旅费',
          status: '申请',
          applyReason: '差旅费报销申请,报销金额:1000元,事由:出差住宿乌拉拉啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦',
          user: '雷婉悦',
          date: '2021-03-01 15:31:50'
        },
        {
          costType: '4水电费',
          status: '申请',
          applyReason: '水电费报销申请,报销金额:1000元,事由:出差住宿乌拉拉啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦',
          user: '雷婉悦',
          date: '2021-03-01 15:31:50'
        },
        {
          costType: '5燃油费',
          status: '申请',
          applyReason: '燃油费报销申请,报销金额:1000元,事由:出差住宿乌拉拉啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦',
          user: '雷婉悦',
          date: '2021-03-01 15:31:50'
        },
        {
          costType: '6维修费',
          status: '申请',
          applyReason: '维修费报销申请,报销金额:1000元,事由:出差住宿乌拉拉啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦',
          user: '雷婉悦',
          date: '2021-03-01 15:31:50'
        },

      ],
      currentList: [],
    };
  },
  created () {
  },

  mounted () { },

  computed: {},

  methods: {
    queryList (pageNo, pageSize) {
      this.$request.queryList(pageNo, pageSize, this.contentList, (data) => {
        this.$refs.paging.complete(data);
      })
    },
    clickAddBtn () {//点击添加按钮
      uni.navigateTo({
        url: '/pages/use/useCenter/reimbursementApply/modules/apply'
      });

    },
  }
}

</script>
<style lang='scss' scoped>
.reimbursementList {
  .list {
    height: auto;
    .header {
      display: flex;
      font-weight: 700;
      color: #000;
      font-size: 30rpx;
    }
    .content {
      font-size: 24rpx;
      margin: 15rpx 0 30rpx;
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
    .footer {
      color: #939497;
      .user {
        margin-right: 10rpx;
      }
    }
  }
}
</style>