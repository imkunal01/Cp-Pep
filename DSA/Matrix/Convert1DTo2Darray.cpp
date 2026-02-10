#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> ConvertArrTo2D(vector<int>& mat, int n, int m) {
    vector<vector<int>> ans(n, vector<int>(m));
    if(n*m != mat.size()){
        return {};
    }
    int k =0;
    for(int i =0;i<n;i++){
        for(int j = 0;j<m;j++){
            ans [i][j] = mat[k];
            k++;
        }
    }
    return ans;
}


int main() {
    
    vector<int> mat = {1, 2, 3, 4, 5, 6};
    int n = 2; // Number of rows
    int m = 3; // Number of columns
    vector<vector<int>> result = ConvertArrTo2D(mat, n, m);
    cout << "2D Array:" << endl;
    for (const auto& row : result) {
        for (int num : row) {
            cout << num << " ";
        }
        cout << endl;
    }
    return 0;
}