#include <bits/stdc++.h>
using namespace std;
int main() {
    vector<int>v = {1, 4, 2, 10, 23, 3, 1, 0, 20};
    int n = v.size();
    int  k = 4;

    int ksum = 0;

    for(int i =0;i<k;i++){
        ksum+=v[i];
    }
    int maxs = ksum;
    for(int i =k;i<n;i++){
        int sum =0;
        ksum+=v[i];
        ksum -=v[i-k];
        maxs = max(maxs,ksum);
    }
    cout<<maxs;
    return 0;
}