## Angular UI Boilerplate using Ant Design

#### References:

- Ant Design: https://ng.ant.design/components/overview/en
- ngx-loading-bar: https://aitboudad.github.io/ngx-loading-bar
- Boxicons: https://boxicons.com

Edit your theme

```js
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
```
