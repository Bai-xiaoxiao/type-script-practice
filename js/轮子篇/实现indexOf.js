/**
 *
 *
 * @param {any[]} array
 * @param {*} target
 * @returns {Number}
 */
function indexOf(array, target) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
            break;
        }
    }
    return -1;
}
indexOf([1, 2, { name: 123 }, null, undefined], 1);
