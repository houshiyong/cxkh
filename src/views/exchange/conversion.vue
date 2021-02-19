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
  </div>
</template>

<script>
import img1 from '../../assets/img/1.png'
import img2 from '../../assets/img/2.png'
import img3 from '../../assets/img/3.png'
import img4 from '../../assets/img/tishi.png'
export default {
  data () {
    return {
      tishi: img4,
      images: [
        img1,
        img2,
        img3
      ]
    }
  },
  created () {
    this.hint()
  },
  methods: {
    hint () {
      this.$dialog.alert({
        message: `
          <p><img width="85px" src="${this.tishi}"></p>
          <p style="color:#999999; font-size:14px;text-align: left;">重要通知：权益开卡年龄限制为18周岁-55周岁，低于或者超出年龄限制不予开卡。请各渠道知悉传达！</p>
        `,
        confirmButtonColor: '#409eff'
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
