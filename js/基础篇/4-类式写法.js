var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ts支持类式写法
// 平时少写这种，带过
var Person = /** @class */ (function () {
    function Person(msg) {
        this.name = msg;
    }
    Person.prototype.say = function () {
        return this.name;
    };
    return Person;
}());
// 说明，以上写法等同于
function Person2(msg) {
    this.name = msg;
}
Person2.prototype.say = function () {
    return this.name;
};
// 类的继承
var animal = /** @class */ (function () {
    function animal() {
    }
    animal.prototype.move = function (msg) {
        if (msg === void 0) { msg = 0; }
        return msg;
    };
    return animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dog.prototype.bark = function () {
        return "i'm the dog";
    };
    return dog;
}(animal));
var wangwang = new dog();
wangwang.bark();
wangwang.move();
// 关于private 私有的
var privateTest = /** @class */ (function () {
    function privateTest(msg) {
        this.name = msg;
    }
    return privateTest;
}());
// new privateTest('我是name').name; Error name是私有的，不能外部访问
// 关于readonly 只读 可以初始化，但是不能修改
var readonlyTest = /** @class */ (function () {
    function readonlyTest(msg) {
        this.name = msg;
    }
    return readonlyTest;
}());
var dad = new readonlyTest('我是name');
// dad.name = 123; Error
// 类于接口一起使用
var point = /** @class */ (function () {
    function point() {
    }
    return point;
}());
var point3 = {
    x: '1',
    y: 1,
    z: [1, 2]
};
