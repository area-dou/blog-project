<template>
  <div>
    <div class="article">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="article-box">
        <h2>文章标题</h2>
        <div class="article-des">
          <span>2022.04.22</span>
          <span>分类： 文字文案</span>
          <span>阅读(245)</span>
          <span>评论(12)</span>
        </div>
        <div class="article-content">
          <span>文章内容</span>
        </div>
        <div class="likes">
          <el-button type="warning" class="likes-btn">
            <span class="iconfont icon-zan"></span>
            <span>赞(12)</span>
          </el-button>
        </div>
        <div class="recommend">
          <h3 class="recommend-title">相关推荐</h3>
          <div class="recommend-list">
            <ul>
              <li><a href="">1相关内容</a></li>
              <li><a href="">2相关内容</a></li>
              <li><a href="">3相关内容</a></li>
              <li><a href="">4相关内容</a></li>
              <li><a href="">5相关内容</a></li>
              <li><a href="">6相关内容</a></li>
            </ul>
          </div>
        </div>
        <div class="comment">
          <h3 class="comment-title">评论<span style="font-size:14px; color: #666;">(文明评论)</span></h3>
          <form action="">
            <div class="comment-box">
              <textarea style="resize:none;" name="" id="" class="comment-text" placeholder="请输入内容"></textarea>
              <el-button type="warning" style="float: right;">提交评论</el-button>
            </div>
            <div class="comment-ipt">
              <span style="color:#aaa;">昵称:(必填字段)</span><el-input placeholder="请输入昵称" value=""></el-input>
              <span style="color:#aaa;">邮箱:(必填字段)</span><el-input type="email" placeholder="请输入邮箱"></el-input>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  // props: ['item'],
  data () {
    return {
    }
  },
  created () {},
  methods: {}
}

</script>
<style lang="less" scoped>
  .article {
    display: flex;
    flex-direction: column;
    width: 97%;
    height: 100%;
    margin: 0 auto;
    // border: 1px solid red;
  }
  .breadcrumb {
    padding: 10px 10px;
    border: 1px solid #ccc;
    margin-bottom: 15px;
    background-color: #fff;
  }
  .article-box {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 30px 20px;
    background-color: #fff;
    border: 1px solid #ccc;
  }
  .article-box h2 {
    margin: 0 auto;
  }
  .article-des {
    margin: 0 auto;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  .article-des span {
    font-size: 12px;
    padding-right: 10px;
    color: #666;
  }
  .likes {
    display: flex;
    justify-content: center;
  }
  .likes-btn {
    background-color: #ff9900;
  }
  .recommend-title {
    width: 100%;
    color: #333;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
  .comment-title {
    width: 100%;
    color: #333;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
  .comment-box {
    width: 100%;
    background-color: #f5f5f5;
    margin-bottom: 15px;
    border: 2px solid #ccc;
    overflow: hidden;
  }
  .comment-text {
    width: 100%;
    height: 70px;
    // border: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  .comment-text:focus {
    outline: none;
    // box-shadow: 0 0 8px rgba(255, 153, 0, .8);
  }
  .comment-ipt {
    // display: flex;
    margin: 0 auto;
    width: 50%;
  }
  .comment-ipt .el-input {
    padding: 10px 0;
  }
  .el-input:focus {
    outline: none !important;
    box-shadow: 0 0 8px rgba(255, 153, 0, .8) !important;
  }
</style>
