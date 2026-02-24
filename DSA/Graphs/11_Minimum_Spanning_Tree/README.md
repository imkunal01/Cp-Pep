# Minimum Spanning Tree (MST)

> **Core Concept:** Connect all nodes with minimum cost

## Algorithms

| Algorithm | Approach | Time Complexity |
|-----------|----------|-----------------|
| **Kruskal** | Sort edges + Union-Find | O(E log E) |
| **Prim** | Greedy + Priority Queue | O(E log V) |

## Typical Problems

- Minimum cost to connect cities
- Cable connections
- Network design

## Keywords to Spot

- "connect all"
- "minimum cost"
- "minimum total weight"
- "spanning"

## LeetCode Problems

| # | Problem | Difficulty |
|---|---------|------------|
| 1584 | Min Cost to Connect All Points | Medium |
| 1135 | Connecting Cities With Minimum Cost | Medium |
| 1168 | Optimize Water Distribution in a Village | Hard |
| 1489 | Find Critical and Pseudo-Critical Edges in MST | Hard |
| 1579 | Remove Max Number of Edges to Keep Graph Fully Traversable | Hard |
| 1631 | Path With Minimum Effort | Medium |

## Kruskal's Algorithm Template

```cpp
int kruskal(int n, vector<tuple<int,int,int>>& edges) {
    // edges: {weight, u, v}
    sort(edges.begin(), edges.end());
    
    UnionFind uf(n);
    int mstCost = 0, edgesUsed = 0;
    
    for(auto [w, u, v] : edges) {
        if(uf.unite(u, v)) {
            mstCost += w;
            edgesUsed++;
            if(edgesUsed == n - 1) break;
        }
    }
    
    return edgesUsed == n - 1 ? mstCost : -1; // -1 if not connected
}
```

## Prim's Algorithm Template

```cpp
int prim(int n, vector<vector<pair<int,int>>>& adj) {
    vector<bool> inMST(n, false);
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
    
    pq.push({0, 0}); // {weight, node}
    int mstCost = 0, edgesUsed = 0;
    
    while(!pq.empty() && edgesUsed < n) {
        auto [w, u] = pq.top(); pq.pop();
        if(inMST[u]) continue;
        
        inMST[u] = true;
        mstCost += w;
        edgesUsed++;
        
        for(auto [v, weight] : adj[u]) {
            if(!inMST[v]) {
                pq.push({weight, v});
            }
        }
    }
    
    return edgesUsed == n ? mstCost : -1;
}
```

## Notes

- MST has exactly V-1 edges
- Kruskal: Better for sparse graphs
- Prim: Better for dense graphs
- Both produce same cost (may differ in edges)
