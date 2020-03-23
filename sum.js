// 递归实现数组求和
function sum(arr, len){
    if (len < 1) {
        return 0;
    } else {
        return sum(arr, len-1) + arr[len-1];
    }
}