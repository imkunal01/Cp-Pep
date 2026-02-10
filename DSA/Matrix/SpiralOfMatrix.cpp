#include <bits/stdc++.h>
using namespace std;

vector<int> SpiralOfMatrix(vector<vector<int>>& mat) {
    int n = mat.size();
    int m = mat[0].size();

    vector<int> ans;

    int top = 0, bottom = n - 1;
    int left = 0, right = m - 1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right and the indeces of the top row will be fixed
        for (int j = left; j <= right; j++)
            ans.push_back(mat[top][j]);
        top++;

        // Traverse from top to bottom and the indeces of the right column will be fixed
        for (int i = top; i <= bottom; i++)
            ans.push_back(mat[i][right]);
        right--;

        if (top <= bottom) {
            // Traverse from right to left and the indeces of the bottom row will be fixed
            for (int j = right; j >= left; j--)
                ans.push_back(mat[bottom][j]);
            bottom--;
        }

        if (left <= right) {
            // Traverse from bottom to top and the indeces of the left column will be fixed
            for (int i = bottom; i >= top; i--)
                ans.push_back(mat[i][left]);
            left++;
        }
    }

    return ans;
}


int main() {
    
    // vector<int> mat = {1, 2, 3, 4, 5, 6};
    vector<vector<int>> mat = {{1,2,3},{4,5,6},{7,8,9}};
    int n = 2; // Number of rows
    int m = 3; // Number of columns
    vector<int> result = SpiralOfMatrix(mat);
    cout << "2D Array:" << endl;
    for ( auto& row : result) {
            cout << row << " ";
    }
    return 0;
}