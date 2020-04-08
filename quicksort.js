// 快速排序，时间复杂度：O(nlogn)
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