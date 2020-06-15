// 指定模板，对象需要使用到对应的类型来指定每个键值是否符合要求
interface ajaxUser {
  url: string,
  type: string,
  data: object,
  success: Function,
}


const ajax = (obj: ajaxUser) => {
  let xhr = new XMLHttpRequest(),
  type: string = obj.type.toUpperCase(),
  data = obj.data,
  url: string = type === 'GET' ? getParams(obj.url, data) :  obj.url

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      obj.success(xhr.responseText)
    }
  }

  xhr.open(type, url)
  // 对于原生send方法也会检测参数是否符合规则
  xhr.send(JSON.stringify(data))
}

const getParams = (url: string, data: object): string => {
  let str = ''
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const item = data[key];
      str === '' ? str += `?${key}=${item}` : str += `&${key}=${item}`
    }
  }
  return str
}

ajax({
  url: '123',
  type: 'get',
  data:{
    name: 123
  },
  success: (res) => {
    console.log(res);
  },
  // 没有定义error不能使用
  // error: (err) => {
  //   console.log(err);
  // }
})