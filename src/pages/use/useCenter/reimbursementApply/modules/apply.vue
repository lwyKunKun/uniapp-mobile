<!-- 报销申请 -->
<template>
  <view class="bgc">
    <applyTemplate
      :form="form"
      :formOption="formOption"
      @openSelect="openSelect"
      @confirmSelect="confirmSelect"
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
        applyType: '',//申请类型
        reimbursement: '',//报销金额
        applyReason: '',//申请理由
        warn: '',//提醒方式
      },
      formOption: [
        {
          label: '申请类型',
          type: 'select',
          prop: 'applyType',
          model: 'applyType',
          show: false,
          list: [
            {
              value: '1',
              label: '招待费'
            },
            {
              value: '2',
              label: '办公费'
            },
            {
              value: '3',
              label: '差旅费'
            },
            {
              value: '4',
              label: '水电费'
            },
            {
              value: '5',
              label: '燃油费'
            },
            {
              value: '6',
              label: '维修费'
            }
          ],
          click: 'openSelect',
          confirm: 'confirmSelect',
          width: 130,
          placeholder: '请选择类型'
        },
        {
          label: '报销金额',
          type: 'text',
          prop: 'reimbursement',
          model: 'reimbursement',
          width: 130,
          placeholder: '请输入金额',
          isImport: true,
          width: 130
        },
        {
          label: '申请理由',
          type: 'textarea',
          prop: 'applyReason',
          model: 'applyReason',
          placeholder: '请项目描述您要申请的内容',
          mode: 'textarea',
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

  mounted () { },

  computed: {},

  methods: {
    openSelect (model) {//select选择事件
      this.formOption.forEach(item => {
        if (item.model == model) {
          item.show = true
        }
      })

    },
    confirmSelect (e, model) {//select选择确认
      console.log(e, 'e');
      console.log(model, 'model');
      this.form[model] = e[0].label
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
    },
  }
}

</script>
<style lang='scss' scoped>
</style>