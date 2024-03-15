# React Component TailwindCSS + Next.js Template

This is a template for quickly building React components library, using TailwindCSS to describe components UI and Next.js to build example sites.

## Quick Start

You can directly Fork or use this template.

Then, you need to change the package name, depending on what your component is.

**You need to globally replace `rc-template` with your new package name in the project.**

In the `demo` directory, there is an example site where you can test your component and write documentation for it.

## Using TailwindCSS

The component uses TailwindCSS for description, so there are two scenarios when using the component you developed.

First, if the project uses TailwindCSS, then you need to tell the user to add the component library's file directory in `tailwind.config.js`.

```js
// tailwind.config.js

module.exports = {
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    './node_modules/<YOUR_LIB_NAME>/dist/*.js', // Add here
  ],
}
```

Second, if the project does not use TailwindCSS, then you need to tell the user that they need to import the compiled css file into the project.

```js
import '<YOUR_LIB_NAME>/dist/index.css'
```

or

```css
@import '<YOUR_LIB_NAME>/dist/index.css';
```

## License

2024 © Innei, Released under the MIT License.

> [Personal Website](https://innei.ren/) · GitHub [@Innei](https://github.com/innei/)