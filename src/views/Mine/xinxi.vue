<template>
  <div class="container">
    <div class="xinxi">
      基本信息
    </div>
    <ul>
      <li>
        <span class="My_block_left"><van-icon name="user-o" /> 123</span>
        <span class="My_block_right">456</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.container{
    background-color: #f5f6f8;
    font-size: 0.4rem;
    padding-bottom: 1.5rem;
    .xinxi {
    padding: 0.3rem 0 0.2rem 0.3rem;
    color: #b4b4b4;
}
    ul li {
    width: 100%;
    overflow: hidden;
    background-color: #ffffff;
    border-bottom: 1px solid #e6e6e6;
    padding: 0.25rem 0;
    .My_block_left {
    display: block;
    float: left;
    margin-left: 0.3rem;
    color: #333333;
    font-size: 0.28rem;
    }
    .My_block_right {
    display: block;
    float: right;
    margin-right: 0.31rem;
    color: #a4a4a4;
    font-size: 0.28rem;
    }
    }
}

</style>
