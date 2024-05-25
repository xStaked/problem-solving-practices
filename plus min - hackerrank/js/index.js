function plusMinus(arr) {
    const n = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    // Count the number of positives, negatives, and zeros
    // for (let i = 0; i < n; i++) {
    //     if (arr[i] > 0) {
    //         positiveCount++;
    //     } else if (arr[i] < 0) {
    //         negativeCount++;
    //     } else {
    //         zeroCount++;
    //     }
    // }
    // arr.map((item) =>  item > 0 ? positiveCount++ : item < 0 ? negativeCount++ : zeroCount++)
    arr.forEach((item) =>  item > 0 ? positiveCount++ : item < 0 ? negativeCount++ : zeroCount++)
    

    // Calculate the ratios
    const positiveRatio = positiveCount / n;
    const negativeRatio = negativeCount / n;
    const zeroRatio = zeroCount / n;

    // Print the ratios with 6 decimal places
    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}

// Example usage:
const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
