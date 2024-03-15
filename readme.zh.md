# React Component TailwindCSS + Next.js Template

这是一个用于快速搭建 React 组件的模板，使用了 TailwindCSS 描述组件 和 Next.js 搭建示例站点。

## 快速开始

你可以直接 Fork 或者 使用此模板。

然后，你需要更换 包的名称，这个取决你的组件是什么。

**你需要在项目中全局的替换 `rc-template` 到 你的更换的包名。**

在 `demo` 目录中，这是一个示例站点，你可以在这个站点中测试你的组件并且编写组件的文档。

## 使用 TailwindCSS

组件使用 TailwindCSS 去描述，那么在使用你开发的组件时会存在两种情况。

第一种，项目使用了 TailwindCSS，那么，你需要告诉使用方，在 `tailwind.config.js` 中添加组件库的文件目录。

```js
// tailwind.config.js

module.exports = {
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    './node_modules/<YOUR_LIB_NAME>/dist/*.js', // 添加这里
  ],
}
```

第二种，项目没有使用 TailwindCSS，那么你需要告诉使用方，需要在项目中引入打包后的 css 文件。

```js
import '<YOUR_LIB_NAME>/dist/index.css'
```

或者

```css
@import '<YOUR_LIB_NAME>/dist/index.css';
```

## License

2024 © Innei, Released under the MIT License.

> [Personal Website](https://innei.ren/) · GitHub [@Innei](https://github.com/innei/)
