// Recursão

function recursiveFunction(someParam){
    recursiveFunction(someParam);
}

function recursiveFunction1(someParam){
    recursiveFunction2(someParam);
}

function recursiveFunction2(someParam){
    recursiveFunction1(someParam);
}

function understandRecursion(doIunderstandRecursion){
    const recursionAnswer = confirm('Do you understand recursion?');
    if(recursionAnswer === true){
        return true;
    }
    understandRecursion(recursionAnswer);
}