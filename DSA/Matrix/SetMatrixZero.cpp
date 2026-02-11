#include <bits/stdc++.h>
using namespace std;

void setZeroes(vector<vector<int>>& mat) {
    int n = mat.size();
    int m = mat[0].size();
    // without using extra space
    bool firstRowZero = false;
    bool firstColZero = false;
    for (int j = 0; j < m; j++) {
        if (mat[0][j] == 0) {
            firstRowZero = true;
            break;
        }
    }
    
    for (int i = 0; i < n; i++) {
        if (mat[i][0] == 0) {
            firstColZero = true;
            break;
        }
    }

    for (int i = 1; i < n; i++) {
        for (int j = 1; j < m; j++) {
            if (mat[i][j] == 0) {
                mat[i][0] = 0;
                mat[0][j] = 0;
            }
        }
    }

    for (int i = 1; i < n; i++) {
        for (int j = 1; j < m; j++) {
            if (mat[i][0] == 0 || mat[0][j] == 0) {
                mat[i][j] = 0;
            }
        }
    }

    if (firstRowZero) {
        for (int j = 0; j < m; j++) {
            mat[0][j] = 0;
        }
    }

    if (firstColZero) {
        for (int i = 0; i < n; i++) {
            mat[i][0] = 0;
        }
    }
}


int main() {
    
    // vector<int> mat = {1, 2, 3, 4, 5, 6};
    vector<vector<int>> mat = {{1,2,3},{4,5,6},{7,8,9}};
    int n = 2; // Number of rows
    int m = 3; // Number of columns
    setZeroes(mat);
    cout << "2D Array:" << endl;
    for ( auto& row : mat) {
            for (auto& val : row) {
                cout << val << " ";
            }
            cout << endl;
    }
    return 0;
}