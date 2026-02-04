#include <bits/stdc++.h>
using namespace std;
// find and count the ocurrence of target 

int findGrimoire(vector<int>& ids, int target) {
    int n = ids.size();
    int left = 0;
    int right = n-1;
    int c=0;
    while(left<right){
        int mid = left+(right-left)/2;
        if(ids[mid] == target){
            c++;
        }
        if(ids[mid]<target) left = mid+1;
        else right = mid-1;
    }
    return c;
}

int main() {
    vector<int>v = {1,2,2,3,4,5,8,9};
    int target = 2;
    cout<<findGrimoire(v,target);
    return 0;
}