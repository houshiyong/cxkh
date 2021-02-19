<template>
  <div class="container">
    <van-nav-bar
      title="添加成员"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 表单 -->
    <van-cell-group>
      <van-field
        v-model.trim="sub.accountNumber"
        label="账号"
        :error-message="errMsg.accountNumber"
        placeholder="请输入账号"
        @blur="checkAccountNumber()"
      />
      <van-field
        v-model.trim="sub.username"
        label="昵称"
        :error-message="errMsg.username"
        placeholder="昵称，注意注册后不能修改"
        @blur="checkUserName()"
      />
      <van-field
        v-model.trim="sub.passwordA"
        type="password"
        label="密码"
        :error-message="errMsg.passwordA"
        placeholder="密码"
        @blur="checkPasswordA()"
      />
      <van-field
        v-model.trim="sub.passwordB"
        type="password"
        label="确认密码"
        :error-message="errMsg.passwordB"
        placeholder="确认密码"
        @blur="checkPasswordB()"
      />
      <van-radio-group
        v-model="radio"
        direction="horizontal"
        style="padding: 0.4rem 2.5rem;box-sizing: border-box;"
      >
        <van-radio name="1">
          代理商
        </van-radio>
        <van-radio name="2">
          操作员
        </van-radio>
      </van-radio-group>
    </van-cell-group>
    <div class="btn_box">
      <van-button
        type="info"
        block
        round
        @click="addition"
      >
        添 加
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sub: {
        accountNumber: '',
        username: '',
        passwordA: '',
        passwordB: ''
      },
      errMsg: {
        accountNumber: '',
        username: '',
        passwordA: '',
        passwordB: ''
      },
      radio: '1'
    }
  },
  methods: {
    // 返回
    onClickLeft () {
      this.$router.push('/team')
    },
    checkAccountNumber () {
      if (!this.sub.accountNumber) {
        this.errMsg.accountNumber = '请输入账号'
        return false
      }
      this.errMsg.accountNumber = ''
    },
    checkUserName () {
      if (!this.sub.username) {
        this.errMsg.username = '请输入昵称'
        return false
      }
      this.errMsg.username = ''
    },
    checkPasswordA () {
      if (!this.sub.passwordA) {
        this.errMsg.passwordA = '请输入密码'
        return false
      }
      if (!this.sub.passwordB) {
        this.errMsg.passwordB = '请再次输入密码'
        return false
      }
      //   if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/.test(this.passwordA)) {
      //     this.errMsg.passwordA = '密码长度要大于6位，由数字和字母组成'
      //     return false
      //   }
      this.errMsg.passwordA = ''
    },
    checkPasswordB () {
      if (this.sub.passwordA !== this.sub.passwordB) {
        this.errMsg.passwordB = '两次输入密码不一致'
        return false
      }
      this.errMsg.passwordB = ''
    },
    // 添加
    addition () {
      this.checkAccountNumber()
      this.checkUserName()
      this.checkPasswordA()
      this.checkPasswordB()
      if (this.errMsg.accountNumber || this.errMsg.username || this.errMsg.passwordA || this.errMsg.passwordB) return false
      try {
        this.$router.push('/team')
      } catch (e) {
        this.$toast({ type: 'fail', message: '添加失败' })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.btn_box {
    padding: 1.1rem;
    box-sizing: border-box;
}
</style>
