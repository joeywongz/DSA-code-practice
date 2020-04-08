// 快速排序，时间复杂度：O(nlogn)


/**
 * 快速排序（这种写法容易报错： RangeError: Maximum call stack size exceeded）
 * @param {乱序数组} arr 
 */
function quicksort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        let pivot = arr[0];
        let [less, greater] = [[], []];
        arr.forEach(element => {
           element <= pivot ? less.push(element) 
           : greater.push(element);
        });
        return [...quicksort(less), pivot, ...quicksort(greater)];
    }
}



function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        let pivot = arr.splice(0, 1)[0];
        let [less, greater] = [[], []];
        arr.forEach(element => {
           element <= pivot ? less.push(element) 
           : greater.push(element);
        });
        return quickSort(less).concat[[pivot], quickSort(greater)];
    }
}