#include <bits/stdc++.h>
using namespace std;

vector<int> boundaryTraversal(vector<vector<int>>& mat) {
    int n = mat.size();
    int m = mat[0].size();

    vector<int> ans;

    // If only one row
    if (n == 1) {
        for (int j = 0; j < m; j++)
            ans.push_back(mat[0][j]);
        return ans;
    }

    // If only one column
    if (m == 1) {
        for (int i = 0; i < n; i++)
            ans.push_back(mat[i][0]);
        return ans;
    }

    //  Top row we are traversing the loop from left to right
    for (int j = 0; j < m; j++)
        ans.push_back(mat[0][j]);

    //  Right column (excluding corners) here we are traversing the loop from top to bottom
    for (int i = 1; i < n - 1; i++)
        ans.push_back(mat[i][m - 1]);

    //  Bottom row (right → left) here we are traversing the loop from right to left
    for (int j = m - 1; j >= 0; j--)
        ans.push_back(mat[n - 1][j]);

    //  Left column (bottom → top, excluding corners) here we are traversing the loop from bottom to top    
    for (int i = n - 2; i >= 1; i--)
        ans.push_back(mat[i][0]);

    return ans;
}


int main() {
    vector<vector<int>> mat = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    vector<int> result = boundaryTraversal(mat);

    cout << "Boundary Traversal: ";
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}