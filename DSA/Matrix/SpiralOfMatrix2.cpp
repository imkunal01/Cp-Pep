#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> SpiralOfMatrix2(int n) {
    vector<vector<int>> mat(n, vector<int>(n, 0));

    int top = 0, bottom = n - 1;
    int left = 0, right = n - 1;

    int val=1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right 
        // and the indeces of the top row will be fixed
        for (int j = left; j <= right; j++)
            mat[top][j] = val++;
        top++;

        // Traverse from top to bottom 
        // and the indeces of the right column will be fixed
        for (int i = top; i <= bottom; i++)
            mat[i][right] = val++;
        right--;

        if (top <= bottom) {
            // Traverse from right to left 
            // and the indeces of the bottom row will be fixed
            for (int j = right; j >= left; j--)
                mat[bottom][j] = val++;
            bottom--;
        }

        if (left <= right) {
            // Traverse from bottom to top 
            // and the indeces of the left column will be fixed
            for (int i = bottom; i >= top; i--)
                mat[i][left] = val++;
            left++;
        }
    }

    return mat;
}


int main() {
    int n = 3; 
    vector<vector<int>> result = SpiralOfMatrix2(n);
    cout << "2D Array:" << endl;
    for ( auto& row : result) {
            for (auto& elem : row) {
                cout << elem << " ";
            }
            cout << endl;
    }
    return 0;
}