console.log("Hash Tables");

/** Hash function */
function hash(string, max) {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return (hash % max);
}

/** Hash Table */
class HashTable {
    constructor(storage = [], storageLimit = 4) {
        this.storage = storage;
        this.storageLimit = storageLimit;
    }

    print() {
        console.log(this.storage);
    }

    add(key, value) {
        var index = hash(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            this.storage[index] = [
                [key, value]
            ];
        } else {
            var inserted = false;
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (!inserted) {
                this.storage[index].push([key, value]);
            }
        }
    }

    remove(key) {
        var index = hash(key, this.storageLimit);
        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            delete this.storage[index];
        } else {
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    delete this.storage[index][i];
                }
            }
        }
    }

    lookup(key) {
        var index = hash(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            return undefined;
        } else {
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i][1];
                }
            }
        }
    }
}

// Usage example:
let myHashTable = new HashTable();

myHashTable.add("name", "John");
myHashTable.add("age", 25);
myHashTable.add("city", "New York");

console.log("Hash Table after adding elements:");
myHashTable.print();

console.log("Lookup age:", myHashTable.lookup("age")); // Output: 25

myHashTable.remove("age");

console.log("Hash Table after removing age:");
myHashTable.print();
