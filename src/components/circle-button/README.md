| category | type | title | subittle |
| --- | --- | --- | --- |
| Components | General | CircleButton | 打卡button |

头像组件

## 何时使用

开始打卡，结束打卡

## API

Avatar的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 是否必传 |
| --- | --- | --- | --- | --- |
| text | 文字说明，开始打卡或结束打卡 | String | - | true |
| time | 开始打卡或结束打卡的时间 | String | - | true |
| click | 点击头像click事件 | function | - | false |

示例：
``` js
<circle-button text="开始打卡" time="19:02:03" @click="handleClick"></circle-button>
```
