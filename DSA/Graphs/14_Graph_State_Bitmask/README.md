# Graph + State (Bitmask / Extra Info)

> **Core Concept:** Node + extra state information

## Typical Problems

- Shortest path visiting all nodes
- Keys & locks
- Limited moves with constraints

## Keywords to Spot

- "state"
- "visited all"
- "keys"
- "constraints"
- "must visit"

## LeetCode Problems

| # | Problem | Difficulty |
|---|---------|------------|
| 847 | Shortest Path Visiting All Nodes | Hard |
| 864 | Shortest Path to Get All Keys | Hard |
| 1293 | Shortest Path in a Grid with Obstacles Elimination | Hard |
| 1066 | Campus Bikes II | Medium |
| 943 | Find the Shortest Superstring | Hard |
| 1125 | Smallest Sufficient Team | Hard |
| 1494 | Parallel Courses II | Hard |
| 1595 | Minimum Cost to Connect Two Groups of Points | Hard |
| 1681 | Minimum Incompatibility | Hard |
| 1799 | Maximize Score After N Operations | Hard |
| 1931 | Painting a Grid With Three Different Colors | Hard |

## BFS with State Template

```cpp
// State: {node, bitmask of visited nodes}
int shortestPathAllNodes(vector<vector<int>>& graph) {
    int n = graph.size();
    int fullMask = (1 << n) - 1;
    
    // visited[node][mask]
    vector<vector<bool>> visited(n, vector<bool>(1 << n, false));
    queue<tuple<int, int, int>> q; // {node, mask, distance}
    
    // Start from each node
    for(int i = 0; i < n; i++) {
        q.push({i, 1 << i, 0});
        visited[i][1 << i] = true;
    }
    
    while(!q.empty()) {
        auto [node, mask, dist] = q.front(); q.pop();
        
        if(mask == fullMask) return dist;
        
        for(int neighbor : graph[node]) {
            int newMask = mask | (1 << neighbor);
            if(!visited[neighbor][newMask]) {
                visited[neighbor][newMask] = true;
                q.push({neighbor, newMask, dist + 1});
            }
        }
    }
    return -1;
}
```

## Keys and Locks Template

```cpp
// State: {row, col, keys_bitmask}
int shortestPathAllKeys(vector<string>& grid) {
    int m = grid.size(), n = grid[0].size();
    int allKeys = 0;
    int startR, startC;
    
    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            if(grid[i][j] == '@') { startR = i; startC = j; }
            if(grid[i][j] >= 'a' && grid[i][j] <= 'f') {
                allKeys |= (1 << (grid[i][j] - 'a'));
            }
        }
    }
    
    // visited[r][c][keys]
    set<tuple<int,int,int>> visited;
    queue<tuple<int,int,int,int>> q; // {r, c, keys, dist}
    q.push({startR, startC, 0, 0});
    visited.insert({startR, startC, 0});
    
    int dx[] = {-1, 1, 0, 0};
    int dy[] = {0, 0, -1, 1};
    
    while(!q.empty()) {
        auto [r, c, keys, dist] = q.front(); q.pop();
        
        if(keys == allKeys) return dist;
        
        for(int d = 0; d < 4; d++) {
            int nr = r + dx[d], nc = c + dy[d];
            if(nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
            if(grid[nr][nc] == '#') continue;
            
            char cell = grid[nr][nc];
            int newKeys = keys;
            
            // Is it a lock?
            if(cell >= 'A' && cell <= 'F') {
                if(!(keys & (1 << (cell - 'A')))) continue; // Don't have key
            }
            
            // Is it a key?
            if(cell >= 'a' && cell <= 'f') {
                newKeys |= (1 << (cell - 'a'));
            }
            
            if(visited.find({nr, nc, newKeys}) == visited.end()) {
                visited.insert({nr, nc, newKeys});
                q.push({nr, nc, newKeys, dist + 1});
            }
        }
    }
    return -1;
}
```

## Notes

- State = (position, additional_info)
- Use bitmask when tracking subset of visited nodes
- Memory: O(V × 2^k) where k = number of states
- Common in TSP-like problems
