module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: "less-loader",
        options: {
          modifyVars: {
            "primary-color": "#1a1a1a",
            "link-color": "#1a1a1a",
            "border-radius-base": "2px",
          },
          javascriptEnabled: true,
        },
      },
    ],
  },
};
