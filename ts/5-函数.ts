// 参数和返回值添加类型
function add(x: number, y: string): string { // ts本身可以判断返回值类型，通常省略它
    // 尽量不要使用number + string，虽然js有默认的类型转换，但这会导致一些错误
    return x + y
}

// 箭头函数
(x: number, y: number) => { return x + y }

// js中的参数都是可选的，来看这个
// add(9) Error 应有 2 个参数，但获得 1 个。
// 参数y要么不传，要传就只能是number
let optional = (x: number, y?: number) => {
    // return x + y 如果参数都是number类型，y可能未定义，number + undefined = NaN
    return x + 1
}
optional(1)

// 默认参数
// y为默认参数，当用户没有传递这个参数或传递的值是undefined时，y使用默认值
// 不过，要传y的时候，传入的值要和默认值的类型一致 类型一致 类型一致
function add2(x: number, y = 1) {
    return x + y
}
add2(1)

// 第一个参数是默认参数-可选参数时
// Error 必选参数不能位于可选参数后
// function add3(x?: number, y: number){
//     return x + y
// }

// 传入无限个参数
// ...后面的y是接收后面所有参数的一个数组
function add4(x: string, ...y: string[]){
    return x + y.join();
}
add4('1','2','3','4','5');