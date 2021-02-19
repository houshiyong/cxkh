<template>
  <div class="container">
    <div class="top">
      <div class="topSearch">
        <van-row>
          <van-col span="21">
            <van-search
              v-model="textValue"
              show-action
              shape="round"
              placeholder="请输入您的昵称或名字查询"
              @search="onSearch"
            >
              <template #action>
                <div @click="onSearch">
                  搜索
                </div>
              </template>
            </van-search>
          </van-col>
          <van-col span="3">
            <van-icon
              name="add"
              size="1rem"
              color="#409EFF"
              style="margin-top: 9px;"
              @click="show = true"
            />
            <van-action-sheet
              v-model="show"
              :actions="actions"
              cancel-text="取消"
              close-on-click-action
              @cancel="onCancel"
              @select="onSelect"
            />
          </van-col>
        </van-row>
      </div>
      <div class="borderHr" />
      <div class="bottomdDropdown">
        <van-row>
          <van-col span="11">
            <van-dropdown-menu>
              <van-dropdown-item
                v-model="dropdown"
                :options="option1"
              />
            </van-dropdown-menu>
          </van-col>
          <van-col
            span="8"
            style="padding-left: 30px; box-sizing: border-box; line-height: 1.3rem; font-size: 18px;"
          >
            <span style="color: #409EFF; ">44</span>人
          </van-col>
          <van-col
            span="5"
            style="padding-left: 40px; box-sizing: border-box;"
          >
            <van-icon
              name="question-o"
              size="0.7rem"
              color="#909399"
              style="margin-top: 9px;"
            />
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="content">
      <div
        v-for="(item, index) in 10"
        :key="index"
      >
        <div class="backHr" />
        <div class="user">
          <div class="userTop van-hairline--bottom">
            <span>账号：adminadmin</span>
            <van-switch
              :value="checked"
              size="24px"
              @input="onInput"
            />
          </div>
          <div class="userBottom">
            <van-row>
              <van-col span="8">
                <van-image
                  round
                  width="1.2rem"
                  height="1.2rem"
                  fit="cover"
                  src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
              </van-col>
              <van-col span="9">
                <p>姓名：小花</p>
                <p>昵称：测试权限</p>
                <p>类型：操作员</p>
              </van-col>
              <van-col
                span="7"
                style="padding-left: 20px; box-sizing: border-box;"
              >
                <p
                  style="margin-top:5px;"
                  @click="modification(index)"
                >
                  修改折扣
                </p>
                <p
                  style="margin-top:5px;"
                  @click="reset"
                >
                  重置密码
                </p>
              </van-col>
            </van-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  component: {
    name: 'team'
  },
  data () {
    return {
      textValue: '',
      dropdown: 0,
      option1: [
        { text: '直属成员', value: 0 },
        { text: '全部成员', value: 1 }
      ],
      checked: true,
      show: false,
      actions: [{ name: '添加成员' }, { name: '选项二' }, { name: '选项三' }]
    }
  },
  methods: {
    // 面板选项
    onSelect (item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false
      if (item.name == '添加成员') {
        this.$router.push('/addMembers')
      }
    },
    // 取消面板
    onCancel () {
      this.$toast('取消')
    },
    onSearch () {
      console.log('0k')
      alert('123')
    },
    onInput (checked) {
      this.$dialog.confirm({
        title: '提醒',
        message: '是否切换开关？'
      }).then(() => {
        this.checked = checked
      })
    },
    // 修改折扣
    modification (index) {
      this.$router.push({ path: '/discount', query: { id: index } }) // {path:'/discount',query: {id:'1'}}
    },
    // 重置密码
    reset () {
      console.log('重置密码')
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  height: 500px;
  overflow: auto;
  padding-bottom: 60px;
  box-sizing: border-box;
}
.topSearch, .bottomdDropdown {
  // height: 150px;
  padding: 10px;
  box-sizing: border-box;
}
.borderHr {
  height: 1px;
  border-top: 1px dashed #eee;
}
.backHr {
  height: 5px;
  background: #EBEEF5;
}

.user {
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
  .userTop {
    height: 50px;
    span {
      line-height: 50px;
      font-size: 16px;
    }
    .van-switch {
      margin-top: 8px;
      float: right;
    }
  }
  .userBottom {
    padding-top: 10px;
    box-sizing: border-box;
    .van-image {
      margin-left: 40px;
    }
  }
}
</style>
