class Queue {
  constructor() {
    this.count = 0;
    this.lowesCount = 0;
    this.items = 0;
  }
  //Criando a classe Queue e inserindo um novo elemento no final da queue:
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  // Removendo elementos da Queue:
  dequeue() {
    if (this.isEmpty) {
      return undefined;
    }
    const result = this.items[this.lowesCount];
    delete this.items[this.lowesCount];
    this.lowesCount++;
    return result;
  }
  // Dando uma espiada no elemento que está na frente da fila:
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowesCount];
  }
  // Verificnado se a Stack está vazia e o seu tamanho:
  isEmpty() {
    return this.count - this.lowesCount === 0;
  }
  // Criando o método toString:
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowesCount]}`;
    for (let i = this.lowesCOunt + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}



const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString());



queue.enqueue('Camila');



//////////////////////////
console.log(queue.toString()); // John, Jack, Camila
console.log(queue.size()); // exibe 3
console.log(queue.isEmpty()); // exibe false
queue.dequeue(); // remove John
queue.dequeue(); // remove Jack
console.log(queue.toString()); // Camila

