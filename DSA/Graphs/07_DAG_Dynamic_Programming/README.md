# DAG Dynamic Programming Pattern

> **Core Concept:** DP on Directed Acyclic Graph

## Typical Problems

- Longest path in DAG
- Number of ways
- Max/min cost

## Keywords to Spot

- "DAG"
- "maximum"
- "paths"
- "ways"
- "count paths"

## LeetCode Problems

| # | Problem | Difficulty |
|---|---------|------------|
| 329 | Longest Increasing Path in a Matrix | Hard |
| 1857 | Largest Color Value in a Directed Graph | Hard |
| 1059 | All Paths from Source Lead to Destination | Medium |
| 797 | All Paths From Source to Target | Medium |
| 1976 | Number of Ways to Arrive at Destination | Medium |
| 1514 | Path with Maximum Probability | Medium |
| 1368 | Minimum Cost to Make at Least One Valid Path in a Grid | Hard |
| 787 | Cheapest Flights Within K Stops | Medium |

## Template - Longest Path in DAG

```cpp
int longestPath(int n, vector<vector<int>>& adj) {
    vector<int> indegree(n, 0), dist(n, 0);
    
    for(int i = 0; i < n; i++) {
        for(int j : adj[i]) indegree[j]++;
    }
    
    queue<int> q;
    for(int i = 0; i < n; i++) {
        if(indegree[i] == 0) q.push(i);
    }
    
    while(!q.empty()) {
        int node = q.front(); q.pop();
        for(int neighbor : adj[node]) {
            dist[neighbor] = max(dist[neighbor], dist[node] + 1);
            if(--indegree[neighbor] == 0) {
                q.push(neighbor);
            }
        }
    }
    
    return *max_element(dist.begin(), dist.end());
}
```

## Template - Count Paths (Memoization)

```cpp
int countPaths(int node, int target, vector<int>& memo) {
    if(node == target) return 1;
    if(memo[node] != -1) return memo[node];
    
    int paths = 0;
    for(int neighbor : adj[node]) {
        paths += countPaths(neighbor, target, memo);
    }
    return memo[node] = paths;
}
```

## Notes

- Process nodes in topological order
- DP state: dp[node] = answer for subgraph rooted at node
- Can use memoization with DFS
