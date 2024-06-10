//factorArray(array, number)

/*
   Step1: Understand the Problem

    inputs: "array" and "number"
    output: array of factors of the "number" in an array
*/

/*
    examples:
    factorArray([2,3,4,5,6],20) // => [2,4,5]
    factorArray([2,3,4,5,6],35) // => [5]
    factorArray([10,15,20,25],5) // => []
*/

/*
    
    Step 2: Plan the Solution

    Initialize an empty array to store the factors.
    Iterate over each element in the input array.
    For each element, check if it is a factor of the given number by using the modulus operator.
    If it is a factor, add it to the result array.
    Return the result array after finishing the iteration.
*/

/*
Step 3: Write Pseudocode

function factorArray(array, number):
    result = []
    for each element in array:
        if number % element == 0:
            result.append(element)
    return result


*/

//Step 4: Implement the Solution in Code

    function factorArray(array, number){
        // Initialize an empty array to store the result
        let result = [];

        for(let i = 0; i < array.length; i++){
            //check the factors
            if(number % array[i] === 0){
                result.push(array[i]);  //push each factor to result array
            }
        }

        return result;  // Return the result array
    }

    // Examples:
    console.log(factorArray([2, 3, 4, 5, 6], 20)); // => [2, 4, 5]
    console.log(factorArray([2, 3, 4, 5, 6], 35)); // => [5]
    console.log(factorArray([10, 15, 20, 25], 5)); // => [] 


    /*
    
    Step 5: Test the Solution
    
    Test Case 1: factorArray([2, 3, 4, 5, 6], 20)

    Iteration 1: Check 2, 20 % 2 === 0 (true), add 2 to result.
    Iteration 2: Check 3, 20 % 3 === 0 (false).
    Iteration 3: Check 4, 20 % 4 === 0 (true), add 4 to result.
    Iteration 4: Check 5, 20 % 5 === 0 (true), add 5 to result.
    Iteration 5: Check 6, 20 % 6 === 0 (false).
    Result: [2, 4, 5].
    
    Test Case 2: factorArray([2, 3, 4, 5, 6], 35)

    Iteration 1: Check 2, 35 % 2 === 0 (false).
    Iteration 2: Check 3, 35 % 3 === 0 (false).
    Iteration 3: Check 4, 35 % 4 === 0 (false).
    Iteration 4: Check 5, 35 % 5 === 0 (true), add 5 to result.
    Iteration 5: Check 6, 35 % 6 === 0 (false).
    Result: [5].
    
    Test Case 3: factorArray([10, 15, 20, 25], 5)

    Iteration 1: Check 10, 5 % 10 === 0 (false).
    Iteration 2: Check 15, 5 % 15 === 0 (false).
    Iteration 3: Check 20, 5 % 20 === 0 (false).
    Iteration 4: Check 25, 5 % 25 === 0 (false).
    Result: [].
    */
