#include <bits/stdc++.h> 
using namespace std;
vector<int> sortArray(vector<int>v, int i){
    if(i == v.size()) return v;
    if(v[i] < v[i+1]) swap(v[i+1],v[i]);
    return sortArray(v,i+1);
}
int main() {
    vector<int> v = {5,4,3,2,1};
    v = sortArray(v,0);
    for(int i:v) cout<<i<<" ";   
    return 0;
}