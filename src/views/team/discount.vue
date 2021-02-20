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
    <van-row
      v-for="(item, index) in itemList"
      :key="index"
      style="margin: 10px; padding: 20px; box-sizing: border-box; border-bottom: 0.5px solid #ccc;"
    >
      <van-col span="6">
        {{ item.name }}
      </van-col>
      <van-col span="6">
        <input
          v-model="item.dlzk"
          type="text"
          class="zk"
        >
      </van-col>
      <van-col span="6">
        <van-switch
          v-model="item.zt"
          size="20px"
        />
      </van-col>
      <van-col span="6">
        <span style="display: block;width: 70px;height: 22px;line-height: 22px; background: #e2f9fb;margin-left: 5px;">{{ item.wdzk }}</span>
      </van-col>
    </van-row>
    <div class="tjBtn">
      <van-button
        type="info"
        round
        block
      >
        保 存
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newId: '',
      zkValue: '0.800',
      myZkValue: '0.9',
      itemList: [
        {
          name: '腾讯大王卡',
          dlzk: '0.800',
          zt: true,
          wdzk: '0.9',
          id: 0
        },
        {
          name: '话费卡LT',
          dlzk: '0.800',
          zt: false,
          wdzk: '0.9',
          id: 1
        },
        {
          name: '移动宝藏卡',
          dlzk: '0.800',
          zt: false,
          wdzk: '0.9',
          id: 2
        },
        {
          name: '电信星卡49',
          dlzk: '0.800',
          zt: true,
          wdzk: '0.9',
          id: 3
        }
      ]
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
.zk {
  width: 70px;
  background: #3296fa;
  border: none;
  outline: none;
  color: #fff;
  text-align: center;
}
.tjBtn {
  padding: 20px 50px;
  box-sizing: border-box;
}
</style>
