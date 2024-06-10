//logBetween(lowNum, highNum)
//Input: two integers, 'lowNum' and 'highNum'
//Expected output: an array between 'lowNum' and 'highNum', inclusive.
//edge case: 'lowNum' is greater than 'highNum', we return an empty array

//examples:
// 'logBetween(-1, 2)' should return '[-1, 0, 1, 2]'
// 'logBetween(14, 6)' should return '[]'
//'logBetween(4, 6)' should return '[4, 5, 6]'

// A plan to be followed
//Inclusiveness requirement
    //Approach:
    //Check if lowNum is greater than highNum. If so, return an empty array.
    //Otherwise, create an array that starts at lowNum and ends at highNum.

//Approach to execute the plan
    //For loop approach:
    //Initialize an empty array.
    //Use a for loop to iterate from lowNum to highNum.
    //Push each number to the array.
   // Return the array.    

//implementation/coding using js

function logBetween(lowNum, highNum){
    // Initialize an empty array to store the result
    let result = [];

    // Check if lowNum is greater than highNum
    if(lowNum > highNum){
        return result;
    }

    for(let i = lowNum; i <= highNum; i++){
        result.push(i);    //Add each number to the result array
    }

    return result;  // Return the result array
}


/*
     Test Your Solution
Test Cases:

logBetween(-1, 2) should return [-1, 0, 1, 2]
logBetween(14, 6) should return []
logBetween(4, 6) should return [4, 5, 6]

Edge Cases:
logBetween(5, 5) should return [5]
logBetween(-3, -3) should return [-3]
*/

/*
    Review and Reflect
        Correctness: Ensure the function behaves correctly for all test cases.
        Efficiency: The solution runs in O(n) time complexity, where n is the difference between highNum and lowNum, which is optimal for this problem.
        Readability: Ensure the code is clean and easy to understand.

    Example Walkthrough
        Let's go through an example:

For logBetween(-1, 2):

Initialize result as [].
Check lowNum (-1) <= highNum (2) → Continue.
Loop from -1 to 2:
Add -1 to result → result = [-1]
Add 0 to result → result = [0]
Add 1 to result → result = [1]
Add 2 to result → result = [2]
Return result → [-1, 0, 1, 2]
*/