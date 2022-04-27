<template>
  <div class="container">
    <el-row :gutter="0">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      	<div class="content-title">
          <h3>全部内容</h3> 
        </div>
        <div class="content" v-for="item in list" :key="item.id" @click="openArticle(item.id)">
          <div class="content-img">
          	<img src="../../assets/女孩3.png" alt="">
          </div>
          <div class="content-main">
            <div class="content-main-title">
              <h2>{{ item.title }}</h2>
            </div>
            <div class="content-main-des">
              <el-row :gutter="10">
                <el-col :xs="22" :sm="16" :md="16" :lg="16" :xl="16">
                  <div class="content-main-des_info">
                    <span class="hidden-xs-only">作者: {{item.author.author_name}}</span>
                    <span class="hidden-xs-only">{{item.create_time}}</span>
                    <span>阅读: ({{item.browse_count}})</span>
                    <span>评论: ({{item.comments_count}})</span>
                    <span>点赞: ({{item.thumbs_up_count}})</span>
                  </div>
                </el-col>
                <el-col :xs="2" :sm="8" :md="8" :lg="8" :xl="8">
                  <div class="content-main-des-label">
                    <span class="label hidden-xs-only">标签: {{item.classify}}</span>
                    <span :class="hasExisted(item.id) ? 'iconfont icon-zan': 'iconfont icon-zan1' " @click.stop="()=> {{item.thumbs_up_count ++};zan(item.id)}"></span>
                  </div> 
                </el-col>
              </el-row>
            </div>
            <div class="content-main-text hidden-xs-only">
              {{item.content}}
            </div>
          </div>
        </div>
      </el-col>
      <!-- <el-col :xs="0" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="content-aside hidden-xs-only">
          <div class="hot-Recommend">
            <a href="" target="_blank">
              <strong>强烈推荐</strong>
              <h2>波波资源</h2>
              <p>蓝海世界</p>
            </a>
          </div>
        </div>
      </el-col> -->
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 点赞数据
      clickTup: [],
      list: []
    }
  },
  created () {
    this.getArticle()
  },
  methods: {
    // 点赞与否
    zan (id) {
      this.clickTup.push(id)
      this.isZan = !this.isZan
    },
    // set 去重
    hasExisted (id) {
      const set = new Set(this.clickTup)
      if (set.has(id)) {
        return true
      } else {
        return false
      }
    },
    async getArticle () {
      const { data: res } = await this.$http.get('/test')
      if (res.user.status !== 200) {
        return this.$message.error('获取数据失败')
      }
      // 文章信息列表
      this.list = res.user.data
      console.log(this.list)
    },
    openArticle (id) {
      this.$router.push({
        path: '/article/detail',
        query: {
          id: id
        }
      })
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
	.content-title h3 {
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
    cursor: default;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
  }
  // .content-main-des {

  // }
  .content-main-title h2 {
    font-size: 16px;
    color: #555;
    cursor: pointer;
  }
  // .content-main-des {
  //   // display: flex;
  //   // justify-content: center;
  // }
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
  .content-aside {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid red;
  }
  .hot-Recommend {
    height: 180px;
    background-color: #fff;
  }
  .hot-Recommend a {
    display: block;
    width: 100%;
    height: 100%;
    // background-color: purple;
  }
</style>
