import mpg_data from "./src/medium/data/mpg_data.js";

/*

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

// Test searchMpg
import { searchMpg } from "./src/medium/medium_3.js";
console.log( "\nTest searchMpg" );
console.log( searchMpg( mpg_data, 30, 30 ) );

// Test searchName
import { searchName } from "./src/medium/medium_3.js";
console.log( "\nTest searchName" );
console.log( searchName( mpg_data, "turbo" ) );

// Test searchByYear
import { searchByYear } from "./src/medium/medium_3.js";
console.log( "\nTest searchByYear" );
console.log( searchByYear( mpg_data, [ 2009, 2010 ] ) );

// Test repeat
import { repeatDemo } from "./src/spicy/spicy_9.js";
console.log( "\nTest repeat with repeatDemo" );
repeatDemo();

// Test multiplyBy
import { tenTimes } from "./src/spicy/spicy_9.js";
console.log( "\nTest multiplyBy with tenTimes" );
console.log( tenTimes(2) );
import { tenTimesFifty } from "./src/spicy/spicy_9.js";
console.log( "\nTest multiplyBy with tenTimesFifty" );
console.log( tenTimesFifty() );

// Test everyEven
import { everyEven } from "./src/spicy/spicy_9.js";
console.log( "\nTest everyEven" );
console.log( everyEven( [1, 5, 1, 0, 1], x => x === 1 ) ); // true
console.log( everyEven( [1, 1, 0, 1, 1], x => x === 1 ) ); // false

// Test someEven
import { someEven } from "./src/spicy/spicy_9.js";
console.log( "\nTest someEven" );
console.log( someEven( [4, 3, 2, 1, 0], x => x === 3 ) ); // false
console.log( someEven( [1, 0, 1, 0, 1], x => x === 0 ) ); // false
console.log( someEven( [1, 1, 1, 1, 0], x => x === 0 ) ); // true
console.log( someEven( [0, 0, 0, 0, 0], x => x === 0 ) ); // true

// Test filter
import { filter } from "./src/spicy/spicy_9.js";
console.log( "\nTest filter" );
console.log( filter( ['yes', 'nope', 'maybe', 'yellow'], x => x[0] === 'y' ) );
// { pass: ['yes', 'yellow'], fail: ['nope', 'maybe'] }
console.log( filter( [1, 90, 5, 31], x => x % 2 === 1 ) );
// { pass: [1, 5, 31], fail: [90] }

// Test allEvensAreOdd
import { allEvensAreOdd } from "./src/spicy/spicy_9.js";
console.log( "\nTest allEvensAreOdd" );
console.log( allEvensAreOdd( [1, 5, 1, 0, 1], x => x === 1 ) ); // true
console.log( allEvensAreOdd( [1, 1, 0, 1, 1], x => x === 1 ) ); // false

// Test anEvenIsOdd
import { anEvenIsOdd } from "./src/spicy/spicy_9.js";
console.log( "\nTest anEvenIsOdd" );
console.log( anEvenIsOdd( [1, 5, 0, 0, 1], x => x === 1 ) ); // true
console.log( anEvenIsOdd( [0, 1, 0, 1, 0], x => x === 1 ) ); // false

// Test hasExactly
import { hasExactly } from "./src/spicy/spicy_9.js";
console.log( "\nTest hasExactly" );
console.log( hasExactly( ['yes', 'nope', 'maybe', 'yellow'], x => x[0] === 'y', 2 ) );
console.log( hasExactly( [1, 90, 5, 31], x => x % 2 === 1, 3 ) );

*/