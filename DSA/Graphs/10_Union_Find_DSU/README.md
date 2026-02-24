# Union Find (Disjoint Set) Pattern

> **Core Concept:** Merging components efficiently

## Typical Problems

- Cycle detection
- Number of connected components
- Kruskal MST
- Dynamic connectivity

## Keywords to Spot

- "merge"
- "connect"
- "already connected"
- "union"
- "same group"

## LeetCode Problems

| # | Problem | Difficulty |
|---|---------|------------|
| 684 | Redundant Connection | Medium |
| 685 | Redundant Connection II | Hard |
| 547 | Number of Provinces | Medium |
| 200 | Number of Islands | Medium |
| 721 | Accounts Merge | Medium |
| 990 | Satisfiability of Equality Equations | Medium |
| 1319 | Number of Operations to Make Network Connected | Medium |
| 1202 | Smallest String With Swaps | Medium |
| 1584 | Min Cost to Connect All Points | Medium |
| 128 | Longest Consecutive Sequence | Medium |
| 839 | Similar String Groups | Hard |
| 952 | Largest Component Size by Common Factor | Hard |
| 1061 | Lexicographically Smallest Equivalent String | Medium |
| 1697 | Checking Existence of Edge Length Limited Paths | Hard |

## Union-Find Template (with Path Compression & Union by Rank)

```cpp
class UnionFind {
public:
    vector<int> parent, rank;
    int components;
    
    UnionFind(int n) {
        parent.resize(n);
        rank.resize(n, 0);
        components = n;
        for(int i = 0; i < n; i++) parent[i] = i;
    }
    
    int find(int x) {
        if(parent[x] != x) {
            parent[x] = find(parent[x]); // Path compression
        }
        return parent[x];
    }
    
    bool unite(int x, int y) {
        int px = find(x), py = find(y);
        if(px == py) return false; // Already connected
        
        // Union by rank
        if(rank[px] < rank[py]) swap(px, py);
        parent[py] = px;
        if(rank[px] == rank[py]) rank[px]++;
        
        components--;
        return true;
    }
    
    bool connected(int x, int y) {
        return find(x) == find(y);
    }
};
```

## Notes

- Time Complexity: Nearly O(1) per operation (amortized)
- Path Compression: Flatten tree during find
- Union by Rank: Attach smaller tree under larger
- Very efficient for dynamic connectivity queries
