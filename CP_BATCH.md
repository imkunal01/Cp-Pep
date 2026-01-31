# Module 1: Competitive Programming – Advanced (28 Days | 140+ Hours)

**Focus:** Advanced Logic Building, Problem-Solving Patterns, Optimization, and Contest Readiness

## Day 1: Advanced Mathematics & Number Theory – I
### Session 1: Primality & Sieves (2 Hours)
- Trial Division method and its limitations  
- Sieve of Eratosthenes  
    - Why it works  
    - Time Complexity: `O(N log log N)`  
- Optimizations in Sieve (start from `i*i`)  
- Segmented Sieve  
    - Handling range up to `10¹²`  
    - Memory optimization techniques  
- Linear Sieve (`O(N)`)  
    - Generating primes & SPF simultaneously  

### Session 2: Primality Testing for Large Numbers (2 Hours)
- Fermat Primality Test  
    - False positives (Carmichael numbers)  
- Miller–Rabin Primality Test  
    - Deterministic vs Probabilistic version  
    - Handling 64-bit integers  
    - CP-safe bases  

### Session 3: Divisors & Factorization Tricks (1 Hour)
- Prime Factorization using SPF  
- Counting number of divisors  
- Sum of divisors  
- Applications in CP problems  

## Day 2: Modular Arithmetic & Number Theory – II
### Session 1: Modular Arithmetic Fundamentals (2 Hours)
- Modular Addition, Subtraction, Multiplication  
- Handling overflow in multiplication  
- Negative modulo handling in CP  

### Session 2: Modular Multiplicative Inverse (2 Hours)
- Extended Euclidean Algorithm  
- Modular inverse when MOD is prime  
- Fermat’s Little Theorem  
- Precomputing inverses in `O(N)`  

### Session 3: Chinese Remainder Theorem (1 Hour)
- CRT intuition  
- Solving simultaneous congruences  
- CP-level applications (remainders, cycles)  

## Day 3: Fast Power & Matrix Exponentiation
### Session 1: Binary Exponentiation (2 Hours)
- Fast power logic  
- Modular exponentiation  
- Power with negative exponent  
- Reducing `O(N) → O(log N)`  

### Session 2: Matrix Exponentiation (2 Hours)
- Matrix multiplication basics  
- Matrix exponentiation logic  
- Solving linear recurrence relations  
    - Fibonacci  
    - Tiling problems  
    - Staircase problems  

### Session 3: CP Practice & Optimization (1 Hour)
- Choosing matrix vs DP  
- Edge cases & constraints  

## Day 4: Bit Manipulation – Fundamentals
### Session 1: Bitwise Operators (2 Hours)
- AND, OR, XOR, NOT  
- Left & Right shifts  
- Checking i-th bit  
- Setting, clearing, toggling bits  

### Session 2: Bit Tricks for CP (2 Hours)
- Brian Kernighan’s Algorithm  
- Counting set bits  
- Checking power of two  
- Lowest set bit (`x & -x`)  

### Session 3: XOR Patterns (1 Hour)
- Unique element problems  
- XOR prefix logic  
- Pairing tricks  

## Day 5: Bitmasking & Bitmask DP
### Session 1: Bitmasking Technique (2 Hours)
- Representing a set using bits  
- Generating all subsets (`O(2ⁿ)`)  
- Subset iteration tricks  

### Session 2: Recursive Masking (2 Hours)
- Using bitmasks with recursion  
- Reducing state space  
- Constraint pruning  

### Session 3: Bitmask DP (1 Hour)
- State representation  
- TSP (Traveling Salesman Problem)  
- Assignment problems  

## Day 6: Advanced Binary Search – I
### Session 1: Binary Search Internals (2 Hours)
- Standard Binary Search  
- Lower Bound & Upper Bound  
- Binary search on rotated arrays  
- Handling duplicates  

### Session 2: Binary Search on Answer (2 Hours)
- Identifying monotonicity  
- Writing `check(x)` / predicate function  
- Aggressive Cows  
- Book Allocation  
- Painter’s Partition  

### Session 3: Pitfalls & Debugging (1 Hour)
- Infinite loops  
- Overflow errors  
- Edge constraints  

## Day 7: Binary Search – II
### Session 1: Binary Search on Real Numbers (2 Hours)
- Floating point precision  
- Epsilon handling  
- When to stop binary search  

### Session 2: Binary Search in 2D & Arrays (2 Hours)
- Searching in sorted matrix  
- Median of two sorted arrays  
- Kth element problems  

### Session 3: CP Templates (1 Hour)
- Generic BS templates  
- Contest usage  

## Day 8: Sliding Window – I
### Session 1: Fixed & Variable Window (2 Hours)
- Subarray sum of size K  
- Longest/Shortest subarray problems  
- Window expansion & contraction logic  

### Session 2: Frequency-based Windows (2 Hours)
- HashMap / frequency array usage  
- Longest substring with unique characters  
- At most / at least K conditions  

### Session 3: CP Problems (1 Hour)

## Day 9: Sliding Window – II & Two Pointers
### Session 1: Monotonic Deque Optimization (2 Hours)
- Sliding Window Maximum  
- Maintaining decreasing/increasing deque  

### Session 2: Advanced Two Pointers (2 Hours)
- 3Sum / 4Sum  
- Trapping Rain Water  
- Two pointers on two arrays  

### Session 3: Mixed CP Practice (1 Hour)

## Day 10: Recursion Fundamentals
### Session 1: Recursion Internals (2 Hours)
- Call stack  
- Recursion tree  
- Base case importance  

### Session 2: Memoization (2 Hours)
- Avoiding recomputation  
- Top-down DP  

### Session 3: Recursion → Iteration (1 Hour)

## Day 11: Backtracking Techniques
### Session 1: Classic Backtracking (2 Hours)
- N-Queens  
- Sudoku Solver  

### Session 2: Grid Backtracking (2 Hours)
- Rat in a Maze  
- Word Search  

### Session 3: Pruning Strategies (1 Hour)

## Day 12: Meet-in-the-Middle
### Session 1: MITM Concept (2 Hours)
- Splitting the problem  
- Reducing exponential complexity  

### Session 2: Applications (2 Hours)
- Subset sum for large N  
- Time optimization  

### Session 3: CP Problems (1 Hour)

## Day 13: String Algorithms – I
### Session 1: KMP Algorithm (2 Hours)
- Prefix function  
- LPS array construction  

### Session 2: Pattern Matching (2 Hours)
- KMP matching logic  
- String periodicity  

### Session 3: Practice (1 Hour)

## Day 14: String Algorithms – II
### Session 1: Rolling Hash (2 Hours)
- Hash generation  
- Base & MOD selection  

### Session 2: Rabin–Karp (2 Hours)
- Multiple pattern matching  
- Double hashing  

### Session 3: Collision Handling (1 Hour)

## Day 15: Tries & XOR Applications
### Session 1: Trie Basics (2 Hours)
- Insert, Search, Prefix  
- Trie node design  

### Session 2: XOR Tries (2 Hours)
- Maximum XOR pair  
- XOR subarray problems  

### Session 3: CP Practice (1 Hour)

## Day 16: Segment Tree – I
### Session 1: Construction & Updates (2 Hours)
- Tree representation  
- Point updates  

### Session 2: Range Queries (2 Hours)
- Range Sum  
- Range Minimum  
- GCD queries  

### Session 3: Complexity Analysis (1 Hour)

## Day 17: Segment Tree – II (Lazy Propagation)
### Session 1: Lazy Concept (2 Hours)
- Why lazy propagation  
- Pending updates  

### Session 2: Range Updates (2 Hours)
- Add / Assign range  

### Session 3: Multi-value Nodes (1 Hour)

## Day 18: Fenwick Tree (BIT)
### Session 1: BIT Internals (2 Hours)
- `x & -x` trick  
- Update & Query  

### Session 2: Applications (2 Hours)
- Inversion count  
- Dynamic prefix sums  

### Session 3: 2D BIT (1 Hour)

## Day 19: Disjoint Set Union (DSU)
### Session 1: DSU Optimization (2 Hours)
- Path compression  
- Union by rank  

### Session 2: Graph Applications (2 Hours)
- Cycle detection  
- Kruskal’s MST  

### Session 3: Rollback DSU (1 Hour)

## Day 20: Graph Algorithms – I
### Session 1: BFS & DFS (2 Hours)
- Traversals  
- Grid & matrix problems  

### Session 2: Dijkstra’s Algorithm (2 Hours)
- Priority Queue usage  
- Why it fails for negative weights  

### Session 3: Edge Cases (1 Hour)

## Day 21: Graph Algorithms – II
### Session 1: Bellman–Ford (2 Hours)
- Edge relaxation  
- Negative cycle detection  

### Session 2: Floyd–Warshall (2 Hours)
- All-pairs shortest path  

### Session 3: Graph DP Intro (1 Hour)

## Day 22: Graph Connectivity
### Session 1: Topological Sort (2 Hours)
- Kahn’s Algorithm  
- DFS-based topo  

### Session 2: Bridges & Articulation Points (2 Hours)
- Tarjan’s Algorithm  

### Session 3: SCC – Kosaraju (1 Hour)

## Day 23: Dynamic Programming – I
### Session 1: DP Foundations (2 Hours)
- Memoization vs Tabulation  

### Session 2: 1D DP (2 Hours)
- Frog Jump  
- Coin Change  

### Session 3: Space Optimization (1 Hour)

## Day 24: Dynamic Programming – II
### Session 1: Grid DP (2 Hours)
- Unique Paths  
- Min Path Sum  

### Session 2: DP on Subsequences (2 Hours)
- 0/1 Knapsack  
- Subset Sum  

### Session 3: Practice (1 Hour)

## Day 25: Dynamic Programming – III
### Session 1: String DP (2 Hours)
- LCS  
- Edit Distance  

### Session 2: LIS (2 Hours)
- `O(N²)`  
- `O(N log N)`  

### Session 3: Pattern Recognition (1 Hour)

## Day 26: Advanced DP
### Session 1: Partition DP (2 Hours)
- MCM  
- Burst Balloons  

### Session 2: Stock DP (2 Hours)
- K transactions  
- Cooldown  

### Session 3: DP on Trees (1 Hour)

## Day 27: Advanced CP Topics
### Session 1: Square Root Decomposition (2 Hours)
- Mo’s Algorithm (Intro)  

### Session 2: Geometry Basics (2 Hours)
- Orientation  
- Line intersection  

### Session 3: CP Practice (1 Hour)

## Day 28: CP Masterclass & Final Mock
### Session 1: Advanced CP Patterns (2 Hours)
- Optimization tricks  
- Constraint analysis  

### Session 2: Full Mock Contest (2 Hours)
- 3–4 Hard mixed problems  

### Session 3: Editorial Analysis (1 Hour)
- Code review  
- `O(N²) → O(N log N)` thinking  

---

# Module 2: DevOps (45 Hours)

## Advanced Git & Workflows (6 Hours)
- Branching: Gitflow, Feature branches, and Release branches  
- Commands: Merge vs. Rebase, Cherry-pick, and Stashing  
- Conflict Resolution: Handling complex merge conflicts in team environments  

## Docker Foundations (6 Hours)
- Docker Engine Architecture: Daemon, Client, Registry, Images, Containers  
- Core Commands: run, build, pull, push, exec, logs, ps  
- Docker Volumes: Persistent data storage  

## Professional Dockerfiles (6 Hours)
- Instruction Mastery: `FROM`, `WORKDIR`, `COPY`, `RUN`, `CMD`, `ENTRYPOINT`, `ENV`, `ARG`  
- Multi-stage Builds: Drastically reducing image size for Node and React  
- Layer Caching: Optimizing build speed  

## Docker Compose & Networking (6 Hours)
- `docker-compose.yml`: Managing multi-container applications  
- Internal Networks: How containers talk to each other without exposing ports  
- Environment files in Docker  

## Jenkins Foundations (6 Hours)
- Installation & Architecture: Master-Slave/Agent model  
- Jenkins Dashboard: Plugins, Global Tool Configuration, and Credentials management  
- Freestyle Jobs vs. Pipeline Jobs  

## Jenkins Pipelines (6 Hours)
- Declarative Pipeline: Stages, Steps, Post-actions, and Agents  
- Jenkinsfile: Storing the build pipeline as code in Git  
- Automated Triggers: Poll SCM and Webhooks  

## Modern CI (GitHub Actions) (6 Hours)
- Workflows: `.github/workflows` directory logic  
- Actions & Runners: Using community actions for Docker build/push  
- Secrets management in GitHub  

## Infrastructure as Code (3 Hours)
- Intro to Ansible/Terraform: The concept of automating server setup  