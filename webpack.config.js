const HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
	entry: "./src/app.js",
	output: {
		path: __dirname + "/dist/build",
		filename: "bundle.js",
		assetModuleFilename: "images/[name].[ext]",
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "src"),
		},
		compress: true,
		port: 8000,
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
		}),
	],
};
