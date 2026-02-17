# Graph Patterns Guide

## 1️⃣ Graph Traversal Pattern (BFS / DFS)

**Question:** Can I reach somewhere?

### Typical Questions
- Traverse all nodes
- Connected components
- Is graph connected?
- Count components
- Print traversal

### Keywords to spot
- "visit all"
- "connected"
- "reachable"
- "explore"

---

## 2️⃣ Grid as Graph Pattern (VERY COMMON 🔥)

2D matrix treated as graph

### Typical Questions
- Number of islands
- Flood fill
- Rotting oranges
- Surrounded regions
- Shortest path in grid

### Keywords
- Matrix / Grid
- Up, Down, Left, Right
- Water / land / 0 / 1

---

## 3️⃣ Multi-Source BFS Pattern

BFS starting from multiple nodes at once

### Typical Questions
- Rotting oranges
- Distance to nearest 0
- Fire spreading
- Infection problems

### Keywords
- "all sources"
- "nearest"
- "minimum time"

---

## 4️⃣ Shortest Path (Unweighted Graph)

BFS only

### Typical Questions
- Minimum steps
- Minimum edges
- Shortest path in maze

### Keywords
- "minimum steps"
- "minimum moves"
- "shortest"

---

## 5️⃣ Cycle Detection Pattern

Detect loops in graph

### Types
- Undirected graph cycle
- Directed graph cycle

### Typical Questions
- Is cycle present?
- Can we finish tasks?
- Is graph valid?

### Keywords
- "cycle"
- "loop"
- "dependency issue"

---

## 6️⃣ Topological Sort / Dependency Pattern 🔥

Order things respecting dependencies

### Typical Questions
- Course schedule
- Build systems
- Task scheduling

### Keywords
- "prerequisite"
- "before"
- "dependency"
- "order"

---

## 7️⃣ DAG Dynamic Programming Pattern

DP on Directed Acyclic Graph

### Typical Questions
- Longest path in DAG
- Number of ways
- Max/min cost

### Keywords
- DAG
- "maximum"
- "paths"
- "ways"

---

## 8️⃣ Bipartite Graph Pattern

Can graph be colored using 2 colors?

### Typical Questions
- Is graph bipartite?
- Possible to divide into 2 groups?
- Conflict-free grouping

### Keywords
- "two groups"
- "no conflict"
- "red / blue"

---

## 9️⃣ Shortest Path (Weighted Graph)

Choose algorithm based on weights

### Sub-Patterns
- **Dijkstra** (positive weights)
- **Bellman-Ford** (negative)
- **Floyd Warshall** (all pairs)

### Keywords
- "minimum cost"
- "distance"
- "weights"

---

## 🔟 Union Find (Disjoint Set) Pattern

Merging components

### Typical Questions
- Cycle detection
- Number of connected components
- Kruskal MST
- Dynamic connectivity

### Keywords
- "merge"
- "connect"
- "already connected"

---

## 1️⃣1️⃣ Minimum Spanning Tree (MST)

Connect all nodes with minimum cost

### Typical Questions
- Minimum cost to connect cities
- Cable connections

### Keywords
- "connect all"
- "minimum cost"

---

## 1️⃣2️⃣ Strongly Connected Components (Advanced)

Directed graph components

### Algorithms
- Kosaraju
- Tarjan

### Keywords
- "mutual reachability"
- "SCC"

---

## 1️⃣3️⃣ Bridges & Articulation Points

Critical connections

### Typical Questions
- Removing edge breaks graph
- Critical nodes

### Keywords
- "critical connection"
- "single point of failure"

---

## 1️⃣4️⃣ Graph + State (Bitmask / Extra Info)

Node + extra state

### Typical Questions
- Shortest path visiting all nodes
- Keys & locks

### Keywords
- "state"
- "visited all"
- "keys"

---

## 1️⃣5️⃣ Implicit Graph Pattern

Graph not given explicitly

### Typical Questions
- Word ladder
- Knight moves
- Transformations

### Keywords
- "transform"
- "change one step"

---

## 1️⃣6️⃣ Graph Coloring (General)

Assign colors under constraints

### Typical Questions
- Scheduling
- Resource allocation

---

## 1️⃣7️⃣ Tree but Asked as Graph

Trees ARE graphs (no cycle)

### Typical Questions
- Distance between nodes
- Tree DP
- LCA (later)
