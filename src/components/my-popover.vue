<template>
  <van-popover
    v-model="showPopover"
    trigger="click"
    :actions="actions"
    @select="onSelect"
  >
    <template #reference>
      <van-button type="primary">
        浅色风格
      </van-button>
    </template>
  </van-popover>
</template>

<script>
export default {
  name: 'MyPopover',
  data () {
    return {
      showPopover: false,
      // 通过 actions 属性来定义菜单选项
      actions: [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }]
    }
  },
  methods: {
    onSelect (action) {
      this.$toast(action.text)
    }
  }
}
</script>

<style lang="less" scoped></style>
