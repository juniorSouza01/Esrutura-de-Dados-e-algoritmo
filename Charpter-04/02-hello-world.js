class Stack{
    constructor(){
        this.count = 0;
        this.items = {}
    }

    push(element){
        this.items[this.count] = element;
        this.count++;
    }
}

const stack = new Stack();
stack.push(5);
stack.push(8);


