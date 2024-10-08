// Problem Description
// Watch Me is a wierd and complicated movie series which has n seasons (0 to n-1). The seasons of this series are to be watched in a particular order to understand the series completely. Note that there can be more than one order to watch the seasons. Your small brother wants to watch the series. He wants you to tell him an order in which he can watch the series to understand completely. You are given an array (prerequisites) and each element of the array is of the form [int a, int b] which denotes that season b needs to be watched before season a. Return any valid sequence in which your brother can watch to understand completely. Note that it might be impossible to watch the series in any order. In that case return an empty array.

// Input format
// First line contains two space separated integers, numSeasons denoting the number of seasons and n denoting the size of the prerequisites array.

// Next n line contains two space separated integers each.

// Output format
// Return any valid ordering of seasons.

// Sample Input 1
// 2 1

// 1 0

// Sample Output 1
// 0 1

// Explanation
// There are a total of 2 seasons to watch. To watch season 1 you should have finished season 0. So the correct season order is [0,1].

// Sample Input 2
// 4 4

// 1 0

// 2 0

// 3 1

// 3 2

// Sample Output 2
// 0 2 1 3

// Explanation
// There are a total of 4 seasons to watch. To watch season 3 you should have finished both season 1 and 2. Both season 1 and 2 should be taken after you finished season 0.

// So one correct watching order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

// Sample Input 3
// 1 0

// Sample Output 3
// 0

// Explanation
// There is no prerequisites to watch and there is only one season.

// Constraints
// 1 <= numSeasons <= 2000

// 0 <= prerequisites.length(n) <= numSeasons * (numSeasons - 1)

// prerequisites[i].length == 2

// 0 <= ai, bi < numSeasons

// ai != bi

// All the pairs [ai, bi] are distinct.

function watchMe(numSeasons, n, prerequisites) {
    const graph = Array.from({ length: numSeasons }, () => []);
    const indegree = Array(numSeasons).fill(0);
    const result = [];

    // Populate the graph and indegree array
    for (let [a, b] of prerequisites) {
        graph[b].push(a);
        indegree[a]++;
    }

    // Find all nodes with no incoming edges
    const queue = [];
    for (let i = 0; i < numSeasons; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    // Kahn's algorithm (BFS)
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node);

        for (let neighbor of graph[node]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Check if we could order all seasons
    return result.length === numSeasons ? result : [];
}