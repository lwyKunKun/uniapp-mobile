
<!-- 申请表单模板 -->
<template>
  <view class="apply-template-container">
    <u-form :model="form" ref="form" label-width="auto">
      <u-row gutter="16">
        <u-col span="12" v-for="(item, index) in formOption" :key="index">
          <u-form-item
            :label="item.label"
            v-if="item.type === 'text'"
            :prop="item.prop"
            ><u-input
              v-model="form[item.model]"
              :placeholder="item.placeholder"
          /></u-form-item>
          <u-form-item
            :label="item.label"
            v-if="item.type === 'textarea'"
            :prop="item.prop"
            label-position="top"
            class="item-textarea"
            ><u-input
              v-model="form[item.model]"
              :type="item.mode"
              :placeholder="item.placeholder"
              :auto-height="true"
          /></u-form-item>
          <u-form-item :label="item.label" v-if="item.type === 'date'">
            <uni-datetime-picker
              :type="item.mode"
              :border="false"
              @change="
                item.change ? $emit(item.change, $event, item.model) : ''
              "
            />
          </u-form-item>
          <u-form-item
            :label="item.label"
            v-if="item.type === 'radio'"
            :prop="item.prop"
            label-position="top"
            class="item-radio"
          >
            <u-radio-group v-model="form[item.model]">
              <u-radio
                v-for="(item, index) in item.radioList"
                :key="index"
                :name="item.key"
                :disabled="item.disabled"
              >
                {{ item.name }}
              </u-radio>
            </u-radio-group></u-form-item
          >
          <u-form-item
            :label="item.label"
            v-if="item.type === 'accessory'"
            :prop="item.prop"
            label-position="top"
            class="item-upload"
          >
            <view class="hint">
              <view>点击可预览图片</view>
              <view class="num">
                <text>{{ item.num }}</text>
                <text>/6</text>
              </view>
            </view>
            <view class="upload">
              <u-upload
                ref="upload"
                :auto-upload="false"
                max-count="6"
                @on-choose-complete="
                  item.onChoose ? $emit(item.onChoose, $event) : ''
                "
                @on-list-change="
                  item.onRemove ? $emit(item.onRemove, $event) : ''
                "
              ></u-upload>
            </view>
          </u-form-item>
        </u-col>
      </u-row>
    </u-form>
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    form: { //存放model字段
      type: Object,
      default: () => { }
    },
    formOption: {//配置项
      type: Array,
      default: () => []
    },

  },

  data () {
    return {
    };
  },

  mounted () { },

  computed: {},

  methods: {
  }
}

</script>
<style lang="scss">
.apply-template-container {
  padding: 20rpx;
  box-sizing: border-box;
  /deep/.u-col {
    box-sizing: border-box;
  }
  width: 100%;
  /deep/.u-input {
    text-align: right !important;
  }
  /deep/.uni-date {
    width: 100%;
    text-align: right;
  }
  /deep/.u-input__textarea {
    text-align: left;
  }
  .item-textarea {
    /deep/.u-form-item--right {
      background-color: #fff;
    }
    /deep/.uni-textarea-wrapper {
      margin-left: 20rpx;
    }
  }
  .item-upload {
    /deep/.u-form-item--right__content__slot {
      flex-direction: column !important;
    }
  }
  .item-radio {
    /deep/.u-form-item--right {
      background-color: #fff;
      padding-left: 20rpx;
    }
  }
}
</style>
<style lang='scss' scoped>
/deep/.hint {
  width: 100%;
  display: flex;
  background-color: #fff;
  padding: 0 10rpx;
  flex: 0 0 100%;
  flex-direction: row;
  justify-content: flex-start;
  box-sizing: border-box;
  .num {
    margin-left: auto;
    color: #b8b9b9;
  }
}
.upload {
  width: 100%;
  background-color: #fff;
}
</style>