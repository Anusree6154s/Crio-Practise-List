// Problem Description
// You are given a list of projects and a list of dependencies, which is a list of pairs of projects, where the second project is dependent on the first project. All of a project's dependencies must be built before the project is.

// Find a build order that will allow the projects to be built according to their dependencies. If there is no valid build order, print -1.

// Input format
// First line contains two space separated integers N and D, where N is the number of projects and D is the number of dependencies, respectively.

// Second line contains N space separated strings which are the names of the N projects.

// Next D lines contain two space separated strings P and Q, which says project Q depends on project P (P and Q will be among the project names specified on the second line).

// Output format
// Print the space separated project names in the order they should be built.

// If there are multiple such orders possible, you can print any one of them.

// If there is no possible way to build, print -1.

// Constraints
// N <= 500

// 1 <= D <= min(N*(N-1)/2,100000)

// 1 <= Project name string length <= 10

// Sample Input 1
// 5 3

// A xy a c b

// a xy

// b A

// xy c

// Sample Output 1
// a b xy A c

// Explanation 1
// In this example, there are 3 dependencies. The projects can be built in any order satisfying these 3 dependencies i.e. a should be built before xy, b should be built before A, and xy should be built before c.

// The order "a b xy A c" is one such order.

function buildOrder(project,depend) {}