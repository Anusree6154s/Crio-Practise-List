// Problem Description
// You are given a m x n 2D grid initialized with these three possible values:

// -1 - A wall or an obstacle, you cannot go through here.

// 0 - A gate.

// INF - Infinity means an empty room. We use the value 2^31 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.

// Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

// You can only move in 4 directions to find the gate, not diagonally.

// Input format
// First line contains 2 space separated integers M and N, where M is number of rows and N is number of columns in the 2D matrix

// Next M lines contain N space separated integers each indicating the values for each row

// Output format
// M lines with N space separated integers, with each line representing the updated values (distance to the nearest gate) for the rooms.

// Constraints
// 1 <= M,N <= 1000

// Sample Input 1
// 4 4

// INF -1 0 INF

// INF INF INF -1

// INF -1 INF -1

// 0 -1 INF INF

// Sample Output 1
// 3 -1 0 1

// 2 2 1 -1

// 1 -1 2 -1

// 0 -1 3 4

// Explanation 1
// The matrix in the output represents the number of steps to get from an empty room (represented by INF in the input) at a particular cell to its nearest gate, without going through a wall (represented by -1)

function wallsAndGates(grid, n, m) {}