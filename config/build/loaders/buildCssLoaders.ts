import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function buildCssLoader(isDev: boolean) {
    
}
module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};