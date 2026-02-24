# Tree but Asked as Graph

> **Core Concept:** Trees ARE graphs (connected, no cycle, V-1 edges)

## Typical Problems

- Distance between nodes
- Tree DP
- LCA (Lowest Common Ancestor)
- Tree diameter
- Tree center

## Keywords to Spot

- "tree"
- "n-1 edges"
- "connected"
- "root"
- "parent-child"

## LeetCode Problems

| # | Problem | Difficulty |
|---|---------|------------|
| 310 | Minimum Height Trees | Medium |
| 834 | Sum of Distances in Tree | Hard |
| 863 | All Nodes Distance K in Binary Tree | Medium |
| 1245 | Tree Diameter | Medium |
| 1367 | Linked List in Binary Tree | Medium |
| 1443 | Minimum Time to Collect All Apples in a Tree | Medium |
| 1519 | Number of Nodes in Sub-Tree With Same Label | Medium |
| 2246 | Longest Path With Different Adjacent Characters | Hard |
| 124 | Binary Tree Maximum Path Sum | Hard |
| 337 | House Robber III | Medium |
| 543 | Diameter of Binary Tree | Easy |
| 1617 | Count Subtrees With Max Distance Between Cities | Hard |

## Tree Diameter (Two DFS)

```cpp
pair<int,int> bfs(int start, vector<vector<int>>& adj) {
    int n = adj.size();
    vector<int> dist(n, -1);
    queue<int> q;
    q.push(start);
    dist[start] = 0;
    int farthest = start, maxDist = 0;
    
    while(!q.empty()) {
        int node = q.front(); q.pop();
        for(int neighbor : adj[node]) {
            if(dist[neighbor] == -1) {
                dist[neighbor] = dist[node] + 1;
                if(dist[neighbor] > maxDist) {
                    maxDist = dist[neighbor];
                    farthest = neighbor;
                }
                q.push(neighbor);
            }
        }
    }
    return {farthest, maxDist};
}

int treeDiameter(vector<vector<int>>& adj) {
    auto [farthest1, _] = bfs(0, adj);
    auto [_, diameter] = bfs(farthest1, adj);
    return diameter;
}
```

## Tree DP Template

```cpp
// Example: Count nodes in each subtree
vector<int> subtreeSize;

int dfs(int node, int parent, vector<vector<int>>& adj) {
    subtreeSize[node] = 1;
    for(int child : adj[node]) {
        if(child != parent) {
            subtreeSize[node] += dfs(child, node, adj);
        }
    }
    return subtreeSize[node];
}
```

## Sum of Distances in Tree

```cpp
vector<int> count, ans;
int n;

void dfs1(int node, int parent, vector<vector<int>>& adj) {
    for(int child : adj[node]) {
        if(child != parent) {
            dfs1(child, node, adj);
            count[node] += count[child];
            ans[node] += ans[child] + count[child];
        }
    }
}

void dfs2(int node, int parent, vector<vector<int>>& adj) {
    for(int child : adj[node]) {
        if(child != parent) {
            ans[child] = ans[node] - count[child] + (n - count[child]);
            dfs2(child, node, adj);
        }
    }
}

vector<int> sumOfDistances(int n, vector<vector<int>>& edges) {
    this->n = n;
    count.assign(n, 1);
    ans.assign(n, 0);
    vector<vector<int>> adj(n);
    
    for(auto& e : edges) {
        adj[e[0]].push_back(e[1]);
        adj[e[1]].push_back(e[0]);
    }
    
    dfs1(0, -1, adj);
    dfs2(0, -1, adj);
    return ans;
}
```

## Find Tree Centers (for Minimum Height Trees)

```cpp
vector<int> findMinHeightTrees(int n, vector<vector<int>>& edges) {
    if(n == 1) return {0};
    
    vector<vector<int>> adj(n);
    vector<int> degree(n, 0);
    
    for(auto& e : edges) {
        adj[e[0]].push_back(e[1]);
        adj[e[1]].push_back(e[0]);
        degree[e[0]]++;
        degree[e[1]]++;
    }
    
    queue<int> leaves;
    for(int i = 0; i < n; i++) {
        if(degree[i] == 1) leaves.push(i);
    }
    
    int remaining = n;
    while(remaining > 2) {
        int size = leaves.size();
        remaining -= size;
        while(size--) {
            int leaf = leaves.front(); leaves.pop();
            for(int neighbor : adj[leaf]) {
                if(--degree[neighbor] == 1) {
                    leaves.push(neighbor);
                }
            }
        }
    }
    
    vector<int> result;
    while(!leaves.empty()) {
        result.push_back(leaves.front());
        leaves.pop();
    }
    return result;
}
```

## Notes

- Tree = Connected acyclic graph
- |E| = |V| - 1 always
- Any node can be root (re-root technique)
- Two DFS common: compute for root, then propagate
- Tree center(s): 1 or 2 nodes (middle of diameter)
