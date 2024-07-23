// Callback function //
function sumOfNumbers(num, callback) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    callback(sum);
}

const num = [1, 2, 3, 4];
sumOfNumbers(num, (result) => {
    console.log("Sum of first 4 natural number is:", result);
});



// Promises function //

function sumOfNum(numbers) {
    return new Promise((resolve, reject) => {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        resolve(sum);
    });
}

const numbers = [1, 2, 3, 4];
sumOfNum(numbers).then((result) => {
    console.log("Sum of first 4 natural number is :", result);
});


// Await function //
async function sumOfFirstNNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  (async () => {
    const result = await sumOfFirstNNumbers(4);
    console.log("Sum of first 4 natural number is :", result); 
  })();
  