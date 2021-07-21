# element-theme
[![Build Status](https://travis-ci.org/ElementUI/element-theme.svg?branch=master)](https://travis-ci.org/ElementUI/element-theme)
[![npm](https://img.shields.io/npm/v/element-theme.svg)](https://www.npmjs.com/package/element-theme)

> Theme generator cli tool for Element.

![](./media/element.gif)

> The current version is compatible with element-ui@2.x. For element-ui@1.x, please check out the legacy branch.

## Installation
```shell
# node variables === 10.0.0
npm i
npm i element-theme -g

# 生成 element-variables.scss 文件
et -i

# 编译 element-variables.scss 文件，生成 theme 文件
et

# 增加自定义前缀类名（如果需要）
npx gulp css-wrap
```

## CLI
```shell
# init variables file
et --init [file path]

# watch then build
et --watch [--config variable file path] [--out theme path]

# build
et [--config variable file path] [--out theme path] [--minimize]
```

## Node API
```javascript
var et = require('element-theme')

// watch mode
et.watch({
  config: 'variables/path',
  out: 'output/path'
})

// build
et.run({
  config: 'variables/path',
  out: 'output/path',
  minimize: true
})
```

## Options
### config
Variable file path, default `./element-variables.css`.

### out
Theme output path, default `./theme`.

### minimize
Compressed file.

### browsers
set browsers, default `['ie > 9', 'last 2 versions']`.

### watch
watch variable file changes then build.

### components
A lists of components that you want to generate themes for.  All by default.

## Config
You can configure some options in `element-theme` by putting it in package.json:
```json
{
  "element-theme": {
    "browsers": ["ie > 9", "last 2 versions"],
    "out": "./theme",
    "config": "./element-variables.css",
    "theme": "element-theme-chalk",
    "minimize": false,
    "components": ["button", "input"]
  }
}
```

## License
MIT
