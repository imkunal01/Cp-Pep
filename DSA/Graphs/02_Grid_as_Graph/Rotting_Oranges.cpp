//https://leetcode.com/problems/number-of-islands/

#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    // BFS Helper: Sinks the entire island starting from (r, c)
    vector<vector<int>> directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}}; // Up, Down, Left, Right

    void bfsHelper(vector<vector<char>>& grid, int r, int c) {
        // the helper function will perform BFS to rot the oranges
        int rows = grid.size();
        int cols = grid[0].size();

        queue<pair<int, int>> q;
        q.push({r, c});
        grid[r][c] = '0'; // Mark the rotten orange as processed
        while(!q.empty()){
            int currR = q.front().first;
            int currC = q.front().second;
            q.pop();

            for(vector<int>dir: directions){
                int nextR = currR + dir[0];
                int nextC = currC + dir[1];

                // Check boundaries and if the orange is fresh
                if(nextR >= 0 && nextR < rows && nextC >= 0 && nextC < cols && grid[nextR][nextC] == '1'){
                    grid[nextR][nextC] = '2'; // Mark as rotten
                    q.push({nextR, nextC});
                }
            }
        }
      
    }

    int RottenOranges(vector<vector<char>>& grid) {
        if (grid.empty()) return 0;

        // Leetcode 994 Rotten Oranges
        int rows = grid.size();
        int cols = grid[0].size();
        int minutes = 0;

        for(int i = 0; i < rows; i++) {
            for(int j = 0; j < cols; j++) {
                // If we find a rotten orange, we can start BFS from it
                if (grid[i][j] == '2') {
                    bfsHelper(grid, i, j);
                }
            }
        }
        return minutes;
    }
};

int main() {
    // Create a grid representing islands
    vector<vector<char>> grid = {
        {'2', '1', '0', '0', '0'},
        {'1', '1', '0', '0', '0'},
        {'0', '0', '1', '0', '0'},
        {'0', '0', '0', '1', '1'}
    };
    
    Solution sol;
    int result = sol.RottenOranges(grid);
    cout << "Minutes to rot all oranges: " << result << endl;
    return 0;
}