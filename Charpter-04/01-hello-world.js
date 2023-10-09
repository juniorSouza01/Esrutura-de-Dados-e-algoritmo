// Criando uma classe Stack baseada em array

class Stack {
  constructor() {
    this.items = [];
  }

  // adicionando elementos no topo da pilha (no final) com o método push:
  push(element) {
    this.items.push(element);
  }

  // removendo itens com o método pop:
  pop() {
    return this.items.pop();
  }

  // devolver o item que está no topo da pilha:
  peek() {
    return this.items[this.items.length - 1];
  }

  // Verificando se a stack está vazia:
  isEmpty() {
    return this.items.length === 0;
  }

  // tamanho da stack:
  size(){
    return this.items.length;
  }

  // limpando toda a stack:
  clear(){
    this.items = [];
  }
}
