let averageTempDay1 = [72, 75, 79, 79, 81, 81];
let averageTempDay2 = [81, 79, 75, 75, 73, 72];


//Melhopr opção:
// Matriz:
let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 72];


// Iterando pelos elementos 
function printMatrix(matrix){
    for(let i = 0; i < myMatrix.length; i++){
        for(let j = 0; j < myMatrix[i].length; j ++){
            console.log(myMatrix[i][j]);
        }
    }
}
// Exibindo o conteúdo da matriz averageTemp com o seguinte código:
printMatrix(averageTemp);

//exibir um array bidimencional:
console.table(averageTemp);







// Array multidimencionais 
// Matriz 3 x 3

const matrix3x3x3x3 = [];
for(let i = 0; i < 3; i++){
    matrix3x3x3x3[i] = []; // precisamos inicializar cada array
    for(let j = 0; j < 3; j++){
        matrix3x3x3x3[i][j] = [];
        for(let z = 0; z < 3; z++){
            matrix3x3x3x3[i][j][z] = i + j + z;
        }
    }
}

for(let i = 0; i < matrix3x3x3x3.length; i ++){
    for(let j = 0 ; j < matrix3x3x3x3[i].length; j++){
        for(let z = 0; z <matrix3x3x3x3[i][j].length; z++){
            console.log(matrix3x3x3x3[i][j][z]);
        }
    }
}



/* Métodos para arrays: */

concat //Junta vários arrays e devolve uma cópia dos arrays contatenados
every // Itera por todos os elementos do array, verificando uma condição desejada (função) até que false seja devolvido.
filter // Cria um array com todos os elementos avaliados com true pela função especifícada
forEach // Executa uma função especifica em cada elemento do array
join // Reúne todos os elementos do array em uma string
indexOf // Pesquisa o array em busca de elementos específicos e devolve a sua posição
lastIndexOf // Devolve a posição do último item do array que corresponda ao critério de pesquisa 
map // Cria outro  array a partir de uma função que contem o criterio/condição e devolve os elementos do array que correspondam ao critério.
reverse // Inverte o array, de modo que o último item se torne o primeiro, e vice-versa
silce // Devolve um novo array a partir do indice especificado
some // Itera por todos os elementos do array, verificando a condição desejada (função) até que true seja devolvido
sort // Organiza o array em ordem alfabética ou de acordo com a função especificada 
toString // Devolve o array na forma de string
valuOf // É semelhante ao método toString e devolve o array na forma de uma string
