<template>
  <div class="footer-container">
    <div class="footer-detail">
      <div class="footer-item">
        <h2>快速入口</h2>
        <div class="enter" style="max-width:650px">
          <span>首页</span>
          <span>关于零束</span>
          <span>产品与解决方案</span>
          <span>开发者中心</span>
          <span>法律声明</span>
          <span>个人信息保护政策</span>
        </div>
      </div>
      <div class="footer-attention">
        <h2>关注我们</h2>
        <div class="enter">
          <span>扫码关注零束科技</span>
          <span
            >微信公众号
            <van-icon name="wechat" class="icon" />
          </span>
        </div>
      </div>
      <div class="footer-item">
        <h2>公司地址</h2>
        <div class="enter">
          <p>地址一：上海市 嘉定区 汽车·创新港21号楼</p>
          <p>地址二：上海市 闵行区 维璟中心F座</p>
        </div>
      </div>
      <div class="footer-filings">
      <p>Copyright © 2022 零束官网 <a href="#">沪ICP备2020035230号-5</a> <a href="#">沪公网安备31011402009741号</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
* {
  margin: 0px;
  padding: 0px;
}
.footer-container {
  width: 100%;
  background: #000a2e;
  color: #fff;
  .footer-detail {
    padding: 32px 24px;
    .footer-item {
      margin-bottom: 20px;
      h2 {
        font-size: 18px;
        font-weight: 200;
      }
      .enter {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 500px;
        margin-top: 15px;
        font-size: 14px;
        color: #999999;
        line-height: 26px;
      }
    }
    .footer-attention {
      margin-bottom: 20px;
      h2 {
        font-size: 18px;
        font-weight: 200;
      }
      .enter {
        font-size: 14px;
        color: #999999;
        line-height: 26px;
        margin-top: 15px;
        span {
          margin-right: 15px;
          // border: 1px solid red;
          position: relative;
          .icon {
            color: #fff;
            font-size: 18px;
            position: absolute;
            top: 0px;
            right: -24px;
          }
        }
      }
    }
    .footer-filings{
      margin-top: 30px;
      color: #999999;
      font-size: 12px;
      a{
        color: #999999;
      }
    }
  }
}
</style>