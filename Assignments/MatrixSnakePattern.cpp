// Problem: Matrix Snake Pattern
// Date: February 10, 2026

#include <bits/stdc++.h>
using namespace std;

vector<int> snakePattern(vector<vector<int>>& matrix) {
    vector<int> result;
    int m = matrix.size();
    
    for (int i = 0; i < m; i++) {
        if (i % 2 == 0) {
            // Left to right
            for (int j = 0; j < matrix[i].size(); j++)
                result.push_back(matrix[i][j]);
        } else {
            // Right to left
            for (int j = matrix[i].size() - 1; j >= 0; j--)
                result.push_back(matrix[i][j]);
        }
    }
    return result;
}

int main() {
    // Test cases
    return 0;
}
