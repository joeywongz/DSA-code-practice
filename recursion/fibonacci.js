//斐波那契


//迭代实现斐波那契
function fibonacciIterative(n) {
  if (n < 1) {
    return 0;
  }
  if (n < 2) {
    return 1;
  }
  let fibonacciNMinus1 = 0;
  let fibonacciNminus2 = 1;
  let fibonacciN = fibonacciNMinus1 + fibonacciNminus2;
  for (let i = 2; i <= n; i++) {
    fibonacciN = fibonacciNMinus1 + fibonacciNminus2;
    fibonacciNminus2 = fibonacciNMinus1;
    fibonacciNMinus1 = fibonacciN
  }
  return fibonacciN
}

//递归实现斐波那契
function fibonacci(n) {
  if (n < 1) {
    return 0;
  }
  if (n < 2) {
    return 1;
  }
  return fibonacci(n-1) + fibonacci(n-2)
}