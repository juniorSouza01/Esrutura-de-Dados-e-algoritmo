let daysOfWeek = new Array();
daysOfWeek = new Array(7);
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');


// outros exemplos:
let OtherDaysOfWeek = [];
let MoreDaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//saber o numero de elementos em um array:
console.log(MoreDaysOfWeek.length);



//acessando o array e fazendo uma iteração em um array:
for(let i =0; i <daysOfWeek.length; i++){
    console.log(daysOfWeek[i]);
}


// Descobrir os 20 primeiros numeros da sequencia Fibonacci:
const fibonacci = [];
fibonacci[2] = 1;
fibonacci[1] = 2;

for(let i = 3; i < 20; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
for(let i = 1; i <fibonacci.length; i++){
    console.log(fibonacci[i]);
}



// incremento e decremento de um array:
let numbers = [0,1,2,3,4,5,6,7,8,9];
numbers[numbers.length] = 10;
// outro exemplo com método PUSH:
numbers.push(11);
numbers.push(12,13);


// Inserindo um elemento na primeira posição do array:
Array.prototype.insertFirstPosition = function(value) {
    for(let i = this.length; i >= 0; i--){
        this[i] = this[i - 1];
    }
    this[0] = value;
};
numbers.insertFirstPosition(-1);

// outro exemplo que faz a mesma coisa que insertFirstPosition:
numbers.unshift(-2);
numbers.unshift(-4,-3);



// removendo um elemento do final do array:
numbers.pop()


//removeno um elemento da primeira posição:
for(let i = 0; i< numbers.length; i++){
    numbers[i] = numbers[i + 1];
}

Array.prototype.reIndex = function(myArray){
    const newArray = [];
    for(let i = 0 ; i < myArray.length; i ++){
        if(myArray[i] !== undefined){
            //console.log(myArray[i]);
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}
// remove a primeira posição manualmente e executa reIndex
Array.prototype.removeFirstPosition = function(){
    for(let i = 0; i < this.length; i++){
        this[i] = this[i + 1];
    }
    return this.reIndex(this);
}
numbers = numbers.removeFirstPosition();


// Utilizando o método Shift
// Para remover um elemento do ínicio do array utilize o método shift deste modo:
numbers.shift();
//  Os métodos SHIFT e UNSHIFT permitem que o array emule uma estrutura de dados básicas de fila as famosas QUEUES   ( FIlas e Queues)



// Remover um elemento de qualque posição d um array:
numbers.splice(5,6); // primeiro valor é a posição inicial, segundo valor é quantos valores serão removidos

//Sempre utilizar os métodos splice, pop, shift


// Agora vamos supor que queremos inserir novamente os números de 2 a 4 de volta no array a partir da posição 5.
// Podemos usar novamente o método SPLICE para isso:

numbers.splice(5, 0, 2, 3, 4);
// O primeiro argumento do método é o indice a partir do qual queremos remover ou inserir elementos.
// O segundo argumento é a quantidade de elementos que queremos remover ( nesse caso nenhum, portanto passamos o valor de 0 (zero)).
//