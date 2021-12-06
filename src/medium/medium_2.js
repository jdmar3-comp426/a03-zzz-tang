import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
    avgMpg: {
      city: mpg_data.reduce( ( previous, current ) => {
        return previous + current.city_mpg;
      }, 0 ) / mpg_data.length,
      highway: mpg_data.reduce( ( previous, current ) => {
          return previous + current.highway_mpg;
      }, 0 ) / mpg_data.length
    },
    allYearStats: getStatistics(
        mpg_data.map( ( element ) => {
          return element.year;
        } )
    ),
    ratioHybrids: mpg_data.filter( element => {
      return element.hybrid;
    } ).length / mpg_data.length,
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */

export const moreStats = {

    // reduce() to sort the cars by make
    makerHybrids: mpg_data.reduce( ( previous, current ) => {

      // Only consider hybrid cars
      if( current.hybrid ) {
  
        // findIndex() to see if there is already a category for
        // the make of the current hybrid car
        let index = previous.findIndex( group => {
          return group.make === current.make;
        } );
        if( index === -1 ) {
          previous.push( {
            make: current.make,
            hybrids: [current.id]
          } );
        } else {
          previous[index].hybrids.push(current.id);
        }
  
      }
      return previous;
    
    // Sort descending
    }, [] ).sort( ( current, next ) => {
      return next.hybrids.length - current.hybrids.length;
    } ),

    avgMpgByYearAndHybrid: mpg_data.reduce( ( previous, current ) => {
        
        // Sort the cars by year
        let year = current.year;

        // If the year of the current object is not present
        if( !previous[year] ) {

          // Create a property with the year
          // And find all relevant information for that year
          previous[year] = {
            hybrid: {
              city: mpg_data.reduce( ( cityTotal, currentCar ) => {
                if( currentCar.hybrid && currentCar.year === year ) {
                  cityTotal += currentCar.city_mpg;
                }
                return cityTotal;
              }, 0 ) / mpg_data.reduce( ( cityNumber, currentCar ) => {
                if( currentCar.hybrid && currentCar.year === year ) {
                  cityNumber++;
                }
                return cityNumber;
              }, 0 ),
              highway: mpg_data.reduce( ( highwayTotal, currentCar ) => {
                if( currentCar.hybrid && currentCar.year === year ) {
                  highwayTotal += currentCar.highway_mpg;
                }
                return highwayTotal;
              }, 0 ) / mpg_data.reduce( ( highwayNumber, currentCar ) => {
                if( currentCar.hybrid && currentCar.year === year ) {
                  highwayNumber++;
                }
                return highwayNumber;
              }, 0 )
            },
            notHybrid: {
              city: mpg_data.reduce( ( cityTotal, currentCar ) => {
                if( !currentCar.hybrid && currentCar.year === year ) {
                  cityTotal += currentCar.city_mpg;
                }
                return cityTotal;
              }, 0 ) / mpg_data.reduce( ( cityNumber, currentCar ) => {
                if( !currentCar.hybrid && currentCar.year === year ) {
                  cityNumber++;
                }
                return cityNumber;
              }, 0 ),
              highway: mpg_data.reduce( ( highwayTotal, currentCar ) => {
                if( !currentCar.hybrid && currentCar.year === year ) {
                  highwayTotal += currentCar.highway_mpg;
                }
                return highwayTotal;
              }, 0 ) / mpg_data.reduce( ( highwayNumber, currentCar ) => {
                if( !currentCar.hybrid && currentCar.year === year ) {
                  highwayNumber++;
                }
                return highwayNumber;
              }, 0 )
            }
          };
        }
        return previous;
      }, {} )

};
