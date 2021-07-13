<template>
  <view class="uni-load-more" @click="onClick">
    <text class="uni-load-more__text" :style="{ color: color }">{{
      status === 'more'
        ? contentText.contentdown
        : status === 'loading'
        ? contentText.contentrefresh
        : contentText.contentnomore
    }}</text>
  </view>
</template>

<script>
const platform = uni.getSystemInfoSync().platform

/**
 * LoadMore 加载更多
 * @description 用于列表中，做滚动加载使用，展示 loading 的各种状态
 * @tutorial https://ext.dcloud.net.cn/plugin?id=29
 * @property {String} status = [more|loading|noMore] loading 的状态
 * 	@value more loading前
 * 	@value loading loading中
 * 	@value noMore 没有更多了
 * @property {Object} contentText 各状态文字说明，值为：{contentdown: "上拉显示更多",contentrefresh: "正在加载...",contentnomore: "没有更多数据了"}
 * @event {Function} clickLoadMore 点击加载更多时触发
 */
export default {
  name: 'loadMore',
  props: {
    status: {
      // 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
      type: String,
      default: 'more'
    },
    color: {
      type: String,
      default: '#777777'
    },
    contentText: {
      type: Object,
      default () {
        return {
          contentdown: '上拉显示更多',
          contentrefresh: '正在加载...',
          contentnomore: '没有更多数据了'
        }
      }
    }
  },
  data () {
    return {
      platform: platform
    }
  },
  methods: {
    onClick () {
      //   this.$emit('clickLoadMore', {
      //     detail: {
      //       status: this.status,
      //     }
      //   })
      console.log('点击事件');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/uni.scss';

.uni-load-more {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  height: 60px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.uni-load-more__text {
  font-size: 15px;
}
</style>
