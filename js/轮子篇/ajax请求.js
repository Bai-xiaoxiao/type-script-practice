var ajax = function (obj) {
    var xhr = new XMLHttpRequest(), type = obj.type.toUpperCase(), data = obj.data, url = type === 'GET' ? getParams(obj.url, data) : obj.url;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            obj.success(xhr.responseText);
        }
    };
    xhr.open(type, url);
    // 对于原生send方法也会检测参数是否符合规则
    xhr.send(JSON.stringify(data));
};
var getParams = function (url, data) {
    var str = '';
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            var item = data[key];
            str === '' ? str += "?" + key + "=" + item : str += "&" + key + "=" + item;
        }
    }
    return str;
};
ajax({
    url: '123',
    type: 'get',
    data: {
        name: 123
    },
    success: function (res) {
        console.log(res);
    },
});
