// Problem Description
// Hello Crio Warriors. You don't know me, but I know you and I want to play a game. Here's what happens if you lose. The question you are looking for is loaded with marks. When the timer in the back goes off, your marks will be permanently ripped off. Here is the question:


// All the Bollywood superstars from the likes of Shah Rukh to Amitabh are lining up to entertain our Crio warriors. However due to certain security concerns they also brought their body doubles with them. A superstar can accompany any number of body doubles they want. Each superstar is represented by an integer, and all body doubles have the same integer representing them as the superstart.


// We have to find the first superstar who came to entertain Crio warriors without a body double. If all the superstars have arrived with a body double then print -1.

// Input format
// You are given an integer N denoting the number of Bollywood superstars who arrived at Crio station, followed by N integers where ith integer denotes the Bollywood superstar.

// Output format
// You are required to output a single integer denoting the bollywood superstar who arrived without a body double. If all the superstars arrived with a body double print a -1

// Constraints
// 1 <= N <= 1e5

// 0 <= Superstar <= 1e9

// Sample Input 1
// 4

// 9 6 7 6

// Sample Output 1
// 9

// Explanation 1
// Among the superstars who attended, 6 came with a body double whereas 9 and 7 came without any body doubles. The first superstar who arrived without a body double is 9.

//tc=O(n), sc=O(1)
function firstUniqueInteger(n, arr) {
    //will run 2 loops
    // one to add the count
    //second to return the first element with count 1
    let map = new Map()

    for (let item of arr) {
        if (map.has(item)) {
            let count = map.get(item)
            map.set(item, ++count)
        } else {
            map.set(item, 1)
        }
    }

    for(let [key, value] of map){
        // this will return the first key with value 1
        if(value===1) return key
    }
}
let n = 4
let arr = [9, 6, 7, 6]

let result = firstUniqueInteger(n, arr);
console.log(result);