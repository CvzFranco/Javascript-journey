'use strict';

/**
 * PROBLEM calculate the temperature amplitude
 */

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1 Understanding the problem
// - What is temp amplitude?  Answer : difference between hightest and lowest temp
//How to compute max and min temperatures ?
// - hat's a sensor error?And what do do?

//Breaking up into sub-problems
//- How to ignore errors ?
// Find min value in temp array
//find max value in temps array
//- Substrat mon from max and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

//PROBLEM 2
//Function should now receive 2 arrays of temps

//1) UnderStanding th problem
//With 2 arrays, should we implement fonctionality twice , No !, just merge two arrays

// 2) Breaking up into sub-problems
//-Merge 2 arrays?

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

/**
 * DEBUGING
 */

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //C) Fix
    value: Number(prompt('Degrees celsius :')),
  };

  //   console.log(measurement);
  console.table(measurement);
  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

//A) Identify

console.log(measureKelvin());
