// Problem: Find a Peak Element II
// Date: February 11, 2026

#include <bits/stdc++.h>
using namespace std;

vector<int> findPeakGrid(vector<vector<int>>& mat) {
    int m = mat.size(), n = mat[0].size();
    int lo = 0, hi = n - 1;
    
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        
        // Find max in column mid
        int maxRow = 0;
        for (int i = 0; i < m; i++) {
            if (mat[i][mid] > mat[maxRow][mid])
                maxRow = i;
        }
        
        int left = mid > 0 ? mat[maxRow][mid - 1] : -1;
        int right = mid < n - 1 ? mat[maxRow][mid + 1] : -1;
        
        if (mat[maxRow][mid] > left && mat[maxRow][mid] > right)
            return {maxRow, mid};
        else if (left > mat[maxRow][mid])
            hi = mid - 1;
        else
            lo = mid + 1;
    }
    return {-1, -1};
}

int main() {
    // Test cases
    return 0;
}
