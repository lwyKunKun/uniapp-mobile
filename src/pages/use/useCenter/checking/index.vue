<!-- 考勤班次 -->
<template>
  <view>
    <uni-calendar
      :insert="true"
      :lunar="true"
      @change="change"
      :selected="selected"
    ></uni-calendar>
  </view>
</template>

<script>
export default {
  components: {},

  data () {
    return {
      selected: [
        {
          date: '2021-06-21', info: '考勤',
        },
        {
          date: '2021-07-21', info: '考勤',
        }
      ]
    };
  },

  mounted () { },

  computed: {},

  methods: {
    change () {
      console.log('移动');

    }
  }
}

</script>
<style lang='scss' scoped>
</style>