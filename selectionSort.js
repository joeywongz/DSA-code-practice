//选择排序 空间复杂度 O(n*n)
function findSmallest(arr) {
    let smallestVal = arr[0];
    let smallestIdx = 0;
    for (let i = 1; i < arr.length; i++) {
        if (smallestVal > arr[i]) {
            smallestVal = arr[i]
            smallestIdx = i;
        }
    }
    return smallestIdx;
};
function selectionSort(arr) {
    let sortedArr;
    const times = arr.length;
    for (let i = 0; i < arr.length; i++) {
        let smallestIdx = findSmallest(arr)
        sortedArr.push(...arr.splice(smallestIdx, 1))  //splice返回的是一个数组并且改变原有数组arr
    }
    return sortedArr;
}
