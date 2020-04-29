# vetur

```
{
    //.vue文件template格式化支持，并使用js-beautify-html插件
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    //js-beautify-html格式化配置，属性换行不强制、每行120字符
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            "wrap_line_length": 120,
            "wrap_attributes": "auto",
            "end_with_newline": false
        }
    },
    "vetur.format.defaultFormatter.js": "prettier",
    //根据文件后缀名定义vue文件类型
    "files.associations": {
        "*.vue": "vue"
    },
    //配置 ESLint 检查的文件类型
    "eslint.validate": ["javascript", "javascriptreact"],
    //保存自动格式化
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        //保存时eslint自动修复错误
        "source.fixAll.eslint": true
    }
}
```

# prettier

```
module.exports = {
    // tab 缩进大小,默认为 2
    tabWidth: 2,
    useTabs: false,
    // 使用分号, 默认 true
    semi: false,
    // 使用单引号,
    singleQuote: true,
    // 行尾逗号,
    TrailingCooma: 'none',
    // 空格
    bracketSpacing: true,
    // 箭头函数参数括号 默认 avoid 可选 avoid| always
    // avoid 能省略括号的时候就省略 例如 x => x
    // always 总是有括号
    arrowParens: 'always',
}
```

# eslint

```
module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        //强制使用单引号
        quotes: ['error', 'single'],
        //强制不使用分号结尾
        semi: ['error', 'never']
    }
}
```
