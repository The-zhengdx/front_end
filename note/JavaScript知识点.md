# JavaScript知识点
### 1. 变量提升
JavaScript引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行的执行。这造成的结果是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升。
```JavaScript
console.log(a);
// 输出undefined，而不是报错
var a = 1;
```
相当于下面这样
```JavaScript
var a;
console.log(a);
a = 1;
```

### 2. switch结构使用严格相等(===)来匹配
```JavaScript
var a = 1;
switch (a) {
    case true:
        console.log("发生了类型转换");
        break;
    default:
        console.log("没有发生类型转换")
}
// 输出"没有发生类型转换"
```

### 3. 数据类型
1. number
2. string
3. boolean
4. undefined
5. null
6. object
7. Symbol(ES6新增类型)
#### 3.1 null、undefined、boolean
```JavaScript
// null表示一个空对象，转为数值时为0
// undefined是一个表示此处无定义的原始值，转为数值时为NaN
Number(null) // 0
Number(undefined) // NaN

// 转换boolea值的规则
undefined, null, false, 0, NaN, ""(空字符串)
以上6个值转为boolea值为false，其余全为true
注意：[](空数组)、 {}(空对象)对应的boolean值为true
```
#### 3.2 number
JavaScript内部所有数字都是以64位浮点数形式存储，也就是说JavaScript底层没有整数，所有数字都是小数。某些运算只有整数才能完成（位运算），此时JavaScript会自动把64位浮点数转成32位整数。
```JavaScript
// 浮点数是不精确的值
0.1 + 0.2 === 0.3 // false
0.3 / 0.1 // 2.9999999999999996
(0.3 - 0.2) === (0.2 - 0.1) // false
```

### 4. 确定值类型的三种方法
1. typeof运算符
```JavaScript
typeof 123 // "number"
typeof "123" // "string"
typeof false // "boolean"

function f() {}
typeof f // "function"

typeof undefined // "undefined"

typeof x // "undefined" 对于没有声明的变量返回undefined
// 错误写法
if (x) { // ReferenceError: x is not defined
    // ...
}
// 正确写法
if (typeof x === "undefined") {
    // ...
}

typeof window // "object"
typeof {} // "object"
typeof [] // "object"

typeof null // "object" 历史原因，兼容旧语法
```
2. instanceof运算符
3. Object.prototype.toString方法

### 函数
JavaScript中函数是一等公民，一等公民的意思是：函数可赋值给变量，可作为函数参数，可作为函数返回值

JavaScript中函数三种定义方式
- 函数声明
```javascript
function f(argument) {
    // 函数体
}
// 与变量声明类似，函数声明也会被提升到头部
// 不需要分号
```
- 函数表达式
```javascript
var f = function(argument) {
    // 函数体
};
// 等号后面是一个匿名函数
// 这种方式只会把"var f"提升到头部
// 需要分号
var f1 = function f2(argument) {
    //function body
}
// f1是真正的函数名，f2函数名只能在函数体内部用
```
- 函数对象构造函数
```javascript
var f = new Function(
    "",
    "",
    ""
);
// 最后一个参数为函数体，前面的均为函数参数
// 需要分号，此法不直观，很少使用
```
