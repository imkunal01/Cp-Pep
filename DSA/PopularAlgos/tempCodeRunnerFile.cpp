#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> v = {1,2,3,4,1,3,4,4};

    int n = v.size();

    int curr = INT_MIN;
    int total = 0;
    for(int i =0;i<n;i++){
        total+=v[i];
        curr = max(curr,total);
        if(total<0){
            total = 0;
        }
    }

    cout<<curr;
    return 0;
}


