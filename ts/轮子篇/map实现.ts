/**
 *实现map方法
 *
 * @param {Array<any>} array
 * @param {Function} callback
 * @returns {Array<any>}
 */
function map(array: Array<any>, callback: Function): Array<any> {
  let result: Array<any> = []

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    result.push(callback(item, i))
  }

  return result
}

map([1, 2, 3], (item: any, index: Number): Number => {
  return item + 1
})