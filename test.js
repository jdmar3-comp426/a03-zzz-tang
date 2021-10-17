// Generate array with random numbers
let testArray = [];
for (let i = 0; i < 10; i++) {
  testArray.push( Math.floor( Math.random() * 10 ) );
}
console.log( "Test array: [ " + testArray.join(", ") + " ]" );

// Test sumToString()
import { sumToString } from "./src/mild/mild_1.js";
console.log( "\nTest sumToString()" );
console.log( sumToString(3, 4) );

// Test getIncreasingArray()
import { getIncreasingArray } from "./src/mild/mild_1.js";
console.log( "\nTest getIncreasingArray()" );
console.log( getIncreasingArray(3, 7) );

// Test maxAndMin()
import { maxAndMin } from "./src/mild/mild_1.js";
console.log( "\nTest maxAndMin()" );
console.log( maxAndMin(testArray) );

// Test countArray()
import { countArray } from "./src/mild/mild_1.js";
console.log( "\nTest countArray()" );
console.log( countArray(testArray) );

// Test identifyVariable()
import { identifyVariable } from "./src/mild/mild_2.js";
console.log( "\nTest identifyVariable()" );
console.log( identifyVariable( 4 ) );