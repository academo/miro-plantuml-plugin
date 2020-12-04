const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const path = require("path");

module.exports = {
	entry: {
		main: "./src/main.ts",
		editor: "./src/editor.ts",
		authBanner: "./src/auth-banner.ts",
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [{ loader: "ts-loader", options: {} }],
				exclude: /node_modules/,
			},
			{
				test: /\.svg/i,
				use: [
					{
						loader: "raw-loader",
						options: {
							esModule: false,
						},
					},
				],
			},
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
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			chunks: ["main"],
			template: "./src/template.html",
		}),
		new HtmlWebpackPlugin({
			filename: "auth-banner.html",
			chunks: ["authBanner"],
			template: "./src/template.html",
		}),
		new HtmlWebpackPlugin({
			filename: "editor.html",
			chunks: ["editor"],
			template: "./src/editor.html",
		}),
		new ImageMinimizerPlugin({
			minimizerOptions: {
				plugins: [
					[
						"imagemin-svgo",
						{
							plugins: [
								{
									removeViewBox: false,
									removeXMLNS: true,
								},
							],
						},
					],
				],
			},
		}),
	],
	devServer: {
		https: true,
		disableHostCheck: true,
	},
};
