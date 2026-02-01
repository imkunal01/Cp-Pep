#include <bits/stdc++.h>
using namespace std;
int main() {
    vector<int>v = {1,6,0,1,2,3,4,0,1,0};
    int n = v.size();

    v.erase(remove(v.begin(),v.end(),0),v.end());
    // for(int i=n;i>=0;i--){
    //     if(v[i] == 0 ){
    //         v.erase(v.begin()+i);
    //     }       
    // }

    for(int i:v){
        cout<<i<<" ";
    }
    
    return 0;
}