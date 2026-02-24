# Strongly Connected Components (Advanced)

> **Core Concept:** Directed graph components where every node is reachable from every other

## Algorithms

| Algorithm | Approach |
|-----------|----------|
| **Kosaraju** | Two DFS passes |
| **Tarjan** | Single DFS with low-link values |

## Keywords to Spot

- "mutual reachability"
- "SCC"
- "strongly connected"

## LeetCode Problems

| # | Problem | Difficulty |
|---|---------|------------|
| 1192 | Critical Connections in a Network | Hard |
| 802 | Find Eventual Safe States | Medium |
| 2360 | Longest Cycle in a Graph | Hard |

## Kosaraju's Algorithm Template

```cpp
class SCC {
    int n;
    vector<vector<int>> adj, radj;
    vector<bool> visited;
    stack<int> order;
    
    void dfs1(int node) {
        visited[node] = true;
        for(int neighbor : adj[node]) {
            if(!visited[neighbor]) dfs1(neighbor);
        }
        order.push(node);
    }
    
    void dfs2(int node, vector<int>& component) {
        visited[node] = true;
        component.push_back(node);
        for(int neighbor : radj[node]) {
            if(!visited[neighbor]) dfs2(neighbor, component);
        }
    }
    
public:
    vector<vector<int>> findSCCs(int n, vector<vector<int>>& adj) {
        this->n = n;
        this->adj = adj;
        radj.resize(n);
        visited.assign(n, false);
        
        // Build reverse graph
        for(int u = 0; u < n; u++) {
            for(int v : adj[u]) {
                radj[v].push_back(u);
            }
        }
        
        // First DFS - get finish order
        for(int i = 0; i < n; i++) {
            if(!visited[i]) dfs1(i);
        }
        
        // Second DFS - find SCCs
        visited.assign(n, false);
        vector<vector<int>> sccs;
        while(!order.empty()) {
            int node = order.top(); order.pop();
            if(!visited[node]) {
                vector<int> component;
                dfs2(node, component);
                sccs.push_back(component);
            }
        }
        return sccs;
    }
};
```

## Tarjan's Algorithm Template

```cpp
class Tarjan {
    int n, timer = 0;
    vector<vector<int>> adj;
    vector<int> disc, low;
    vector<bool> onStack;
    stack<int> st;
    vector<vector<int>> sccs;
    
    void dfs(int u) {
        disc[u] = low[u] = timer++;
        st.push(u);
        onStack[u] = true;
        
        for(int v : adj[u]) {
            if(disc[v] == -1) {
                dfs(v);
                low[u] = min(low[u], low[v]);
            } else if(onStack[v]) {
                low[u] = min(low[u], disc[v]);
            }
        }
        
        // Root of SCC
        if(low[u] == disc[u]) {
            vector<int> component;
            while(true) {
                int v = st.top(); st.pop();
                onStack[v] = false;
                component.push_back(v);
                if(v == u) break;
            }
            sccs.push_back(component);
        }
    }
    
public:
    vector<vector<int>> findSCCs(int n, vector<vector<int>>& adj) {
        this->n = n;
        this->adj = adj;
        disc.assign(n, -1);
        low.assign(n, -1);
        onStack.assign(n, false);
        
        for(int i = 0; i < n; i++) {
            if(disc[i] == -1) dfs(i);
        }
        return sccs;
    }
};
```

## Notes

- SCC: Maximal set where u→v and v→u for all pairs
- Kosaraju: Easier to understand
- Tarjan: Single DFS, more efficient
- After condensing SCCs → DAG
