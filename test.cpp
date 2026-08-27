#include <bits/stdc++.h>
using namespace std;

int main(){
    int n = 4;

    vector<int>nums{3, 5, 4, 2};
    int M = 10;

    // int remaining = M;
    vector<int>ans;
    int start = 1;
    int remaining = M;

    for (int x : nums) {
        if (x <= remaining) {
            ans.push_back(start);

            start += x;
            remaining -= x;
        }
        else {
            ans.push_back(-1);
        }
    }
    for(int x : ans){
        cout << x << " ";
    }
    cout << endl;
}

