// 限制参数类型
function hw(person: string){
    return 'hello' + person
}

document.body.innerHTML = hw('必须传限制的类型')

// 关于对象参数，每个键值的对应类型
interface Person {
    name: string,
    age: number
}

// 这里的Person对应上面规定的类型
function people(person: Person){
    return `名字是${person.name},年龄是${person.age}`
}

// vs也自带了提示，类型不正确会有下划线提示
// people({
//     name: '1',
//     age: 1
// })