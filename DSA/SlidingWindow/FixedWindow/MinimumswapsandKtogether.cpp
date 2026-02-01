#include <bits/stdc++.h>
using namespace std;
int Check(vector<int>arr,int k){

    int n = arr.size();
    int good= 0;
    int bad= 0;

    for(int i =0;i<n;i++){
        if(arr[i]<k){
            good++;
        }
    }
    
    for(int i = 0;i<n;i++){
        if(arr[i]>k){
            bad++;
        }
    }

    int ans = bad;
    
    if (good == 0 || good == n) return 0;
    
    int l = 0;
    for(int i = good;i<n;i++){
        if(arr[l]>k){
            bad--;
        }
        l++;

        if(arr[i]>k){
            bad++;
        }

        ans = min(ans,bad);
    }
    return ans;
}
int main() {
    vector<int>arr = {2, 7, 9, 5, 8, 7, 4};
    int k = 6;
    int ans = Check(arr,k);
    cout<<ans;
    return 0;
}