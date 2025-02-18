function findSmallestMissingPositive(arr) {
    // Step 1: Filter out non-positive numbers and sort the array
    arr = arr.filter(num => num > 0).sort((a, b) => a - b);

    // Step 2: Check for the smallest missing positive number
    let missing = 1;  // Start checking from 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === missing) {
            missing++;
        }
    }

    return missing;
}

let array = [2, -3, 4, 1, 1, 7];
console.log(findSmallestMissingPositive(array)); // Output: 3
