# Graph Coloring (General)

> **Core Concept:** Assign colors under constraints

## Typical Problems

- Scheduling problems
- Resource allocation
- Register allocation (compilers)
- Map coloring

## Keywords to Spot

- "color"
- "assign"
- "no adjacent same"
- "schedule"
- "conflict"

## LeetCode Problems

| # | Problem | Difficulty |
|---|---------|------------|
| 785 | Is Graph Bipartite? | Medium |
| 886 | Possible Bipartition | Medium |
| 1042 | Flower Planting With No Adjacent | Medium |
| 1129 | Shortest Path with Alternating Colors | Medium |

## Greedy Coloring Template

```cpp
int greedyColoring(int n, vector<vector<int>>& adj) {
    vector<int> color(n, -1);
    int maxColor = 0;
    
    for(int u = 0; u < n; u++) {
        // Find colors used by neighbors
        set<int> usedColors;
        for(int v : adj[u]) {
            if(color[v] != -1) {
                usedColors.insert(color[v]);
            }
        }
        
        // Find smallest unused color
        int c = 0;
        while(usedColors.count(c)) c++;
        color[u] = c;
        maxColor = max(maxColor, c);
    }
    
    return maxColor + 1; // Number of colors used
}
```

## Flower Planting Template

```cpp
vector<int> gardenNoAdj(int n, vector<vector<int>>& paths) {
    vector<vector<int>> adj(n + 1);
    for(auto& p : paths) {
        adj[p[0]].push_back(p[1]);
        adj[p[1]].push_back(p[0]);
    }
    
    vector<int> color(n + 1, 0);
    
    for(int i = 1; i <= n; i++) {
        set<int> usedColors;
        for(int neighbor : adj[i]) {
            usedColors.insert(color[neighbor]);
        }
        
        // Assign first available color (1-4)
        for(int c = 1; c <= 4; c++) {
            if(!usedColors.count(c)) {
                color[i] = c;
                break;
            }
        }
    }
    
    return vector<int>(color.begin() + 1, color.end());
}
```

## Backtracking Coloring (m-Coloring Problem)

```cpp
bool canColor(int node, int c, vector<int>& color, vector<vector<int>>& adj) {
    for(int neighbor : adj[node]) {
        if(color[neighbor] == c) return false;
    }
    return true;
}

bool solve(int node, int n, int m, vector<int>& color, vector<vector<int>>& adj) {
    if(node == n) return true;
    
    for(int c = 1; c <= m; c++) {
        if(canColor(node, c, color, adj)) {
            color[node] = c;
            if(solve(node + 1, n, m, color, adj)) return true;
            color[node] = 0;
        }
    }
    return false;
}

bool graphColoring(int n, int m, vector<vector<int>>& adj) {
    vector<int> color(n, 0);
    return solve(0, n, m, color, adj);
}
```

## Concepts

### Chromatic Number
- Minimum colors needed to color graph
- NP-hard to find in general
- Bipartite graphs need 2 colors
- Planar graphs need at most 4 colors

### Four Color Theorem
- Any planar map can be colored with 4 colors

## Notes

- Greedy doesn't guarantee minimum colors
- Bipartite = 2-colorable = no odd cycle
- Degree-based ordering helps greedy
