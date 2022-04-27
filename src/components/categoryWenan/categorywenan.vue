<template>
  <div class="container">
    <el-row :gutter="0">
      <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
        <div class="content-title">
          <h3>文字文案</h3> 
        </div>
        <div class="content">
          <div class="content-img">
            <img src="../../assets/女孩3.png" alt="">
          </div>
          <div class="content-main">
            <div class="content-main-title">
              <h2>文章标题</h2>
            </div>
            <div class="content-main-des">
              <el-row :gutter="10">
                <el-col :xs="22" :sm="16" :md="16" :lg="16" :xl="16">
                  <div class="content-main-des_info">
                    <span>作者: </span>
                    <span class="hidden-xs-only">2022.04.12</span>
                    <span>阅读: ()</span>
                    <span>评论: ()</span>
                    <span>点赞: ()</span>
                  </div>
                </el-col>
                <el-col :xs="2" :sm="8" :md="8" :lg="8" :xl="8">
                  <div class="content-main-des-label">
                    <span class="label hidden-xs-only">标签: 文字文案</span>
                    <span :class="isZan ? 'iconfont icon-zan': 'iconfont icon-zan1' " @click="zan"></span>
                  </div> 
                </el-col>
              </el-row>
            </div>
            <div class="content-main-text">
              文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="0" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="hidden-xs-only">aside内容</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isZan: false
    }
  },
  created () {},
  methods: {
    // 点赞与否
    zan () {
      this.isZan = !this.isZan
    }
  }
}

</script>
<style lang="less" scoped>
  .container {

  }
  .content-title {
    padding: 10px;
    margin: 0 5px;
    border: 1px solid #ddd;
    background-color: #fff;

  }
  h3 {
    margin: 0;
    padding-left: 10px;
    border-left: 5px solid #ff9900;
    color: #555;
  }
  .content {
    display: flex;
    justify-content: flex-start;
    // width: 100%;
    background-color: #fff;
    padding: 10px;
    margin: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
  }
  .content-img {
    flex-shrink: 0;
      height: 85px;
      width: 85px;
      border: 1px solid #ddd;
      border-radius: 5px;
  }
  .content-img img {
    width: 100%;
    height: 100%;
  }
  .content-main {
    padding-left: 10px;
  }
  .content-main-des {

  }
  .content-main-title h2 {
    font-size: 16px;
    color: #555;
  }
  .content-main-des {
    // display: flex;
    // justify-content: center;
  }
  .content-main-des_info {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #999;
  }
  .content-main-des-label {
    display: flex;
    justify-content: space-between;
  }
  .label {
    font-size: 12px;
    color: #999;
    padding: 2px;
    border: 1px solid red;
    border-radius: 5px;
  }
  .content-main-text {
    text-indent: 2em;
    font-size: 14px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .icon-zan {
    color: red;
  }
</style>
