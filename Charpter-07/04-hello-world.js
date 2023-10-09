class Set {
    constructor() {
      this.items = {};
    }
    has(element) {
      return Object.prototype.hasOwnProperty.call(this.items, element);
    }
    add(element) {
      if (!this.has(element)) {
        this.items[element] = element;
        return true;
      }
      return false;
    }
    delete(element) {
      if (this.has(element)) {
        delete this.items[element];
        return true;
      }
      return false;
    }
    clear(){
      this.items = {};
    }
    size(){
      return Object.keys(this.items).length;
    }
    sizeLegacy(){
      let count = 0;
      for(let key in this.items){
          if(this,items.hasOwnProperty(key)){
              count++;
          }
      }
      return count;
    }
    values(){
      return Object.values(this.items);
    }
    valuesLegacy(){
      let values = [];
      for(let key in this.items){
          if(this.items.hasOwnProperty(key)){
              values.push(key);
          }
      }
      return values;
    }

    union(otherSet){
        const unionSet = new Set();
        let values = this.values();
        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    }

    intersection(otherSet){
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();
        let biggerSet = values;
        let smallerSet = otherValues;
        if(otherValues.length - values.length > 0){
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.forEach(value => {
            if(biggerSet.includes(value)){
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }
  }