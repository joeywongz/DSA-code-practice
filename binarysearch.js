//二分查找
let my_list = [1, 2, 5, 23, 45, 74]   //sorted array
function binarySearch(arr, item) {
    let low = 0, high = arr.length - 1, mid;
    while (low <= high) {
         mid = Math.floor((low + high) / 2);
        if (item === arr[mid]) {
            return mid;
        } else if (item < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return "not find";
}

