# Topological Sort / Dependency Pattern 🔥

> **Core Concept:** Order things respecting dependencies

## Typical Problems

- Course schedule
- Build systems
- Task scheduling
- Alien dictionary

## Keywords to Spot

- "prerequisite"
- "before"
- "dependency"
- "order"
- "sequence"

## LeetCode Problems

| # | Problem | Difficulty |
|---|---------|------------|
| 207 | Course Schedule | Medium |
| 210 | Course Schedule II | Medium |
| 269 | Alien Dictionary | Hard |
| 310 | Minimum Height Trees | Medium |
| 802 | Find Eventual Safe States | Medium |
| 1136 | Parallel Courses | Medium |
| 1203 | Sort Items by Groups Respecting Dependencies | Hard |
| 1857 | Largest Color Value in a Directed Graph | Hard |
| 2115 | Find All Possible Recipes from Given Supplies | Medium |
| 1462 | Course Schedule IV | Medium |
| 329 | Longest Increasing Path in a Matrix | Hard |

## Kahn's Algorithm (BFS) Template

```cpp
vector<int> topologicalSort(int n, vector<vector<int>>& adj) {
    vector<int> indegree(n, 0);
    for(int i = 0; i < n; i++) {
        for(int neighbor : adj[i]) {
            indegree[neighbor]++;
        }
    }
    
    queue<int> q;
    for(int i = 0; i < n; i++) {
        if(indegree[i] == 0) q.push(i);
    }
    
    vector<int> result;
    while(!q.empty()) {
        int node = q.front(); q.pop();
        result.push_back(node);
        for(int neighbor : adj[node]) {
            if(--indegree[neighbor] == 0) {
                q.push(neighbor);
            }
        }
    }
    
    if(result.size() != n) return {}; // Cycle exists!
    return result;
}
```

## DFS Template

```cpp
void dfs(int node, vector<bool>& visited, stack<int>& st) {
    visited[node] = true;
    for(int neighbor : adj[node]) {
        if(!visited[neighbor]) {
            dfs(neighbor, visited, st);
        }
    }
    st.push(node); // Push after all neighbors done
}
```

## Notes

- Only valid for DAG (Directed Acyclic Graph)
- If cycle exists, topological sort not possible
- Multiple valid orderings may exist
