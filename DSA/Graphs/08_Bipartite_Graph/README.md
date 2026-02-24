# Bipartite Graph Pattern

> **Core Concept:** Can graph be colored using 2 colors?

## Typical Problems

- Is graph bipartite?
- Possible to divide into 2 groups?
- Conflict-free grouping

## Keywords to Spot

- "two groups"
- "no conflict"
- "red / blue"
- "divide"
- "alternate"

## LeetCode Problems

| # | Problem | Difficulty |
|---|---------|------------|
| 785 | Is Graph Bipartite? | Medium |
| 886 | Possible Bipartition | Medium |
| 1042 | Flower Planting With No Adjacent | Medium |

## BFS Template

```cpp
bool isBipartite(vector<vector<int>>& graph) {
    int n = graph.size();
    vector<int> color(n, -1);
    
    for(int i = 0; i < n; i++) {
        if(color[i] != -1) continue;
        
        queue<int> q;
        q.push(i);
        color[i] = 0;
        
        while(!q.empty()) {
            int node = q.front(); q.pop();
            for(int neighbor : graph[node]) {
                if(color[neighbor] == -1) {
                    color[neighbor] = 1 - color[node];
                    q.push(neighbor);
                } else if(color[neighbor] == color[node]) {
                    return false;
                }
            }
        }
    }
    return true;
}
```

## DFS Template

```cpp
bool dfs(int node, int c, vector<int>& color, vector<vector<int>>& graph) {
    color[node] = c;
    for(int neighbor : graph[node]) {
        if(color[neighbor] == -1) {
            if(!dfs(neighbor, 1 - c, color, graph)) return false;
        } else if(color[neighbor] == c) {
            return false;
        }
    }
    return true;
}
```

## Notes

- Graph is bipartite ⟺ No odd-length cycle
- Use 2-coloring: 0 and 1
- Check all components (graph may be disconnected)
