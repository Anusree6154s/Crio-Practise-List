// Problem Description
// Print all ways of arranging n queens on an n x n chess board so that none of them share the same row, column or diagonal. In this case, "diagonal" means all diagonals, not just the two that bisects the board or passes through the center.

// Input format
// The number n

// Output format
// Print all the possible arrangements using an n x n board (row and col), where each cell (row, col) will either contain 1 if it has a queen at this cell or 0 if it doesn't. Each arrangement is separated from the next by a new line. If no solution exists, print "No Solution Exists".

// Constraints
// 1 <= n <= 8

// Sample Input 1
// 4

// Sample Output 1
// 0010

// 1000

// 0001

// 0100

// 0100

// 0001

// 1000

// 0010

// Explanation 1
// The output shows the only 2 possible arrangements in a 4 x 4 board where the 4 queens cannot attack each other.

function nQueens(n) {}