// Problem: Determine Whether Matrix Can Be Obtained by Rotation
// Date: February 11, 2026

#include <bits/stdc++.h>
using namespace std;

void rotate90(vector<vector<int>>& mat) {
    int n = mat.size();
    // Transpose
    for (int i = 0; i < n; i++)
        for (int j = i; j < n; j++)
            swap(mat[i][j], mat[j][i]);
    // Reverse rows
    for (int i = 0; i < n; i++)
        reverse(mat[i].begin(), mat[i].end());
}

bool findRotation(vector<vector<int>>& mat, vector<vector<int>>& target) {
    for (int i = 0; i < 4; i++) {
        if (mat == target) return true;
        rotate90(mat);
    }
    return false;
}

int main() {
    // Test cases
    return 0;
}
