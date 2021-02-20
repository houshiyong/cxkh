<template>
  <div
    class="container"
  >
    <van-row>
      <van-col
        span="24"
        class="red"
      >
        <div class="acount_left">
          <div class="touxiang">
            <img src="../../assets/img/2.png">
          </div>
          <div id="reg">
            <div
              id="userName"
              class="acount_tit"
            >
              陆超民
            </div>
          </div>
        </div>
        <div class="money">
          <div class="money-left">
            <span>账户总额<van-icon
              name="closed-eye"
              size="16"
            /></span>
            <p>0.333</p>
          </div>
          <div class="shuxian" />
          <div class="money-left">
            <span>可提现总额<van-icon
              name="closed-eye"
              size="16"
            /></span>
            <p>0.333</p>
          </div>
          <a href="#">
            <van-button
              type="primary"
              size="small"
              color="skyblue"
            >提现</van-button>
          </a>
        </div>
      </van-col>
    </van-row>

    <div class="menu_tab1">
      <p class="jl">
        个人业务
      </p>
      <ul>
        <li>
          <a href="#">
            <img
              src="../../assets/img/2.png"
              alt=""
            >
            <p>上报记录</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="../../assets/img/2.png"
              alt=""
            >
            <p>上报记录</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="../../assets/img/2.png"
              alt=""
            >
            <p>上报记录</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="../../assets/img/2.png"
              alt=""
            >
            <p>上报记录</p>
          </a>
        </li>
      </ul>
    </div>

    <div class="menu_tab1">
      <p class="jl">
        个人业务
      </p>
      <ul>
        <li>
          <a href="#">
            <img
              src="../../assets/img/2.png"
              alt=""
            >
            <p>上报记录</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="../../assets/img/2.png"
              alt=""
            >
            <p>上报记录</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="../../assets/img/2.png"
              alt=""
            >
            <p>上报记录</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="../../assets/img/2.png"
              alt=""
            >
            <p>上报记录</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="menu_tab1">
      <p class="jl">
        系统设置
        <a
          href="#"
          class="jl1"
        >新手必看</a>
      </p>
      <ul>
        <li @click="toXinXi">
          <a
            href="#"
          >
            <img
              src="../../assets/img/2.png"
              alt=""
            >
            <p>上报记录</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="../../assets/img/2.png"
              alt=""
            >
            <p>上报记录</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="../../assets/img/2.png"
              alt=""
            >
            <p>上报记录</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="../../assets/img/2.png"
              alt=""
            >
            <p>上报记录</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
    toXinXi () {
      this.$router.push('/xinxi')
    }
  }
}
</script>

<style lang="less" scoped>
.container{
  background-color: #f5f6f8;
  .red{
    position:relative;
    padding: 0.5rem 0 1.5rem 0;
    background-color: skyblue;
    margin-bottom: 1.5rem;
    .acount_left {
    float: left;
    width: 4rem;
    margin-left: .3rem;
    margin-top: .6rem;
    .touxiang img {
    width: 1.19rem;
    height: 1.19rem;
    float: left;
}
    .acount_tit {
    font-size: 16px;
    color: #fff;
    padding-left: 0.3rem;
    margin: 0.25rem 0.24rem 0;
    overflow: hidden;
}
}
.money{
    background-color: #fff;
    border-radius: 15px;
    height: 2rem;
    width:95%;
    position:absolute;
    top:75%;
    left: 2.5%;
    padding:0.2rem 0;
    .money-left {
    width:49%;
    float: left;
    margin-top: 0.3rem;
    margin-bottom: 0.1rem;
    text-align: center;
    span{
      color: #666;
    .van-icon{
      margin-left: 0.2rem;
      margin-top: 0.2rem;
    }}
    p{
      font-size: 0.5rem;
      // padding-bottom: 0.5rem;
    }
    }
    .shuxian {
    width: 1px;
    float: left;
    height: .8rem;
    margin-top: .35rem;
    background-color: #b1b1b1;
}
  .money_right {
      width:49%;
      float: right;
      margin-top: 0.3rem;
  }
  a{
    position:fixed;
    top:4.5rem;
    left: 4rem;
    .van-button{
      padding: .4rem .6rem;
      border-radius: .5rem;
    }
  }
}
}
    .menu_tab1{
      width: 95%;
      height: 3rem;
      background-color: white;
      overflow: hidden;
      margin-top:.5rem;
      margin-left: 2.5%;
      border-radius: .3rem;
      .jl{
        width: 95%;
        height: .5rem;
        margin-left: 2.5%;
        border-bottom: 1px solid #b1b1b1;
        font-size: .4rem;
        margin-top:.3rem;
        padding-bottom: .1rem;
      .jl1{
        float: right;
        font-size: .2rem;
      }
      }
      ul li {
        width: 25%;
        float: left;
        img {
        height: 0.4rem;
        width: auto;
        margin: 0.32rem auto 0.13rem;
        display: block;
    }
      p{
        color: #333;
        font-size: 0.26rem;
        text-align: center;
        margin-bottom: 0.23rem;
        }
    }
    }
}
</style>
