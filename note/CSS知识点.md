# CSS知识点
## css级联规则(样式优先级)
更加具体的选择器的优先级更高，同优先级的选择器，后声明的选择器覆盖先声明的选择器

## 选择器优先级计算规则
千位：如果声明在 style 的属性（内联样式）则该位得一分。这样的声明没有选择器，所以它得分总是1000。
百位：选择器中包含ID选择器则该位得一分。
十位：选择器中包含类选择器、属性选择器或者伪类则该位得一分。
个位：选择器中包含元素、伪元素选择器则该位得一分。

## 当使用选择器列表时，只要有一个选择器无效，那么整条规则都会失效
```css
h1 {
    color: red;
}
/* id选择器错误，规则失效，不影响其他规则 */
..special {
    color: red
}
/* id选择器错误，整条规则都失效，h1受影响 */
h1, ..special {
    color: red;
}
```

## 浏览器加载网页的步骤
1.浏览器载入HTML文件（比如从网络上获取）。
2.将HTML文件转化成一个DOM（Document Object Model），DOM是文件在计算机内存中的表现形式。
3.接下来，浏览器会拉取该HTML相关的大部分资源，比如嵌入到页面的图片、视频和CSS样式。JavaScript则会稍后进行处理，简单起见，同时此节主讲CSS，所以这里对如何加载JavaScript不会展开叙述。
4.浏览器拉取到CSS之后会进行解析，根据选择器的不同类型（比如element、class、id等等）把他们分到不同的“桶”中。浏览器基于它找到的不同的选择器，将不同的规则（基于选择器的规则，如元素选择器、类选择器、id选择器等）应用在对应的DOM的节点中，并添加节点依赖的样式（这个中间步骤称为渲染树）。
5.上述的规则应用于渲染树之后，渲染树会依照应该出现的结构进行布局。
6.网页展示在屏幕上（这一步被称为着色）

## 文本
```css
/* 字体样式 */
/* color属性设置元素的前景内容的颜色(通常指文本，或者是通过text-decoration属性放置在文本上方或下方的线) */
color: red;
/* 设置字体种类，浏览器只会把当前机器上可用的字体应用到指定的元素上，如果指定的所有字体在当前机器上都不可用，则会使用浏览器默认字体 */
font-family: kaiti, arial;
/*
字体大小
px: 绝对大小
em: 1em等于当前元素的父元素的字体大小
rem: 1rem等于根元素字体大小
字体大小默认继承父元素字体大小
文档根元素(html)字体大小默认16px
*/
font-size: 15px;
/* 设置字体样式，normal普通字体，italic斜体，oblique普通文本倾斜 */
font-style: normal;
/* 设置字体粗细 */
font-weight: bold;
/* 字体转换 */
text-transform: capitalize;
/*
字体装饰
text-decoration属性是以下三个属性的缩写
text-decoration-line
text-decoration-style
text-decoration-color
*/
text-decoration: underline;
/*
文字阴影
第一个值设置水平偏移
第二个值设置垂直偏移
第三个值设置模糊半径
第四个值设置阴影颜色
*/
text-shadow: 4px 4px 5px red;
```

## 盒模型
Content box: 这个区域是用来显示内容，大小可以通过设置 width 和 height.
Padding box: 包围在内容区域外部的空白区域； 大小通过 padding 相关属性设置。
Border box: 边框盒包裹内容和内边距。大小通过 border 相关属性设置。
Margin box: 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 margin 相关属性设置。

## 布局