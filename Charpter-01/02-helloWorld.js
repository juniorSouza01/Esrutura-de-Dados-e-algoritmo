

/* Criando objetos */
function seeMakeObjct(){
    let obj = new Object();
    console.log(obj);

    let objct = {}
    console.log(objct);

    //objeto completo =>
    obj = {
        name: {
            first: 'Gandalf',
            last: 'the grey'
        },
        address: 'Middle Earth'
    };
}

/* Objetos */
function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;

    let book = new Book('title', 'pages', 'isbn');

    console.log(book.title); //exibe o título do livro
    book.title = 'new title'; // atualiza o valor do título do livro
    console.log(book.title); //exibe o valor atualizado
}

/* Classe que contem uma função */

Book.prototype.printTitle = function() {
    console.log(this.title)
}
book.printTitle();



/* Declarando funções direto na definição da classe */
function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function(){
        console.log(this.isbn);
    };
}
book.printIsbn();

