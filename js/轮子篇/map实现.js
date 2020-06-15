/**
 *实现map方法
 *
 * @param {Array<any>} array
 * @param {Function} callback
 * @returns {Array<any>}
 */
function map(array, callback) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        result.push(callback(item, i));
    }
    return result;
}
map([1, 2, 3], function (item, index) {
    return item + 1;
});
