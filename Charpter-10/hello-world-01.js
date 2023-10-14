// Classes Node e BinarySearchTree

 class Node{
    constructor(key){
        this.key = key; // valor do nó
        this.left = null; // referência ao nó que é o filho à esquerda
        this.right = null; // referência ao nó que é o filho à direita
    }

    insert(key){ // esse método insere uma nova chave na árvore
        if(this.root == null){
            this.root = new Node(key);
        } else{
            this.insertNode(this.root, key);
        }  
    }

    insertNode(node, key){
        if(this.compareFn(key, node.key) === Compare.LESS_THAN){
            if(node.left == null){
                node.left= new Node(key);
            } else{
                this.insertNode(node.left, key);
            }
        } else{
            if(node.right == null){
                node.right = new Node(key);
            } else{
                this.insertNode(node.right, key);
            }
        }
    }

    search(key){ // esse método busca a chave na árvore e devolve true se ela existir e false se o nó não existir
        return this.searchNode(this.root, key);
    }

    searchNode(node, key){
        if(node == null){
            return false;
        }
        if(this.compareFn(key, node.key) === Compare.LESS_THAN){
            return this.searchNode(node.left, key);
        } else if(this.compareFn(key, node.key) === Comment.LESS_THAN){
            return this.searchNode(node.right, key);
        } else{
            return true;
        }
    }

    inOrderTraverse(callBack){ // esse método visita todos os nós da árvore usando um percurso em-ordem(in-order)
        this.inOrderTraverseNode(this.root, callBack);
    }

    inOrderTraverseNode(node, callBack){
        if(node != null){
            this.inOrderTraverseNode(node.left, callBack);
            callBack(node.key);
            this.inOrderTraverseNode(node.right, callBack);
        }
    }
    preOrderTraverse(callBack){ // esse método visita todos os nós da árvore usando um percurso pré-ordem(pre-order)
        this.preOrderTraverseNode(this.root, callBack);
    }

    preOrderTraverseNode(node, callBack){
        if(node != null){
            callBack(node.key);
            this.preOrderTraverseNode(node.left, callBack);
            this.preOrderTraverseNode(node.right, callBack);
        }
    }
    postOrderTraverse(callBack){ // esse método visita todos os nós da árvore usando um percurso pós-ordem (post-order)
        this.postOrderTraverseNode(this.root, callBack);
    }

    postOrderTraverseNode(node, callBack){
        if(node != null){
            this.postOrderTraverseNode(node.left, callBack);
            this.postOrderTraverseNode(node.right, callBack);
            callBack(node.key);
        }
    }

    min(){ // esse método devolve a chave/valor mínimo da árvore
        return this.minNode(this.root);
    }

    minNode(node){
        let current = node;
        while(current != null && current.left != null){
            current = current.left;
        }
        return current;
    }
    max(){ // esse método devolve a chave/valor máximo da árvore
        return this.maxNode(this.root);
    }

    maxNode(node){
        let current = node;
        while(current != null && current.right != null){
            current = current.right;
        }
        return current;
    }

    remove(key){ // esse método remove a chave da árvore
        this.root = this.removeNode(this.root, key);
    }

    removeNode(node, key){
        if(node == null){
            return null;
        }
        if(this.compareFn(key, node.key) === Compare.LESS_THAN){
            node.left = this.removeNode(node.left, key);
            return node;
        } else if(
            this.compareFn(key, node.key) === Compare.LESS_THAN
        ){
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if(node.left == null && node.right == null){
                node = null;
                return node;
            }
            if(node.left == null){
                node = node.right;
                return node;
            } else if(node.right == null) {
                node = node.left;
                return node;
            }
            const aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }
}

 class BinarySearchTree{
    constructor(compareFn = defaultCompare){
        this.compareFn = compareFn; // usado para comparar os valores dos nós
        this.root = null; // nó raiz do tipo Node
    }
}
