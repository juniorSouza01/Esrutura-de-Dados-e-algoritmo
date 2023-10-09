

/* Templates literais */

const book = {
    name: 'Learning JavaScript DataSctructures and Algorithms'
};
console.log(`You are reading ${book.name}., and this is a new line and so is this.`);


/* ---  Arrow Functions ---  */
let circleAreaES5 = function circleArea(r){
    let PI = 3.14;
    let area = PI * r * r;
    return area;
}
console.log(circleAreaES5(2));

/* Código anterior com sintaxe simplificada */
const circleArea = r => {
    const PI = 3.14;
    const area = PI * r * r;

    return area;
};
console.log(circleArea(2));




/* Conversão simples  */
const circleArea2 = r => 3.14 * r * r;
console.log(circleArea2(2));


/* Caso a funcção não receber nenhum parametro, usamos parênteses vazios, comumente usados na ES5 */
const hello = () => console.log('hello!');
hello();


/* Valores Default */
function sum(x = 1, y = 2, z = 3){
    return x + y + z;
}
console.log(sum(4,2)); // exibe 9


/* Antes da ES2015 era necessário escrever a função de tal maneira: */
function sum(x, y, z){
    if(x === undefined) x = 1;
    if(y === undefined) y = 2;
    if(z === undefined) z = 3;
    return x + y + z;
}


/* também podemos escrever da seguinte maneira: */
function sum(){
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    return x + y + z;
}



/* operador de espelhamento ( Spread operator ) */
let params = [3, 4, 5];
console.log(...params);
/* spread operator percorre o array */


/* ShoetHand method names */
const helloWorld = {
    name: 'abcdef',
    printHello(){
        console.log('Hello');
    }
};
console.log(helloWorld.printHello());


/* declarando classes de maneira mais limpa  */
class Book {
    constructor(title, pages, isbn){
        this.title;
        this.pages;
        this.isbn;
    }
    printIsbn(){
        console.log(this.isbn)
    }
}

/* Herança */
class ITBook extends Book {
    constructor(title, pages, isbn, technology){
        super(title, pages, isbn);
        this.technology = technology;
    }
    printTechnology(){
            console.log(this.technology);
    }
}
let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890', 'JavaScript');
console.log(jsBook.title);
console.log(jsBook.printTechnology());


/* Getters e Setters */
class Person {
    constructor(name){
        this._name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let lotcChar = new Person('Frodo');
console.log(lotcChar.name);
lotcChar.name = 'Gandalf';
console.log(lotcChar.name);
lotcChar._name = 'Sam';
console.log(lotcChar.name);