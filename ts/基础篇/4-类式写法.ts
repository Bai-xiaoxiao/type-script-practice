// ts支持类式写法
// 平时少写这种，带过
class Person {
    name: string;
    constructor(msg: string){
        this.name = msg;
    }
    say(){
        return this.name
    }
}
// 说明，以上写法等同于
function Person2(msg){
    this.name = msg;
}
Person2.prototype.say = function(){
    return this.name
}


// 类的继承
class animal {
    move(msg: number = 0){ // number类型的参数，默认为0
        return msg
    }
}

class dog extends animal {
    bark(){
        return "i'm the dog"
    }
}

const wangwang = new dog();
wangwang.bark();
wangwang.move();

// 关于private 私有的
class privateTest {
    private name: string;
    constructor(msg: string){
        this.name = msg;
    }
}
// new privateTest('我是name').name; Error name是私有的，不能外部访问

// 关于readonly 只读 可以初始化，但是不能修改
class readonlyTest {
    readonly name: string;
    constructor(msg: string){
        this.name = msg;
    }
}
let dad = new readonlyTest('我是name');
// dad.name = 123; Error

// 类于接口一起使用
class point {
    x: string;
    y: number;
}
// 相当于接口继承接口一样的
interface point2 extends point {
    z: Array<number>
}

let point3: point2 = {
    x: '1',
    y: 1,
    z: [1,2]
}