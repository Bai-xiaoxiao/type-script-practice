// interface 接口 可以从外部引入，更加的灵活，更适用于代码的模块化
// 类似于声明一个对象
function printLabel(obj: { label: string, age: number }) {
    console.log(obj.label);
}
let myObj = { label: "字符串", age: 18 }; // 必须具有label和age属性，且属性类型也要相同
printLabel(myObj);


// 可选属性 如果有时候我需要不传入某个属性呢 这有利于写公用的接口 有些需要有些不需要，类型也有规定
interface noMustObj {
    color?: string, // color可以是string类型或者undefine 也就是说：可以没有color， 但是如果有color属性就必须是string
    age?: number
}
// 看一个例子
function noMust(obj: noMustObj): noMustObj{
    // Error: Property 'color1' does not exist on type 'noMustObj'
    // console.log(obj.color1) 这里也可以防止拼写错误带来的bug
    return {
        age: 1
    }
}
noMust({
    color: '123'
})

// 只读属性
interface read {
    readonly name: string,
    age: number
}
let readObgj: read = {
    name: '123',
    age: 18,
}
// readObgj.name = 1; Error 只读属性不能修改
// readObgj.age = '123' 不能为字符串
readObgj.age = 123

// 数组的只读属性
let readArr: ReadonlyArray<number> = [1,2,3];
// readArr.push(1); Error

// 任意类型的属性
interface anyObj {
    name: string,
    [propName: string]: any // 我可以任意声明属性，只要不是name，其他什么类型都可以
}
let an: anyObj = {
    name: '1',
    age: 123123
}

// 函数类型的interface
// 下面两种写法一样
interface fun {
    (name: string, age: number): boolean
}
let fun1: fun = function(){
    return true
};
fun1('名字',1)
function fun2(name: string, age: number): boolean{
    return true
}

// 定义索引类型
interface indexSure {
    [xx: number]: string
}
// let arr: indexSure = [1, 2]; Error
let arr: indexSure = ['a', 'b']; // 传入下标为number 值为string

// 定义只读的索引值
interface readIndex {
    readonly [index: number]: string
}
// 等同于如下写法
// let readArr2: ReadonlyArray<string> = ['a', 'b'];
let readArr2: readIndex = ['a', 'b'];
// readArr2.push(1) Error

// 继承interface
interface parent {
    name: string,
}
// 也可以继承多个
// interface child extends parent1, parent2
interface child extends parent {
    age: number
}
let child: child = {
    name: '132',
    age: 123
}


