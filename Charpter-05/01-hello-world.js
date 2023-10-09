

// Criando a classe Queue e inserindo um novo elemento no final da queue:
class Queue {
    constructor(){
        this.count = 0;
        this.lowesCount = 0;
        this.items = 0;
    }
    enqueue(element){
        this.items[this.count] = element;
        this.count++;
    }
}


// Removendo elementos da Queue:
class OtheQueue{
    constructor(){
        this.count = 2;
        this.lowesCount = 0;
        this.items = {
            0: 5,
            1: 8
        }
    }
    dequeue(){
        if(this.isEmpty){
            return undefined;
        }
        const result = this.items[this.lowesCount];
        delete this.items[this.lowesCount];
        this.lowesCount++;
        return result;
    }
}


// Dando uma espiada no elemento que está na frente da fila:
class MoreOneQueue {
    constructor(){
        this.count = 0;
        this.lowesCount = 0;
        this.items = 0;
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowesCount];
    }
}


// Verificnado se a Stack está vazia e o seu tamanho:
class Queue {
    constructor(){
        this.count = 0;
        this.lowesCount = 0;
        this.items = 0;
    }
    isEmpty(){
        return this.count - this.lowesCount === 0;
    }
}


// Criando o método toString:
class String{
    constructor(){
        this.count = 0;
        this. lowesCount = 0;
        this.items = 0;
    }
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowesCount]}`;
        for(let i = this.lowesCOunt + 1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}