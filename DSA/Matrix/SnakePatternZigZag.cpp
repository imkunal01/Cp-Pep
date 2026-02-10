#include <bits/stdc++.h>
using namespace std;

vector<int> SnakePatternZigZag(vector<vector<int>>& mat) {
    int n = mat.size();
    int m = mat[0].size();

    vector<int> ans;
    for (int i = 0; i < n; i++) {
        if (i % 2 == 0) {
            // Traverse from left to right
            for (int j = 0; j < m; j++)
                ans.push_back(mat[i][j]);
        } else {
            // Traverse from right to left
            for (int j = m - 1; j >= 0; j--)
                ans.push_back(mat[i][j]);
        }
    }



    return ans;
}


int main() {
    
    // vector<int> mat = {1, 2, 3, 4, 5, 6};
    vector<vector<int>> mat = {{1,2,3},{4,5,6},{7,8,9}};
    int n = 2; // Number of rows
    int m = 3; // Number of columns
        vector<int> result = SnakePatternZigZag(mat);
    cout << "2D Array:" << endl;
    for ( auto& row : result) {
            cout << row << " ";
    }
    return 0;
}