<template>
  <div class="container">
    <!-- 轮播 -->
    <div class="swipe">
      <van-swipe
        :autoplay="3000"
        :loop="true"
        height="160"
      >
        <van-swipe-item
          v-for="(image, index) in images"
          :key="index"
        >
          <van-image
            height="160px"
            fit="cover"
            :src="image"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-tabs
      v-model="activeName"
      style="padding-bottom:2rem;"
    >
      <van-tab
        title="上报"
        name="a"
      >
        <div class="dawangka">
          <h6>腾讯大王卡支持地区：<span>全国</span></h6>
          <div class="tczx">
            <p>套餐资费：40G王卡专属流量，超100款app免流量，套餐外流量低至1元1G，国内接听免费，通话0.1元/分钟（含来电显示），月租19元，随机靓号免费送。办卡年龄16-50周岁。</p>
            <p>领卡流程： 提交订单—包邮到家—收卡激活（携带身份证首充50元后激活）—领取福利（全程无需任何费用）。</p>
          </div>
          <div class="jsFx">
            <span>视频介绍</span><span>点我分享</span>
          </div>
          <div class="tczx">
            <p>第一步</p>
            <p>请用手机进行扫码，严格按照提示操作，填写姓名、手机号、身份证、收货地址、详细地址，点击立即领卡即可。号码激活成功系统会自动发放佣金。</p>
          </div>
          <div
            v-for="(item, index) in 1"
            :key="index"
            class="wangka"
          >
            <!-- <img :src="img4"> -->
            <van-row>
              <van-col span="8">
                <img
                  width="90px"
                  :src="wkImg"
                >
              </van-col>
              <van-col span="8">
                <p style="margin-bottom: 10px;">
                  腾讯大王卡
                </p>
                <p style="color:#db1e26">
                  点我赚佣金36.00
                </p>
              </van-col>
              <van-col span="8">
                <van-button
                  style="margin: 10px 0 0 20px;"
                  type="info"
                  size="small"
                >
                  扫码开奖
                </van-button>
              </van-col>
            </van-row>
          </div>
        </div>
      </van-tab>
      <van-tab
        title="记录"
        name="b"
      >
        <!-- <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
        /> -->
        <div class="jl">
          <van-row>
            <van-col span="3">
              类型
            </van-col>
            <van-col span="9">
              <van-dropdown-menu>
                <van-dropdown-item
                  v-model="dropdown"
                  :options="option1"
                />
              </van-dropdown-menu>
            </van-col>
            <van-col span="12">
              <van-search
                v-model="value"
                shape="round"
                style="padding: 0;"
                placeholder="请输入号码查询"
              />
            </van-col>
          </van-row>
          <!-- 日期选择搜索 -->
          <div class="search">
            <!-- 日期选择 -->
            <div>
              <van-search
                v-model="timeDataA"
                class="vanSearchLeft"
                shape="round"
                :clearable="false"
                :readonly="true"
                @click="dctckA = true"
              />
              <p>至</p>
              <van-search
                v-model="timeDataB"
                class="vanSearchLeft"
                shape="round"
                :clearable="false"
                :readonly="true"
                @click="dctckB = true"
              />
              <p
                class="screen"
                @click="screen"
              >
                筛选
              </p>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <!-- 底层弹出  -->
    <van-action-sheet
      v-model="dctckA"
    >
      <van-datetime-picker
        v-model="currentDateA"
        type="date"
        title="选择年月日"
        :min-date="minDateA"
        :max-date="maxDateA"
        @cancel="dctckA=false"
        @confirm="accomplishA"
      />
    </van-action-sheet>
    <van-action-sheet
      v-model="dctckB"
    >
      <van-datetime-picker
        v-model="currentDateB"
        type="date"
        title="选择年月日"
        :min-date="minDateB"
        :max-date="maxDateB"
        @cancel="dctckB=false"
        @confirm="accomplishB"
      />
    </van-action-sheet>
  </div>
</template>

<script>
import img1 from '../../assets/img/1.png'
import img2 from '../../assets/img/2.png'
import img3 from '../../assets/img/3.png'
import img4 from '../../assets/img/S000002.jpg'
export default {
  data () {
    return {
      images: [
        img1,
        img2,
        img3
      ],
      wkImg: img4,
      value: '',
      activeName: 'b',
      dropdown: 0,
      option1: [
        { text: '直属成员', value: 0 },
        { text: '全部成员', value: 1 }
      ],
      timeDataA: '',
      timeDataB: '',
      // 日期选择
      minDateA: new Date(2020, 0, 1),
      maxDateA: new Date(2025, 10, 1),
      currentDateA: new Date(),
      minDateB: new Date(2020, 0, 1),
      maxDateB: new Date(2025, 10, 1),
      currentDateB: new Date(),
      // 筛选弹窗
      popUp: false,
      dctckA: false,
      dctckB: false
    }
  },
  methods: {
    // 筛选
    screen () {
      this.popUp = true
    },
    // 左边时间选择完成
    accomplishA (val) {
      console.log(val, 'val')
      var year = val.getFullYear()
      var month = val.getMonth() + 1
      var day = val.getDate()
      var hour = val.getHours()
      var minute = val.getMinutes()
      if (month >= 1 && month <= 9) { month = `0${month}` }
      if (day >= 1 && day <= 9) { day = `0${day}` }
      if (hour >= 0 && hour <= 9) { hour = `0${hour}` }
      if (minute >= 0 && minute <= 9) { minute = `0${minute}` }
      this.timeDataA = `${year}-${month}-${day}`
      this.dctckA = false
    },
    // 右边时间选择完成
    accomplishB (val) {
      console.log(val, 'val')
      var year = val.getFullYear()
      var month = val.getMonth() + 1
      var day = val.getDate()
      var hour = val.getHours()
      var minute = val.getMinutes()
      if (month >= 1 && month <= 9) { month = `0${month}` }
      if (day >= 1 && day <= 9) { day = `0${day}` }
      if (hour >= 0 && hour <= 9) { hour = `0${hour}` }
      if (minute >= 0 && minute <= 9) { minute = `0${minute}` }
      this.timeDataB = `${year}-${month}-${day}`
      this.dctckB = false
    }
  }
}
</script>

<style lang="less" scoped>
.dawangka {
  height: 600px;
  overflow: auto;
  padding: 15px;
  padding-bottom: 200px;
  box-sizing: border-box;
  // background-color: #f5f7fa;
  h6 {
    font-size: 15px;
    span {
      color: green;
    }
  }
  .tczx {
    padding: 5px;
    margin-top: 5px;
    background-color: #f6f6f6;
    box-sizing: border-box;
  }
  .jsFx {
    height: 30px;
    display: flex;
    justify-content: space-between;
    span {
      line-height: 30px;
      color: #fe6f5f;
    }
  }
  .wangka {
    margin-top: 5px;
    padding: 5px;
    box-sizing: border-box;
    border-bottom: 1px dashed #eee;
  }
}

.jl {
  height: 600px;
  overflow: auto;
  padding: 15px;
  padding-bottom: 200px;
  box-sizing: border-box;
}

.search {
  width: 100%;
  height: 128px;
  background-color: #fff;
  // padding: 20px 10px 0;
  // box-sizing: border-box;
  .topSearch {
    height: 54px;
    .iconSearch{
      line-height: 54px;
      font-size: 20px;
    }
  }
  p {
    float: left;
    text-align: center;
    height: 59px;
    line-height: 59px;
  }
  .vanSearchLeft {
    width: 140px;
    float: left;
    van-field__left-icon {
      display: none;
    }
  }
  .screen {
    width: 30px;
    text-align: center;
    height: 60px;
    font-size: 14px;
    line-height: 60px;
  }
}
</style>
