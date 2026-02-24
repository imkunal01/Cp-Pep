# Cycle Detection Pattern

> **Core Concept:** Detect loops in graph

## Types

1. **Undirected Graph Cycle** - Using DFS with parent tracking
2. **Directed Graph Cycle** - Using DFS with recursion stack / colors

## Typical Problems

- Is cycle present?
- Can we finish tasks?
- Is graph valid?

## Keywords to Spot

- "cycle"
- "loop"
- "dependency issue"
- "circular"

## LeetCode Problems

| # | Problem | Difficulty |
|---|---------|------------|
| 207 | Course Schedule | Medium |
| 210 | Course Schedule II | Medium |
| 802 | Find Eventual Safe States | Medium |
| 261 | Graph Valid Tree | Medium |
| 684 | Redundant Connection | Medium |
| 685 | Redundant Connection II | Hard |
| 1559 | Detect Cycles in 2D Grid | Medium |
| 785 | Is Graph Bipartite? | Medium |
| 1462 | Course Schedule IV | Medium |

## Undirected Graph - DFS Template

```cpp
bool hasCycle(int node, int parent, vector<bool>& visited) {
    visited[node] = true;
    for(int neighbor : adj[node]) {
        if(!visited[neighbor]) {
            if(hasCycle(neighbor, node, visited)) return true;
        } else if(neighbor != parent) {
            return true; // Cycle found!
        }
    }
    return false;
}
```

## Directed Graph - DFS Template (3 Colors)

```cpp
// 0 = white (unvisited), 1 = gray (in stack), 2 = black (done)
bool hasCycle(int node, vector<int>& color) {
    color[node] = 1; // Mark gray
    for(int neighbor : adj[node]) {
        if(color[neighbor] == 1) return true; // Back edge!
        if(color[neighbor] == 0 && hasCycle(neighbor, color)) return true;
    }
    color[node] = 2; // Mark black
    return false;
}
```

## Notes

- Undirected: Check if visited neighbor is not parent
- Directed: Use recursion stack or 3-color method
- Union-Find can also detect cycles
