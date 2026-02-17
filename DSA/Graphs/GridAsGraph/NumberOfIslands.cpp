//https://leetcode.com/problems/number-of-islands/

#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    // BFS Helper: Sinks the entire island starting from (r, c)
    void bfsHelper(vector<vector<char>>& grid, int r, int c) {
        int rows = grid.size();
        int cols = grid[0].size();
        
        // Queue to store coordinates {row, col}
        queue<pair<int, int>> q;
        
        // Push the starting land and immediately mark it as water ('0')
        q.push({r, c});
        grid[r][c] = '0'; 

        // Directions for North, South, East, West
        int dr[] = {-1, 1, 0, 0};
        int dc[] = {0, 0, -1, 1};

        while (!q.empty()) {
            pair<int, int> current = q.front();
            q.pop();

            int currR = current.first;
            int currC = current.second;

            // Check all 4 neighbors
            for (int i = 0; i < 4; i++) {
                int nextR = currR + dr[i];
                int nextC = currC + dc[i];

                // Boundary check and land check
                if (nextR >= 0 && nextR < rows && 
                    nextC >= 0 && nextC < cols && 
                    grid[nextR][nextC] == '1') {
                    
                    // Mark as visited BEFORE pushing to queue to avoid duplicates
                    grid[nextR][nextC] = '0';
                    q.push({nextR, nextC});
                }
            }
        }
    }

    int numIslands(vector<vector<char>>& grid) {
        if (grid.empty()) return 0;

        int islandCount = 0;
        int rows = grid.size();
        int cols = grid[0].size();

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                // If we find land, we found a new island!
                if (grid[i][j] == '1') {
                    islandCount++;
                    // Use BFS to sink all connected land pieces
                    bfsHelper(grid, i, j);
                }
            }
        }
        return islandCount;
    }
};

int main() {
    // Create a grid representing islands
    vector<vector<char>> grid = {
        {'1', '1', '0', '0', '0'},
        {'1', '1', '0', '0', '0'},
        {'0', '0', '1', '0', '0'},
        {'0', '0', '0', '1', '1'}
    };
    
    Solution sol;
    int result = sol.numIslands(grid);
    cout << "Number of islands: " << result << endl;
    return 0;
}