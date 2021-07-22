<!-- 考勤班次 -->
<template>
  <view>
    <calendar
      :mark="mark"
      @monthChange="monthChange"
      :range="range"
      :canDrag="true"
    >
    </calendar>
  </view>
</template>

<script>
import calendar from '@/components/calendar/index.vue'
export default {
  components: {
    calendar
  },

  data () {
    return {
      mark: [
        {
          time: '2021-7-21',
          text: '考勤',
          markPoint: true,
          markTextColor: 'red',
          isIcon: true,
          icon: 'ziyuan',
          pointTextColor: 'red'
        },
        {
          time: '2021-7-23',
          text: '考勤',
          markPoint: true,
          markTextColor: 'red',
          pointTextColor: 'black'
        },
        {
          time: '2021-7-24',
          text: '考勤',
          markPoint: true,
          markTextColor: 'red',
          pointText: 'la',
          pointTextColor: 'pink'
        }
      ],
      range: {
        rangeStart: undefined, //设置标记范围开始，yyyyMM-dd
        rangeEnd: undefined //设置标记范围结束，yyyyMM-dd
      },
    };
  },

  mounted () { },

  computed: {},

  methods: {
    monthChange (data) {//月份改变
      console.log(data, 'data')
    },
  }
}

</script>
<style lang='scss' scoped>
</style>