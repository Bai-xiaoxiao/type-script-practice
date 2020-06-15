// 限制参数类型
function hw(person) {
    return 'hello' + person;
}
document.body.innerHTML = hw('必须传限制的类型');
// 这里的Person对应上面规定的类型
function people(person) {
    return "\u540D\u5B57\u662F" + person.name + ",\u5E74\u9F84\u662F" + person.age;
}
// vs也自带了提示，类型不正确会有下划线提示
// people({
//     name: '1',
//     age: 1
// })
