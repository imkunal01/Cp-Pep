#include <bits/stdc++.h> 
using namespace std;
vector<int> AscSortArray(vector<int> v, int i) {
    if(i == v.size() - 1) return v;
    // Find the minimum element from i to end
    return AscSortArray(v, i + 1);
}
int main() {
    vector<int> v = {5,4,3,2,1};
    v = AscSortArray(v,0);
    for(int i:v) cout<<i<<" ";   
    return 0;
}