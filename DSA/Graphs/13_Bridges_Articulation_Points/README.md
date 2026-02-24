# Bridges & Articulation Points

> **Core Concept:** Critical connections in a graph

## Definitions

- **Bridge**: Edge whose removal disconnects the graph
- **Articulation Point**: Node whose removal disconnects the graph

## Typical Problems

- Removing edge breaks graph
- Critical nodes
- Find weak points

## Keywords to Spot

- "critical connection"
- "single point of failure"
- "cut edge"
- "cut vertex"

## LeetCode Problems

| # | Problem | Difficulty |
|---|---------|------------|
| 1192 | Critical Connections in a Network | Hard |
| 928 | Minimize Malware Spread II | Hard |

## Find Bridges Template (Tarjan's)

```cpp
class Bridges {
    int n, timer = 0;
    vector<vector<int>> adj;
    vector<int> disc, low;
    vector<pair<int,int>> bridges;
    
    void dfs(int u, int parent) {
        disc[u] = low[u] = timer++;
        
        for(int v : adj[u]) {
            if(v == parent) continue;
            
            if(disc[v] == -1) {
                dfs(v, u);
                low[u] = min(low[u], low[v]);
                
                // Bridge condition
                if(low[v] > disc[u]) {
                    bridges.push_back({u, v});
                }
            } else {
                low[u] = min(low[u], disc[v]);
            }
        }
    }
    
public:
    vector<pair<int,int>> findBridges(int n, vector<vector<int>>& adj) {
        this->n = n;
        this->adj = adj;
        disc.assign(n, -1);
        low.assign(n, -1);
        
        for(int i = 0; i < n; i++) {
            if(disc[i] == -1) dfs(i, -1);
        }
        return bridges;
    }
};
```

## Find Articulation Points Template

```cpp
class ArticulationPoints {
    int n, timer = 0;
    vector<vector<int>> adj;
    vector<int> disc, low;
    vector<bool> isAP;
    
    void dfs(int u, int parent) {
        disc[u] = low[u] = timer++;
        int children = 0;
        
        for(int v : adj[u]) {
            if(disc[v] == -1) {
                children++;
                dfs(v, u);
                low[u] = min(low[u], low[v]);
                
                // AP conditions
                if(parent == -1 && children > 1) {
                    isAP[u] = true; // Root with multiple children
                }
                if(parent != -1 && low[v] >= disc[u]) {
                    isAP[u] = true; // Non-root condition
                }
            } else if(v != parent) {
                low[u] = min(low[u], disc[v]);
            }
        }
    }
    
public:
    vector<int> findAPs(int n, vector<vector<int>>& adj) {
        this->n = n;
        this->adj = adj;
        disc.assign(n, -1);
        low.assign(n, -1);
        isAP.assign(n, false);
        
        for(int i = 0; i < n; i++) {
            if(disc[i] == -1) dfs(i, -1);
        }
        
        vector<int> result;
        for(int i = 0; i < n; i++) {
            if(isAP[i]) result.push_back(i);
        }
        return result;
    }
};
```

## Key Concepts

- **disc[u]**: Discovery time of node u
- **low[u]**: Lowest discovery time reachable from subtree of u

### Bridge Condition
- Edge (u, v) is bridge if `low[v] > disc[u]`
- Means no back edge from subtree of v to ancestors of u

### Articulation Point Conditions
1. Root: Has 2+ children in DFS tree
2. Non-root: Has child v where `low[v] >= disc[u]`

## Notes

- Time Complexity: O(V + E)
- Based on DFS tree properties
- low[] tracks back edges
