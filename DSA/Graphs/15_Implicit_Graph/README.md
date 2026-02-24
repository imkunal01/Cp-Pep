# Implicit Graph Pattern

> **Core Concept:** Graph not given explicitly - you construct it from rules

## Typical Problems

- Word ladder
- Knight moves
- Transformations
- State transitions

## Keywords to Spot

- "transform"
- "change one step"
- "one move"
- "one character change"

## LeetCode Problems

| # | Problem | Difficulty |
|---|---------|------------|
| 127 | Word Ladder | Hard |
| 126 | Word Ladder II | Hard |
| 433 | Minimum Genetic Mutation | Medium |
| 752 | Open the Lock | Medium |
| 773 | Sliding Puzzle | Hard |
| 909 | Snakes and Ladders | Medium |
| 1345 | Jump Game IV | Hard |
| 854 | K-Similar Strings | Hard |
| 1263 | Minimum Moves to Move a Box to Their Target Location | Hard |
| 365 | Water and Jug Problem | Medium |
| 818 | Race Car | Hard |
| 1654 | Minimum Jumps to Reach Home | Medium |

## Word Ladder Template

```cpp
int wordLadder(string beginWord, string endWord, vector<string>& wordList) {
    unordered_set<string> wordSet(wordList.begin(), wordList.end());
    if(wordSet.find(endWord) == wordSet.end()) return 0;
    
    queue<string> q;
    q.push(beginWord);
    int level = 1;
    
    while(!q.empty()) {
        int size = q.size();
        while(size--) {
            string word = q.front(); q.pop();
            if(word == endWord) return level;
            
            // Generate all neighbors (1 char change)
            for(int i = 0; i < word.size(); i++) {
                char original = word[i];
                for(char c = 'a'; c <= 'z'; c++) {
                    word[i] = c;
                    if(wordSet.find(word) != wordSet.end()) {
                        wordSet.erase(word); // Mark visited
                        q.push(word);
                    }
                }
                word[i] = original;
            }
        }
        level++;
    }
    return 0;
}
```

## Open the Lock Template

```cpp
int openLock(vector<string>& deadends, string target) {
    unordered_set<string> dead(deadends.begin(), deadends.end());
    if(dead.count("0000")) return -1;
    
    queue<string> q;
    unordered_set<string> visited;
    q.push("0000");
    visited.insert("0000");
    int moves = 0;
    
    while(!q.empty()) {
        int size = q.size();
        while(size--) {
            string curr = q.front(); q.pop();
            if(curr == target) return moves;
            
            // Generate 8 neighbors (4 wheels × 2 directions)
            for(int i = 0; i < 4; i++) {
                for(int d = -1; d <= 1; d += 2) {
                    string next = curr;
                    next[i] = ((curr[i] - '0' + d + 10) % 10) + '0';
                    if(!dead.count(next) && !visited.count(next)) {
                        visited.insert(next);
                        q.push(next);
                    }
                }
            }
        }
        moves++;
    }
    return -1;
}
```

## Knight Moves Template

```cpp
int knightMoves(int x1, int y1, int x2, int y2) {
    int dx[] = {-2, -2, -1, -1, 1, 1, 2, 2};
    int dy[] = {-1, 1, -2, 2, -2, 2, -1, 1};
    
    queue<pair<int,int>> q;
    set<pair<int,int>> visited;
    q.push({x1, y1});
    visited.insert({x1, y1});
    int moves = 0;
    
    while(!q.empty()) {
        int size = q.size();
        while(size--) {
            auto [x, y] = q.front(); q.pop();
            if(x == x2 && y == y2) return moves;
            
            for(int i = 0; i < 8; i++) {
                int nx = x + dx[i], ny = y + dy[i];
                if(visited.find({nx, ny}) == visited.end()) {
                    visited.insert({nx, ny});
                    q.push({nx, ny});
                }
            }
        }
        moves++;
    }
    return -1;
}
```

## Notes

- Nodes: States (strings, configurations, positions)
- Edges: Valid transitions between states
- Usually solved with BFS for shortest path
- Key insight: Define what neighbors are!
