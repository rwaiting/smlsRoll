# smlsRoll

Seamless rolling plug-ins in all directions

## 1. Getting Started

#### 1.1. Installation

The simplest method is to copy paste this snippet just before your closing `</body>` tag.

```html
<script src="./js/smlsRoll.js"></script>
```

#### 1.2. The Basics

```html
<!-- HTML -->
<div class="rollContainer">
    <div class="rollWrapper">
        <ul class="rollSource">
            <li class="rollItem">习近平同中央政治局常委集体瞻仰中共一大会址</li>
            <li class="rollItem">梦想，从这里启航|不忘初心，方能不辱门楣</li>
            <li class="rollItem">这个委员会啥来头?两次大事习近平都选择见他们</li>
            <li class="rollItem">赵克志任公安部党委书记|郭声琨任中央政法委书记</li>
            <li class="rollItem">审判大老虎这家法院最多 令计划周永康都在此领刑</li>
            <li class="rollItem">今年已有17地提高最低工资 四地破2000上海最高</li>
            <li class="rollItem">中国海警船时隔20日再巡钓鱼岛 日方无理警告</li>
            <li class="rollItem">黄河居然变清了?专家却称生态平衡可能因此遭破坏</li>
            <li class="rollItem">赛龙事件追踪:前副市长急返共青城 将召开发布会</li>
            <li class="rollItem">中韩关系这个重磅信号刚发布 韩网友沸腾:好消息!</li>
            <li class="rollItem">戒网瘾学校被指虐待学生 校方:不这样咋管住他们</li>
            <li class="rollItem">西安直飞成都航班突然全部取消 民航局已介入调查</li>
            <li class="rollItem">小学生长大后想抢银行 老师神回复:你同桌想当警察</li>
        </ul>
    </div>
</div>
```
```js
// JavaScript
var smlsroll = new smlsRoll(params);
```

## 2. Configuration
Passing a configuration object to `ScrollReveal()` changes the defaults for all reveals, and passing `reveal()` a configuration object customizes that reveal set further.

#### 2.1. Practical Example

```js
var smlsroll = new smlsRoll({
    direction: 'bottom'
});
```

#### 2.2. The Starting Defaults

```js
// Rolling direction: 'bottom', 'left', 'top', 'right'
direction: 'top',

// The scrolling speed, the smaller the roll, the faster it rolls
speed: 30,

// The default value
container: 'rollContainer',
wrapper: 'rollWrapper',
source: 'rollSource',
copy: 'rollCopy',
item: 'rollItem',
boxWidth: 300,
boxHeight: 300,
boxLength: ''

```
