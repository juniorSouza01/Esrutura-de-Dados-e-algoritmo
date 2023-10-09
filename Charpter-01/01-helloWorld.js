


alert("hello-World!");


/*  If Else  */
function myFunction() {
  let num = 0;

  if (num === 1) {
    console.log("num is equal to 1");
  } else {
    console.log(`num is not equal to 1, the value of num is${num}`);
  }
}

/*  If Else com operador ternario */
function myOtheFunction() {
  if (num === 1) {
    num--;
  } else {
    num;
  }
}

/**  If Else */
function moreOneFunction(){
    let month = 5;

    if(month === 1){
        console.log('January');
    } else if( month === 2){
        console.log('February');
    } else if(month === 3){
        console.log('March');
    } else{
        console.log('Month is not jenuary, february or march');
    }
}

/**  Switch  */
function verifySwitch(){
    let month = 5;

    switch(month){
        case 1:
            console.log('Jenuary');
            break;
        case 2:
            console.log('February');
            break;
        case 3:
            console.log('March');
            break;
        default:
            console.log('Month is not Jenuary, February or March');
    }
}

/**  Laço FOR  */
function verifyFor(){
    for(let i =0; i < 10; i++){
        console.log(i);
    }
}

/*  Laço WHILE */
function verifyWhile(){
    let i =0;
    while(i < 10){
        console.log(i);
        i++;
    }
}


/* Laço DO WHILE */
function verifyDoWhile(){
    let i =0;
    do{
        console.log(i);
        i++
    } while(i <10);
}




/* Sintaxe básica de funcções */

function sayHello(){
    console.log('Hello!')
}

/* Dando argumentos para funções */
function output(text){
    console.log(text)
}
output('hello!');

/* soma */

function som(num1, num2){
    return num1 + num2;
}
