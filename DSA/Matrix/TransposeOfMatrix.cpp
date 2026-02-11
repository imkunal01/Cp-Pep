#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> transpose(vector<vector<int>>& mat) {
    int n = mat.size();
    int m = mat[0].size();
    vector<vector<int>> transposed(m, vector<int>(n, 0));

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            transposed[j][i] = mat[i][j];
        }
    }
    return transposed;
}


int main() {
    vector<vector<int>> mat = {{1,2,3},{4,5,6},{7,8,9}};
    vector<vector<int>> result = transpose(mat);
    cout << "2D Array:" << endl;
    for ( auto& row : result) {
            for (auto& elem : row) {
                cout << elem << " ";
            }
            cout << endl;
    }
    return 0;
}