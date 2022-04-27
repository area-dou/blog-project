<template>
  <div>
    <div class="content-aside hidden-xs-only">
      <a href="" target="_blank" class="hot-Recommend">
        <div class="hot-Recommend-list">
          <strong>强烈推荐</strong>
          <h2>波波资源</h2>
          <p>蓝海世界</p>
        </div>
      </a>
      <div class="hot-label">
        <div class="hot-label-header">热门标签</div>
        <ul class="hot-label-list">
          <li>热门</li>
          <li>热门</li>
          <li>热门</li>
          <li>热门</li>
          <li>热门</li>
          <li>热门</li>
          <li>热门</li>
          <li>热门</li>
          <li>热门</li>
          <li>热门</li>
        </ul>
      </div>
      <div class="date">
        <div class="dateClassify">时间归档</div>
        <ul class="dateClassify-lsit">
            <li><a href="">2022年04月</a></li>
            <li><a href="">2022年04月</a></li>
            <li><a href="">2022年04月</a></li>
            <li><a href="">2022年04月</a></li>
            <li><a href="">2022年04月</a></li>
            <li><a href="">2022年04月</a></li>
          </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  created () {},
  methods: {}
}

</script>
<style lang="less" scoped>
  .content-aside {
    width: 98%;
  }
.hot-Recommend {
  display: block;
  height: 140px;
  background-color: #fff;
  padding: 0 0 0 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.hot-Recommend-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}
.hot-Recommend:hover {
  background-color: #fff;
  border: 1px solid #9900CC;
   border-radius: 5px;
}
.hot-Recommend-list strong {
  background-color: #9900CC;
  width: 30%;
  text-align: center;
  padding: 10px;
  color: #fff;
}
.hot-Recommend-list h2,
.hot-Recommend-list p {
  margin-top: 10px;
  color: #666;
}
.hot-label-header {
  height: 30px;
  line-height: 30px;
  margin-top: 10px;
  padding: 10px;
  // background-color: #fff;
  border: 1px solid #ccc;
  // border-radius: 5px;
  font-weight: bold;
  color: #666;
}
ul,li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.hot-label-list {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  background-color: #fff;
  padding: 10px;
  // border: 1px solid #ccc;
}
.hot-label-list li {
  width: 30%;
  background-color: #f5f5f5;
  font-size: 14px;
  text-align: center;
  border: 3px solid #fff;
  color: #666;
}
.dateClassify {
  height: 30px;
  line-height: 30px;
  margin-top: 10px;
  padding: 10px;
  // background-color: #fff;
  border: 1px solid #ccc;
  // border-radius: 5px;
  font-weight: bold;
  color: #666;
}
.dateClassify-lsit {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  padding: 10px 0;
  color: #666;
}
.dateClassify-lsit li {
  display: flex;
  justify-content: center;
  width: 40%;
  background-color: #f5f5f5;
  border: 2px solid #fff;
  text-align: center;
  font-size: 14px;
  // color: #666;
}
</style>
