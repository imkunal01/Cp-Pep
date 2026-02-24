# Shortest Path (Unweighted Graph)

> **Core Concept:** BFS only - each edge has weight 1

## Typical Problems

- Minimum steps
- Minimum edges
- Shortest path in maze

## Keywords to Spot

- "minimum steps"
- "minimum moves"
- "shortest"
- "fewest edges"

## LeetCode Problems

| # | Problem | Difficulty |
|---|---------|------------|
| 1091 | Shortest Path in Binary Matrix | Medium |
| 127 | Word Ladder | Hard |
| 752 | Open the Lock | Medium |
| 433 | Minimum Genetic Mutation | Medium |
| 863 | All Nodes Distance K in Binary Tree | Medium |
| 1654 | Minimum Jumps to Reach Home | Medium |
| 1345 | Jump Game IV | Hard |
| 1263 | Minimum Moves to Move a Box to Their Target Location | Hard |
| 1311 | Get Watched Videos by Your Friends | Medium |
| 909 | Snakes and Ladders | Medium |
| 815 | Bus Routes | Hard |
| 847 | Shortest Path Visiting All Nodes | Hard |

## Template

```cpp
int bfs(int start, int end) {
    queue<int> q;
    vector<bool> visited(n, false);
    q.push(start);
    visited[start] = true;
    int dist = 0;
    
    while(!q.empty()) {
        int size = q.size();
        while(size--) {
            int node = q.front(); q.pop();
            if(node == end) return dist;
            for(int neighbor : adj[node]) {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    q.push(neighbor);
                }
            }
        }
        dist++;
    }
    return -1; // unreachable
}
```

## Notes

- BFS guarantees shortest path in unweighted graphs
- Each level = distance + 1
- Time: O(V + E), Space: O(V)
