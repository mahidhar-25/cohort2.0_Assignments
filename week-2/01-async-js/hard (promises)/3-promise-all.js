/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function waitOneSecond(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First Promise");
    }, t * 1000);
  });
}

function waitTwoSecond(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second Promise");
    }, t * 1000);
  });
}

function waitThreeSecond(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Third Promise");
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const startTime = new Date().getTime();

  return Promise.all([
    waitOneSecond(t1),
    waitTwoSecond(t2),
    waitThreeSecond(t3),
  ]).then((result) => {
    const endTime = new Date().getTime();
    // console.log(result);
    // console.log(
    //   `took ${endTime - startTime} milliseconds to resolve all promises`
    // );
    return endTime - startTime;
  });
}

calculateTime(1, 2, 3);

module.exports = calculateTime;
