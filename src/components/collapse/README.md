| category | type | title | subittle |
| --- | --- | --- | --- |
| Components | General | Collapse | 出勤 |

Icon组件

## 何时使用

icon

## API

Avatar的属性说明如下：

| 属性 | 说明 | 可选值 | 类型 | 默认值 | 是否必传 |
| --- | --- | --- | --- | --- | --- |
| attendance | 出勤对象 | - | Object | - | true |
| index | 对象索引 | - | Number | - | false |

示例：
``` js
    <Collapse v-for="(items, key, index) in 数据" :key="index" :attendance="items" :index="index"/>
```
