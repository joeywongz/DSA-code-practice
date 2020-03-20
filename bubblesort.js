//冒泡排序
let arr1 = [3,6,1,3456,54,123,576,73,4578,92]
function bubblesort1A(arr, len){
    let sorted = false;
    while(!sorted){
        sorted = true;
        for(let i =1; i< len; i++ ){
            if(arr[i-1] > arr[i]){
                [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
                sorted = false;
            }                            
        }
        len--;
    }
}
bubblesort1A(arr1, arr1.length);


//实现floor除法(向下取整的除法)
function floorDiv(dividend, divisor){
    dividend = dividend+1;
    let ret = 0;
    while(dividend > 0){
        dividend -= divisor;
        ret++;
    }
    return ret-1;
}