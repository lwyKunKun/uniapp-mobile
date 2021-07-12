<template>
  <scroll-view
    class="scrool-more"
    scroll-y="true"
    scroll-with-animation="true"
    :refresher-enabled="refresher"
    :refresher-threshold="threshold"
    :refresher-triggered="triggered"
    :scroll-anchoring="anchoring"
    @refresherrefresh="refreshing"
    @scrolltolower="infinite"
  >
    <slot></slot>
    <load-more :status="loadMoreStatus" v-if="infiniting"></load-more>
  </scroll-view>
</template>

<script>
import loadMore from '../load-more/index'
export default {
  name: "PageContent",
  components: {
    loadMore
  },
  props: {
    refresher: {//是否开启自定义下拉刷新,默认不开启
      type: Boolean,
      default: false,
    },
    threshold: {//设置自定义下拉刷新阈值
      type: Number,
      default: 100,
    },
    anchoring: {//控制滚动位置不随内容变化而抖动，仅在 iOS 下生效
      type: Boolean,
      default: true,
    },
    infiniting: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      isRefreshing: false, // 是否在刷新中
      isInfiniting: this.infiniting, // 是否在加载中
      infiniteDisabled: false, // 是否禁用上拉加载
      triggered: true,//设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发
      loadMoreStatus: 'more', // 上拉加载的状态样式
    };
  },
  methods: {
    refreshing () {
      if (this.isRefreshing) return;
      this.isRefreshing = true
      this.triggered = true;
      this.isInfiniting = false; // 若下拉刷新和上拉加载同时存在，则每次刷新需要重置上拉加载状态
      this.$emit('onRefresh', { complete: this.refresherComplete });
    },
    refresherComplete () {
      this.triggered = false;
      this.isRefreshing = false;
      this.isInfiniting = true;
      this.infiniteDisabled = false;
    },
    infinite () {//距底部多远时，触发 scrolltolower 事件
      if (this.isInfiniting) {
        this.loadMoreStatus = this.infiniteDisabled ? 'noMore' : 'loading';
        this.$emit('onInfinite', {
          setStatus: (status, disabled) => {
            this.loadMoreStatus = status;
            this.infiniteDisabled = disabled;
          }
        });
      }
    },
    // clickLoadMore ({ detail }) {
    //   this.$emit('getNewList')
    // }
  }
}
</script>

<style lang="scss" scoped>
.scrool-more {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
