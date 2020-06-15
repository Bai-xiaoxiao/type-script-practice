// ts的基础类型


// 布尔值
let isDone: boolean = false;

// 数字
let num: number = 1;
// let num: number = 0xf00d;
// let num: number = 0b1010;
// let num: number = 0o744;

// 字符串
let str: string = '1';

// 数组 数组里只能包含同一类型
let list: number[] = [1, 2, 3]; // 数字数组
let list2: string[] = ['1', '2']; // 数组内含字符串
let list3: Array<number> = [1, 2];
let list4: Array<string> = ['1', '2'];

// 元组Tuple 可以包含不同类型的数组 各元素的类型不必相同
let x: [string, number] = ['1', 2];
console.log(x[0].substr(1));
// console.log(x[1].substr(1)); 预警：number属性不存在substr方法

let y: [string, number]; // 也这样声明元组
y = ['1', 2];
// 2.6版本后元组无法越界访问了
// y[2] = '1'
// y[2] = 1

// 枚举enum 对js类型的一个补充 读法：恩姆
// 每个元素自增1，对应数字和字符串 数字从0开始
enum Color { Red, Green, Blue }
let c = Color.Red
// console.log(Color) 默认从0开始，Color[0] = "Red"      Color[Red] = 0
// {
//     0: "Red"
//     1: "Green"
//     2: "Blue"
//     Blue: 2
//     Green: 1
//     Red: 0
// }
// 或者这么写也是一样
enum Color2 { Red = 1, Green, Blue }
enum Color3 { Red = 3, Green, Blue }
// console.log(Color3)
// {
//     3: "Red"
//     4: "Green"
//     5: "Blue"
//     Blue: 5
//     Green: 4
//     Red: 3
// }


// any类型  比如接口或者第三方库返回的未知类型的数据 可以为任意类型 妇女之友 新手必备
let nosure: any = 4;
nosure = '字符串';
nosure = false;
nosure = [1,2];
nosure.tofixed(); // 这样代码会报错 使用方法需谨慎

let anyList: any[] = [1,true,"字符串"]; // 知道anyList是个数组，但不确定其中元素的类型，可以任意修改
anyList[0] = undefined;
anyList[1] = {
    name: '可以修改任意类型'
}

// void （英文：空白，缺乏，没有，无效的..）与any恰好相反,它什么都不是
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
// 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function noType(): void{
    console.log(21);
}

// null 类型
let u: null = null

// undefiend
let n: undefined = undefined
let unObj = {
    name: undefined
}
n = unObj.name // 只能是undefined

// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
// 除非设置 --strictNullChecks 然后null和undefined就只能赋值给void和它们各自  最好开启

// never类型 表示的是那些永不存在的值的类型
// 返回never的函数必须存在无法达到的终点
function error(msg: string): never{
    // console.log(132) 有终点，执行完就没了
    throw new Error('123');
}
function never2(): never{
    return error("Something failed"); // 返回上面的never函数
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
        // ...
    }
}

// object类型 object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型
// 使用object类型，就可以更好的表示像Object.create这样的API。例如：
let obj: object = {
    name: 1
}

// 类型断言  一般用于不确定的类型，因为程序员自己知道这究竟是什么，就可以断言它
let sm: any = 21;
let strSm: number = sm.length // 把sm当做string来看 相当于做了一次类型转换