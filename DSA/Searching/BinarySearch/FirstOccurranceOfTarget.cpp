#include <bits/stdc++.h>
using namespace std;

int firstOcc(vector<int> v,int target){
    int l = 0;
    int r= v.size()-1;
    int ans = -1;

    while(l<=r){
        int mid = l+(r-l)/2;
        if(v[mid] == target) {
            ans = mid;
            r = mid-1;
        }
        else if(v[mid]<target) l = mid+1;
        else r = mid-1;
    }
    return ans;
}

int main() {
    vector<int> v= {1,2,3,4,5,5};
    int n = v.size();
    int target = 5;
    cout<< firstOcc(v,target);
    return 0;
}