<!-- 用车申请 -->
<template>
  <view class="bgc useCarApply">
    <applyTemplate
      :form="form"
      :formOption="formOption"
      @openDate="openDate"
      @onChoose="onChoose"
      @onRemove="onRemove"
    ></applyTemplate>
  </view>
</template>

<script>
import applyTemplate from '@/components/applyTemplate/index'
export default {
  components: {
    applyTemplate
  },

  data () {
    return {
      form: {
        carName: '',//申请车辆
        useCarTime: '',//用车时间
        backTime: '',//返回时间
        destination: '',//目的地
        peer: '',//同行人员
        useCarReason: '',//用车原因
        warn: '',//提醒方式
      },
      formOption: [
        {
          label: '申请车辆',
          type: 'text',
          prop: 'carName',
          model: 'carName'
        },
        {
          label: '用车时间',
          type: 'date',
          prop: 'useCarTime',
          model: 'useCarTime',
          mode: 'date',
          change: 'openDate'
        },
        {
          label: '返回时间',
          type: 'date',
          prop: 'backTime',
          model: 'backTime',
          mode: 'date',
          change: 'openDate'
        },
        {
          label: '目的地',
          type: 'text',
          prop: 'destination',
          model: 'destination',
          placeholder: '请输入目的地',

        },
        {
          label: '同行人员',
          type: 'text',
          prop: 'peer',
          model: 'peer',
          placeholder: '请输入同行人员，多个用逗号隔开',
        },
        {
          label: '用车原因',
          type: 'textarea',
          prop: 'useCarReason',
          model: 'useCarReason',
          mode: 'textarea',
          placeholder: '请详细描述您要用车的原因...',
        },
        {
          label: '提醒方式',
          type: 'radio',
          prop: 'warn',
          model: 'warn',
          mode: 'radio',
          radioList: [
            {
              name: '短信提醒',
              key: 1,
              disabled: false
            },
            {
              name: '消息提醒',
              key: 2,
              disabled: false
            },
            {
              name: '不提醒',
              key: 3,
              disabled: false
            }
          ]
        },
        {
          label: '附件(请上传附件图片)',
          type: 'accessory',
          prop: 'warn',
          model: 'warn',
          onChoose: 'onChoose',
          num: 0,
          onRemove: 'onRemove'
        },
      ]
    };
  },
  onLoad (option) {
  },

  mounted () { },

  computed: {},

  methods: {
    openDate (e, model) {//打开时间选择器
      this.formOption.forEach(item => {
        if (item.model == model) {
          this.form[model] = e
        }
      })
    },
    onChoose (data) {//选择图片
      this.formOption.forEach(item => {
        if (item['type'] == 'accessory') {
          item.num = data.length
        }
      })
    },
    onRemove (data) {//删除图片
      this.formOption.forEach(item => {
        if (item['type'] == 'accessory') {
          item.num = data.length
        }
      })
    }
  }
}

</script>
<style lang='scss' scoped>
.useCarApply {
  box-sizing: border-box;
}
</style>