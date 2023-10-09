interface Comparable <T>{
    compareTo(b: T): number;
}

class myObject implements Comparable<myObject> {
    age: number;
    compareTo(b: myObject): number {
        if( this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    }
}