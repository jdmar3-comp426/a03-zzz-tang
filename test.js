import mpg_data from "./src/medium/data/mpg_data.js";

// Generate array with random numbers
let randomNumberArray = [];
for (let i = 0; i < 5; i++) {
  randomNumberArray.push( Math.floor( Math.random() * 100 ) );
}
console.log( "Test array: [ " + randomNumberArray.join(", ") + " ]" );

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
console.log( maxAndMin(randomNumberArray) );

// Test countArray()
import { countArray } from "./src/mild/mild_1.js";
console.log( "\nTest countArray()" );
console.log( countArray(randomNumberArray) );

// Test identifyVariable()
import { identifyVariable } from "./src/mild/mild_2.js";
console.log( "\nTest identifyVariable()" );
console.log( identifyVariable(4) );

// Test identifyArray()
import { identifyArray } from "./src/mild/mild_2.js";
let unknownElementsArray = [ 'some', 3, [3, 4], false ];
console.log( "\nTest identifyArray()" );
console.log( identifyArray(unknownElementsArray) );

// Test removeKey()
import { removeKey } from "./src/mild/mild_2.js";
let obj = {
  name: 'Mr. Boss',
  title: 'boss',
  age: 33,
  password: 'pass123'
};
console.log( "\nTest removeKey()" );
removeKey(obj, 'password');
console.log(obj);

// Test removeKeyNonDestructive()
import { removeKeyNonDestructive } from "./src/mild/mild_2.js";
let obj2 = {
  name: 'Mr. Boss',
  title: 'boss',
  age: 33,
  password: 'pass123'
};
console.log( "\nTest removeKeyNonDestructive()" );
console.log( removeKeyNonDestructive(obj2, 'password') );

// Test removeKeys()
import { removeKeys } from "./src/mild/mild_2.js";
let obj3 = {
  name: 'Mr. Boss',
  title: 'boss',
  age: 33,
  password: 'pass123'
};
console.log( "\nTest removeKeys()" );
console.log( removeKeys( obj3, ['password', 'age'] ) );

// Test getSum()
import { getSum } from "./src/medium/medium_1.js";
console.log( "\nTest getSum()" );
console.log( getSum(randomNumberArray) );

// Test getMedian()
import { getMedian } from "./src/medium/medium_1.js";
console.log( "\nTest getMedian()" );
console.log( getMedian(randomNumberArray) );

// Test getStatistics()
import { getStatistics } from "./src/medium/medium_1.js";
console.log( "\nTest getStatistics()" );
console.log( getStatistics( [3,2,4,5,5,5,2,6,7] ) );

// Test allCarStats
import { allCarStats } from "./src/medium/medium_2.js";
console.log( "\nTest allCarStats" );
console.log( allCarStats );

// Test moreStats
import { moreStats } from "./src/medium/medium_2.js";
console.log( "\nTest moreStats" );
console.log( moreStats );
console.log( moreStats.makerHybrids );
console.log( moreStats.avgMpgByYearAndHybrid );

// Test searchHighPower
import { searchHighPower } from "./src/medium/medium_3.js";
console.log( "\nTest searchHighPower" );
console.log( searchHighPower( mpg_data, 300, 300 ) );