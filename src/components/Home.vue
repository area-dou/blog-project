<template>
  <div class="container">
    <!-- 顶部向下撑的盒子 -->
    <div class="top-box"></div>
    <el-row class="container-header" :gutter="0">
      <el-col class="container-logo hidden-xs-only" :xs="0" :sm="6" :md="6" :lg="6" :xl="6">
        <div>
          <a href=""><img src="../assets/bobo1.png" alt=""></a>
        </div>
        <div>波波资源网</div>
      </el-col>
      <el-col class="container-nav" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="container-nav-list  hidden-xs-only">
          <el-menu :default-active="activePath" active-text-color="#ff6900" class="el-menu-demo " mode="horizontal" :router="true">
            <el-menu-item :index="item.path" v-for="item in label" :key="item.id">
              <template slot-scope="scope">
                <span slot="title">{{item.name}}</span>
              </template>
            </el-menu-item>
          </el-menu>
        </div>
        <!-- 手机端导航栏 -->
        <div class="mobile-nav hidden-sm-and-up">
          <span class="iconfont icon-menu1" style="font-size: 24px;"  @click="drawer = true">
          </span>
          <el-drawer class="mob-nav" title="horizontal" style="opacity: .9;" :visible.sync="drawer" :with-header="false" direction="ltr" :modal="true" size="60%" :modal-append-to-body="false">
            <div class="mob-nav-box">
              <el-menu :default-active="activePath" text-color="#fff" active-text-color="#ff9900" background-color="#000" class="mob-nav-box-list" mode="horizontal" :router="true">
                <el-menu-item :index="item.path" v-for="item in label" :key="item.id">
                  <template>
                    <span slot="title">{{item.name}}</span>
                  </template>
                </el-menu-item>
              </el-menu>
            </div>
          </el-drawer>
          <div class="mb-logo">
            <img src="../assets/bobo1.png" alt="">
          </div>
          <span class="iconfont icon-search1" style="font-size: 20px;"  @click="openSearch"></span>
        </div>
        <!-- 手机端导航栏结束 -->
      </el-col>
      <el-col class="container-search" :xs="0" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="container-search-text hidden-xs-only" @click="openSearch">
            <span>搜一搜</span>
            <span class="iconfont icon-sousuo"></span>
          </div>
      </el-col>
    </el-row>
    <!-- 搜索框 -->
    <div :class="isSearch ? 'search-box top' : 'search-box top0'">
      <input id="search-ipt" class="search-ipt" type="search" value="" placeholder="请输入内容">
      <el-button class="search-btn" icon="el-icon-search">提交</el-button>
      <el-button type="info" @click="openSearch">取消</el-button>
    </div>
    <!-- 内容主体区 -->
      <!-- 内容嵌套路由占位符 -->
    <el-row :gutter="0">
      <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
        <router-view></router-view>
      </el-col>
      <el-col :xs="0" :sm="8" :md="8" :lg="8" :xl="8">
        <aside-content></aside-content>
      </el-col>
    </el-row>
    <!-- footer部分 -->
    <el-footer>
      <div :class="show ? 'footer-content font-size' : 'footer-content'">
          Copyright © <a href="">波波资源</a>2022 备案号 <a href="">粤ICP备15012807号-1</a>
      </div>
    </el-footer>
  </div>
</template>
<script>
import AsideContent from './aside/aside-content.vue'
export default {
  components: {
    AsideContent
  },
  data () {
    return {
    	list: [],
    	label: [],
      isSearch: false,
      // activeIndex: '全部'
      activePath: '/category/all',
      // 屏幕宽度
      screenWidth: null,
      show: false,
      drawer: false
    }
  },
  created () {
  	this.getList()
    //页面初始化获取页面的宽度,小于500 show为true
    this.screenWidth = document.documentElement.clientWidth
    if (this.screenWidth <= 768) {
      this.show = true
    } else {
      this.show = false
    }
  },
   // <!--在watch中监听实时宽-->
  watch: {
    screenWidth (val) {
      let that = this;
      console.log("实时屏幕宽度：",val, that.screenWidth);
      if (that.screenWidth <= 768) {
         that.show = true
      } else {
        that.show = false
      }
      console.log(that.show)
    }
  },
  // 在页面mounted时，挂载window.onresize方法：
  mounted() {
    let that = this;
    // <!--把window.onresize事件挂在到mounted函数上-->
    window.onresize = () => {
      return (() => {
        window.fullWidth = document.documentElement.clientWidth
        that.screenWidth = window.fullWidth // 宽
      })()
    }
  },
  methods: {
    async getList () {
      const { data: res } = await this.$http.get('/test')
      // console.log(res)
      if (res.user.status !== 200) {
        return this.$message.error('获取数据失败')
      }
      // 文章信息列表
      this.list = res.user.data
      this.label = res.label.data
      console.log(this.list,this.label)

    },
    // 打开和关闭搜索框
    openSearch () {
      this.isSearch = !this.isSearch
    }
  }
}
</script>
<style lang="less" scoped>
  .container {
  	height:  100%;
    // max-width: 1200px;
    margin: 0 auto;
    background-color: #f5f5f5;
	}
  .middle-main {
    display: flex;
    justify-content: flex-start;
  }
  a {
    display: block;
    line-height: 0;
    height: 60px;
    margin: 0;
    padding: 0;
    border: 0;
  }
  .top-box {
    height: 117px;
  }
  .container-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 110px;
    background-color: #fff;
    margin-bottom: 5px;
    padding: 50px 5px 0 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, .8);
    z-index: 99;
  }
  // 手机端导航栏开始
  .mobile-nav {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .mb-logo {
    width: 60px;
    height: 30px;
  }
  .mb-logo img {
    width: 100%;
    height: 100%;
  }
  // .mob-nav {
  //   // width: 100%;
  //   // height: 100%;
  //   // background-color: #000 !important;
  //   opacity: .9;
  // }
  .mob-nav-box {
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .9;
  }
  .mob-nav-box-list {
    display: flex;
    flex-direction: column;
  }
  // ---手机端导航栏结束
  .container-logo {
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    font-size: 14px;
    color: #ccc;
  }
  .container-search {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 58px;
  }
  .container-search-text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    border: 1px solid #ccc;
    border-radius:30px;
    font-size: 14px;
    color: #999;
    cursor: pointer;
  }
  .container-search-text span {
    padding-left: 10px;
  }
  .el-menu-demo {
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    border-bottom: 0 !important;
  }
  .search-box {
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 47px;
    padding: 20px 50px 20px 50px;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, .8);
    opacity: .9;
    z-index: 33;
  }
  .top {
    top: 116px;
    transition: top 1s;
  }
  .top0{
    top: -87px;
    transition: top 0.5s;
  }
  .search-ipt {
    width: 60%;
    height: 100%;
    border: 1px solid #ff9900;
    // border-right: 0;
    border-radius: 5px 0 0 5px;
  }
  .search-ipt:focus {
    outline: none;
    box-shadow: 0 0 8px rgba(255, 153, 0, .8);
  }
  .search-btn {
    background-color: #ff9900;
    border: 2.5px solid #ff9900;
    border-left: 0;
    border-radius: 0 4px 4px 0;
  }
  .search-close {
    position: relative;
    top: -20px;
    right: -5%;
    height: 22px;
    background-color: #f5f5f5;
    border: 1px solid #ff9900;
    border-radius: 5px;
    padding: 2px;
    color: #666;
  } 
  .el-footer {
    background-color: #f5f5f5;
  }
  .footer-content {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;
    padding: 20px;
    overflow: hidden;
    color: #666;
    padding: 10px 0;
  }
  .footer-content a{
    padding: 0 5px;
    line-height: 1.4;
  }
  .font-size {
    font-size: 12px;
  }
</style>
