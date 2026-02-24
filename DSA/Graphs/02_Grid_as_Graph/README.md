# Grid as Graph Pattern (VERY COMMON 🔥)

> **Core Concept:** 2D matrix treated as graph

## Typical Problems

- Number of islands
- Flood fill
- Rotting oranges
- Surrounded regions
- Shortest path in grid

## Keywords to Spot

- Matrix / Grid
- Up, Down, Left, Right
- Water / Land / 0 / 1

## LeetCode Problems

| # | Problem | Difficulty |
|---|---------|------------|
| 200 | Number of Islands | Medium |
| 733 | Flood Fill | Easy |
| 994 | Rotting Oranges | Medium |
| 130 | Surrounded Regions | Medium |
| 1091 | Shortest Path in Binary Matrix | Medium |
| 695 | Max Area of Island | Medium |
| 463 | Island Perimeter | Easy |
| 417 | Pacific Atlantic Water Flow | Medium |
| 542 | 01 Matrix | Medium |
| 1254 | Number of Closed Islands | Medium |
| 1020 | Number of Enclaves | Medium |
| 934 | Shortest Bridge | Medium |
| 1559 | Detect Cycles in 2D Grid | Medium |
| 286 | Walls and Gates | Medium |

## Direction Arrays

```cpp
int dx[] = {-1, 1, 0, 0};
int dy[] = {0, 0, -1, 1};
// OR
vector<pair<int,int>> dirs = {{-1,0}, {1,0}, {0,-1}, {0,1}};
```

## Notes

- Each cell is a node
- Adjacent cells (4 or 8 directions) are edges
- Mark visited to avoid cycles
