| category | type | title | subittle |
| --- | --- | --- | --- |
| Components | General | Button | 按钮 |

Button组件

## 何时使用

按钮

## API

Avatar的属性说明如下：

| 属性 | 说明 | 可选值 | 类型 | 默认值 | 是否必传 |
| --- | --- | --- | --- | --- | --- |
| size | 按钮大小 | small / default | String | default | false |
| type | 按钮类型 | primary / success / error | String | - | false |
| isFill | 背景是否填充 | - | Boolean | false | false |
| round | 是否圆角按钮 | - | Boolean | false | false |
| disabled | 设置按钮为禁用状态 | - | Boolean | false | false |
| long | 设置后按钮长为100% | - | Boolean | false | false |
| click | 点击头像click事件 | - | function | - | false |

示例：
``` js
<Button size="small" type="primary" isFill round long>急速打卡</Button>
```
