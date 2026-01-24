#include <bits/stdc++.h>
using namespace std;
int main() {
    vector<int> v= {1,2,3,4,5,5};
    int n = v.size();
    int target = 5;
    int l = 0;
    int r= n-1;

    while(l<=r){
        int mid = l+(r-l)/2;
        if(v[mid] == target) {
            cout << "found at index " << mid << " ";
            break;
            
        }
        else if(v[mid]<target) l = mid+1;
        else r = mid-1;
    }
    
    return 0;
}