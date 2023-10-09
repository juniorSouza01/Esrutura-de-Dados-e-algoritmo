/*
O que é umma deque? uma fila de duas pontas, como por exemplo:

em uma fila de cinema, a pessoa que acabou de comprar seu ingresso pode fácilmente voltar ao inicio da fila para tirar duvidas rápidas
Assim também, se a pessoa que está no fim da fila estiver com pressa, ela pode simplesmente sair da fila

*/

// Cirnado uma classe Deque:
class Deque {
  constructor() {
    this.count = 0;
    this.lowesCount = 0;
    this.items = 0;
  }

  enque(element) {
    this.items[this.count] = element;
    this.count++;
  }

  deque() {
    if (this.isEmpty) {
      return undefined;
    }
    const result = this.items[this.lowesCount];
    delete this.items[this.lowesCount];
    this.lowesCount++;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowesCount];
  }
  isEmpty() {
    return this.count - this.lowesCount === 0;
  }
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

  //Adicionado elementos na frente do Deque:
  addFront() {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowesCount > 0) {
      this.lowesCount--;
      this.items[this.lowesCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowesCount = 0;
      this.items[0] = element;
    }
  }
}

const deque = new Deque();
console.log(deque.isEmpty()); // exibe true
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString()); // John, Jack
deque.addBack('Camila');
console.log(deque.toString()); // John, Jack, Camila
console.log(deque.size()); // exibe 3
console.log(deque.isEmpty()); // exibe false
deque.removeFront();