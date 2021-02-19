<template>
  <div class="container">
    <van-nav-bar
      left-text="修改折扣"
      left-arrow
      @click-left="onClickLeft"
    >
      <template #right>
        <van-icon
          name="ellipsis"
          size="18"
        />
        <!-- <van-popover
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
        </van-popover> -->
      </template>
    </van-nav-bar>
    <div class="username">
      <h6>登录账号 | <span>admin123（测试人员）</span></h6>
    </div>
    <div class="divRow van-hairline--bottom">
      <van-row>
        <van-col span="6">
          渠道
        </van-col>
        <van-col span="6">
          代理折扣
        </van-col>
        <van-col span="6">
          状态
        </van-col>
        <van-col span="6">
          我的折扣
        </van-col>
      </van-row>
    </div>
    <van-row style="margin: 10px;">
      <van-col span="6">
        渠道
      </van-col>
      <van-col span="6">
        代理折扣
      </van-col>
      <van-col span="6">
        状态
      </van-col>
      <van-col span="6">
        我的折扣
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newId: '',
      showPopover: false,
      // 通过 actions 属性来定义菜单选项
      actions: [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }]
    }
  },
  watch: {
    $route: 'getParams'
  },
  created () {
    this.getParams()
  },
  methods: {
    onSelect (action) {
      this.$toast(action.text)
    },
    getParams () {
      this.newId = this.$route.query.id
      console.log(this.newId)
    },
    // 返回
    onClickLeft () {
      this.$router.push('/team')
    }
  }
}
</script>

<style lang="less" scoped>
.username {
    height: 50px;
    padding: 0 40px;
    box-sizing: border-box;
    h6 {
        line-height: 50px;
        span {
            color: #6f6f6f;
        }
    }
}
.divRow {
    margin: 0 10px;
}
.van-row {
    text-align: center;
    font-size: 15px;
}
</style>
