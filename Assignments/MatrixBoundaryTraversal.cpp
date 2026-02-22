// Problem: Matrix Boundary Traversal
// Date: February 10, 2026

#include <bits/stdc++.h>
using namespace std;

vector<int> boundaryTraversal(vector<vector<int>>& matrix) {
    vector<int> result;
    int m = matrix.size(), n = matrix[0].size();
    if (m == 0) return result;
    
    // Top row
    for (int j = 0; j < n; j++)
        result.push_back(matrix[0][j]);
    
    // Right column
    for (int i = 1; i < m; i++)
        result.push_back(matrix[i][n - 1]);
    
    // Bottom row (if more than 1 row)
    if (m > 1)
        for (int j = n - 2; j >= 0; j--)
            result.push_back(matrix[m - 1][j]);
    
    // Left column (if more than 1 column)
    if (n > 1)
        for (int i = m - 2; i > 0; i--)
            result.push_back(matrix[i][0]);
    
    return result;
}

int main() {
    // Test cases
    return 0;
}
