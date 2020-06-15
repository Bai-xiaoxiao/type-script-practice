// interface 接口 可以从外部引入，更加的灵活，更适用于代码的模块化
// 类似于声明一个对象
function printLabel(obj) {
    console.log(obj.label);
}
var myObj = { label: "字符串", age: 18 }; // 必须具有label和age属性，且属性类型也要相同
printLabel(myObj);
// 看一个例子
function noMust(obj) {
    // Error: Property 'color1' does not exist on type 'noMustObj'
    // console.log(obj.color1) 这里也可以防止拼写错误带来的bug
    return {
        age: 1
    };
}
noMust({
    color: '123'
});
var readObgj = {
    name: '123',
    age: 18,
};
// readObgj.name = 1; Error 只读属性不能修改
// readObgj.age = '123' 不能为字符串
readObgj.age = 123;
// 数组的只读属性
var readArr = [1, 2, 3];
var an = {
    name: '1',
    age: 123123
};
var fun1 = function () {
    return true;
};
fun1('名字', 1);
function fun2(name, age) {
    return true;
}
// let arr: indexSure = [1, 2]; Error
var arr = ['a', 'b']; // 传入下标为number 值为string
// 等同于如下写法
// let readArr2: ReadonlyArray<string> = ['a', 'b'];
var readArr2 = ['a', 'b'];
var child = {
    name: '132',
    age: 123
};
