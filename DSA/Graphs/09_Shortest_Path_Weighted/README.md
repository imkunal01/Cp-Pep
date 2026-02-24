# Shortest Path (Weighted Graph)

> **Core Concept:** Choose algorithm based on weights

## Sub-Patterns

| Algorithm | Use Case | Time Complexity |
|-----------|----------|-----------------|
| **Dijkstra** | Positive weights, single source | O((V+E) log V) |
| **Bellman-Ford** | Negative weights allowed | O(V × E) |
| **Floyd-Warshall** | All pairs shortest path | O(V³) |
| **0-1 BFS** | Weights are 0 or 1 only | O(V + E) |

## Keywords to Spot

- "minimum cost"
- "distance"
- "weights"
- "cheapest"

## LeetCode Problems

| # | Problem | Difficulty |
|---|---------|------------|
| 743 | Network Delay Time | Medium |
| 787 | Cheapest Flights Within K Stops | Medium |
| 1514 | Path with Maximum Probability | Medium |
| 1631 | Path With Minimum Effort | Medium |
| 1334 | Find the City With the Smallest Number of Neighbors | Medium |
| 1786 | Number of Restricted Paths From First to Last Node | Medium |
| 1976 | Number of Ways to Arrive at Destination | Medium |
| 505 | The Maze II | Medium |
| 882 | Reachable Nodes In Subdivided Graph | Hard |
| 1368 | Minimum Cost to Make at Least One Valid Path in a Grid | Hard |
| 778 | Swim in Rising Water | Hard |
| 1293 | Shortest Path in a Grid with Obstacles Elimination | Hard |

## Dijkstra's Algorithm Template

```cpp
vector<int> dijkstra(int src, int n, vector<vector<pair<int,int>>>& adj) {
    vector<int> dist(n, INT_MAX);
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
    
    dist[src] = 0;
    pq.push({0, src});
    
    while(!pq.empty()) {
        auto [d, node] = pq.top(); pq.pop();
        if(d > dist[node]) continue;
        
        for(auto [neighbor, weight] : adj[node]) {
            if(dist[node] + weight < dist[neighbor]) {
                dist[neighbor] = dist[node] + weight;
                pq.push({dist[neighbor], neighbor});
            }
        }
    }
    return dist;
}
```

## Bellman-Ford Template

```cpp
vector<int> bellmanFord(int src, int n, vector<tuple<int,int,int>>& edges) {
    vector<int> dist(n, INT_MAX);
    dist[src] = 0;
    
    for(int i = 0; i < n - 1; i++) {
        for(auto [u, v, w] : edges) {
            if(dist[u] != INT_MAX && dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
            }
        }
    }
    
    // Check for negative cycle
    for(auto [u, v, w] : edges) {
        if(dist[u] != INT_MAX && dist[u] + w < dist[v]) {
            return {}; // Negative cycle exists
        }
    }
    return dist;
}
```

## Floyd-Warshall Template

```cpp
void floydWarshall(vector<vector<int>>& dist, int n) {
    for(int k = 0; k < n; k++) {
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                if(dist[i][k] != INT_MAX && dist[k][j] != INT_MAX) {
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }
}
```

## Notes

- Dijkstra: Greedy, doesn't work with negative weights
- Bellman-Ford: Can detect negative cycles
- Floyd-Warshall: Good for dense graphs, all pairs
