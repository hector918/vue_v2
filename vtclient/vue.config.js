module.exports = {
	runtimeCompiler: true,
	devServer: {
		proxy: 'http://127.0.0.1:3000',
	},
	"transpileDependencies": [
		"vuetify"
	]
}