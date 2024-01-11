console.log("Sets");

class mySet {
  
  constructor(collections) {
    this.collections = collections || [];
  }

   // this method will check for the presence of an element and return true or false
   has(element) {
    return this.collections.indexOf(element) !== -1;
}

  // this method will return all the values in the set
  values() {
    return this.collections;
  }

  // this method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.collections.push(element);
      return true;
    }
    return false;
  }

  // this method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      let index = this.collections.indexOf(element);
      this.collections.splice(index, 1);
      return true;
    }
    return false;
  }

  // this method will return the size of the collection
  size() {
    return this.collections.length;
  }

  // this method will return the union of two sets
  union(secondSet) {
    let unionSet = new mySet([...this.values()]);  // Pass an array to the constructor
    secondSet.values().forEach((e) => {
      unionSet.add(e);
    });
    return unionSet;
  }
  

  // this method will return the intersection of two sets as a new set
  intersection(secondSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach((e) => {
      if (secondSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  }

  // this method will return the difference of two sets as a new set
  difference(secondSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach((e) => {
      if (!secondSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  }

  // this method will test if the set is a subset or different set
  isSubsetOf(superSet) {
    var firstSet = this.values();
    return firstSet.every((value) => {
      return superSet.has(value);
    });
  }
}

// Usage example:
let set1 = new mySet([1, 2, 3, 4]);
let set2 = new mySet([3, 4, 5, 6]);
console.log(":", set1.has(2));
console.log("Union:", set1.union(set2).values());
console.log("Intersection:", set1.intersection(set2).values());
console.log("Difference:", set1.difference(set2).values());
console.log("Is set1 a subset of set2?", set1.isSubsetOf(set2));
