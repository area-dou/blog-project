// 导入json
const  test = require ('./src/assets/data/test.json')
// 导入json
// const label = require ('./src/assets/data/lalel.json');
module.exports = {
	publicPath: '/',// 根路径
	outputDir: 'dist',// 构建输出目录
	assetsDir: 'assets',// 静态资源目录
	lintOnSave: false, // 是否开启检测
	runtimeCompiler: true,
	devServer: {
		open: true,
		host: 'localhost',
		port: 8080,
		https: false,
		hotOnly: false,
		proxy: {
			// 跨域配置
			'./api': {
				target: 'http://172.18.188.126:81',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		},
		before: app => {
		    http://localhost:8080/test
		    app.get('/test', (req,res) => {
		    	res.json(test)
		    })
	    },
	}
}