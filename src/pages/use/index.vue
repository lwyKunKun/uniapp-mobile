<!-- 应用 -->
<template>
  <view class="use-container scroll-father">
    <view class="scroll-area">
      <useListTemplate :data="data"></useListTemplate>
    </view>
    <bottomTabbar></bottomTabbar>
  </view>
</template>

<script>
import useListTemplate from '@/components/useList/index.vue'
import bottomTabbar from '@/components/bottom-tabbar/index.vue'
export default {
  components: {
    bottomTabbar,
    useListTemplate
  },

  data () {
    return {
      data: [
        {
          title: '审批管理',
          icon: [
            {
              appId: 1,
              appIcon: "leasingcloud_baoxiaoshenhe",
              appName: "报销申请",
              appLink: ""
            },
            {
              appId: 2,
              appIcon: "baoxiu",
              appName: "报修申请",
              appLink: ""
            },
            {
              appId: 3,
              appIcon: "ziyuan207",
              appName: "出差申请",
              appLink: ""
            },
            {
              appId: 4,
              appIcon: "jiabanshixiang",
              appName: "加班申请",
              appLink: ""
            },
            {
              appId: 5,
              appIcon: "jiedaiguanli",
              appName: "接待申请",
              appLink: ""
            },
            {
              appId: 6,
              appIcon: "lingyongshenqing",
              appName: "领用申请",
              appLink: ""
            },
            {
              appId: 7,
              appIcon: "qingjia",
              appName: "请假申请",
              appLink: ""
            },
            {
              appId: 8,
              appIcon: "ziyuan",
              appName: "申购申请",
              appLink: ""
            },
            {
              appId: 9,
              appIcon: "yonggongguanli",
              appName: "用工申请",
              appLink: ""
            },
            {
              appId: 9,
              appIcon: "yoncheguanli",
              appName: "用车申请",
              appLink: ""
            },
          ],

        },
        {
          title: '日常管理',
          icon: [
            {
              appId: 10,
              appIcon: "tubiaozhizuomoban-38",
              appName: "车辆管理",
              appLink: ""
            },
            {
              appId: 11,
              appIcon: "danganguanli",
              appName: "档案管理",
              appLink: ""
            },
            {
              appId: 12,
              appIcon: "tubiaozhizuomoban-79",
              appName: "合同管理",
              appLink: ""
            },
            {
              appId: 13,
              appIcon: "caigou",
              appName: "后勤采购",
              appLink: ""
            },
            {
              appId: 14,
              appIcon: "wukajiucan",
              appName: "就餐统计",
              appLink: ""
            },
            {
              appId: 15,
              appIcon: "kaoqin",
              appName: "考勤管理",
              appLink: ""
            },
            {
              appId: 16,
              appIcon: "tongxunlu",
              appName: "通讯录",
              appLink: ""
            },
            {
              appId: 17,
              appIcon: "xungeng",
              appName: "巡更巡检",
              appLink: ""
            },
          ],

        },
      ]

    };
  },

  mounted () { },

  computed: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.use-container {
  width: 100%;
  height: 100vh;
}
</style>