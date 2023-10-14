// Fatorial
function factorialIterative(number){
    if(number < 0) return undefined;
    let total = 1;
    for(let n = number; n > 1; n--){
        total = total * n;
    }
    return total;
}
console.log(factorialIterative(5)) // 120


function factorial(n){
    if(n === 1 || n === 0){
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Fibonacci Iterativo

function fibonacciIterative(n){
    if (n < 1) return 0;
    if(n <= 2) return 1;
    let fibNMinus2 = 0;
    let fibNMinus1 = 1;
    let fibN = n;

    for(let i = 2; i <= n; i++){
        fibN = fibNMinus1 + fibNMinus2;
        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN;
    }
    return fibN;
}

// Fibonacci Recursivo
function fibonacci(n){
    if(n < 1) return 0;
    if( n <= 2) return 1;
    return fibonacci(n -1) + fibonacci(n - 2);
}

// Fibonacci com memoização
function fibonacciMemoization(n){
    const memo = [0,1];
    const fibonacci = (n) => {
        if(memo[n] != null) return memo[n];
        return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    };
    return fibonacci;
}