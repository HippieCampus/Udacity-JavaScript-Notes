// Symbols

// A symbol is a unique and immutable data type that is often used to identify object properties.

const sym1 = Symbol('apple');
console.log(sym1);

// Using symbols to create an object

const bowl = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};

// An object becomes an iterator when it implements the .next() method. The .next() method is a zero arguments 
// function that returns an object with two properties:

    // value : the data representing the next value in the sequence of values within the object
    // done : a boolean representing if the iterator is done going through the sequence of values

// SETS

    // HOW TO CREATE A SET:

      const games = new Set();
      console.log(games);

      // Modifying sets

      exampleSet.add();
      exampleSet.delete();
      exampleSet.clear();

      // Checking the length of a set

      exampleSet.size;

      // Checking if an item exists in a set

      exampleSet.has('exampleValue');

      // Retrieving all values:

      exampleSet.values();

      // Looping through sets:

      // for ... of .. Loops
      const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);
      for (const color of colors) {
        console.log(color);
      }


// WEAKSETS

      // A WeakSet is just like a normal Set with a few key differences:

      // a WeakSet can only contain objects
      // a WeakSet is not iterable which means it can’t be looped over
      // a WeakSet does not have a .clear() method

      // Creating a WeakSet:


      let student1 = { name: 'James', age: 26, gender: 'male' };
      let student2 = { name: 'Julia', age: 27, gender: 'female' };
      let student3 = { name: 'Richard', age: 31, gender: 'male' };

      const roster = new WeakSet([student1, student2, student3]);
      console.log(roster);


// MAPS

    // If Sets are similar to Arrays, then Maps are similar to Objects because 
    // Maps store key-value pairs similar to how objects contain named properties with values.


    // Create a map

    const employees = new Map();
    console.log(employees);

    // Modifying maps

        // Unlike Sets, you can’t create Maps from a list of values; instead, 
        // you add key-values by using the Map’s .set() method.

        employees.set('james.parkes@udacity.com', { 
            firstName: 'James',
            lastName: 'Parkes',
            role: 'Content Developer' 
        });

        // The .set() method takes two arguments. The first argument is the key, which is used to reference 
        // the second argument, the value.

        // To remove key-value pairs, simply use the .delete() method.

        // After you’ve built your Map, you can use the .has() method to check if a key-value pair 
        // exists in your Map by passing it a key.

    // Looping through maps

        exampleMap.forEach((value, key) => console.log(key, value));

// WeakMaps

const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);

// Deleting an object by setting it to null:

book1 = null;
console.log(library);

// PROMISES:

// A promise will let you start some work that will be done asynchronously and let you get back to your regular work. 























































