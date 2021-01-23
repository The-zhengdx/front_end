# CSS知识点
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
text-decoration属性是一下三个属性的缩写
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
## 布局