// Problem Description
// Given a 2D board and a word, find if the word exists on the board.

// The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Input format
// First line will have two integers N , M representing the rows and columns of the board.

// Next N lines will have the board configuration.

// Next line will have a string which is the word that is to be constructed.

// Output format
// true or false

// Sample Input 1
// 3 4

// A B C E

// S F C S

// A D E E

// ABCCED

// Sample Output 1
// true

// Constraints
// The board and word consists only of lowercase and uppercase English letters.

// 1 <= board.length <= 200

// 1 <= board[i].length <= 200

// 1 <= word.length <= 10^3

// Explanation 1
// The sequence ABCCED can be be achieved on the given board by starting at A in the first row and moving sequentially to either horizontal or vertical neighbors

function WordSearch(grid, word) {}