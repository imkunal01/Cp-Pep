# Multi-Source BFS Pattern

> **Core Concept:** BFS starting from multiple nodes at once

## Typical Problems

- Rotting oranges
- Distance to nearest 0
- Fire spreading
- Infection problems

## Keywords to Spot

- "all sources"
- "nearest"
- "minimum time"
- "spread simultaneously"

## LeetCode Problems

| # | Problem | Difficulty |
|---|---------|------------|
| 994 | Rotting Oranges | Medium |
| 542 | 01 Matrix | Medium |
| 286 | Walls and Gates | Medium |
| 1162 | As Far from Land as Possible | Medium |
| 934 | Shortest Bridge | Medium |
| 1765 | Map of Highest Peak | Medium |
| 417 | Pacific Atlantic Water Flow | Medium |
| 1020 | Number of Enclaves | Medium |

## Template

```cpp
queue<pair<int,int>> q;
// Add ALL sources initially
for(int i = 0; i < n; i++) {
    for(int j = 0; j < m; j++) {
        if(isSource(grid[i][j])) {
            q.push({i, j});
            visited[i][j] = true;
        }
    }
}
// Standard BFS from here
int time = 0;
while(!q.empty()) {
    int size = q.size();
    while(size--) {
        auto [x, y] = q.front(); q.pop();
        // process neighbors
    }
    time++;
}
```

## Notes

- Push all sources into queue first
- Process level by level
- Time = number of BFS levels
