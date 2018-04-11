| category | type | title | subittle |
| --- | --- | --- | --- |
| Components | General | Steps | 步骤条 |

Steps组件

## 何时使用

步骤条

## API

Avatar的属性说明如下：

| 属性 | 说明 | 可选值 | 类型 | 默认值 | 是否必传 |
| --- | --- | --- | --- | --- | --- |
| status | 状态 | wait / finish | String | wait | false |
| title | 标题 | - | String | - | false |

示例：
``` js
<Steps>
    <Step v-bind="stepProps[0]">
        <div class="first-step-wrapper">
            <span class="f20 g0">打卡时间09：30</span>
        </div>
    </Step>
    <step v-bind="stepProps[1]">
        <div class="circle-button-wrapper">
            <circle-button v-bind="circleButtonProps"></circle-button>
        </div>
    </step>
</Steps>
```
