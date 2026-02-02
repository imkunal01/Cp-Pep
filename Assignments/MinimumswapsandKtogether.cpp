#include <bits/stdc++.h>
using namespace std;
int Check(vector<int>arr,int k){

    int n = arr.size();
    int good= 0;
    int bad= 0;

    for(int i =0;i<n;i++){
        if(arr[i]<=k){
            good++;
        }
    }
    
    for(int i = 0;i<good;i++){
        if(arr[i]>k){
            bad++;
        }
    }

    int ans = bad;
    
    if (good == 0 || good == n) return 0;
    int r = good;
    int l = 0;
    while(r < n){

        if(arr[l]>k){
            bad--;
        }
        l++;

        if(arr[r]>k){
            bad++;
        }
        r++;

        ans = min(ans,bad);
        
    }
    return ans;
}

int main() {

    {
        vector<int>arr = {2, 7, 9, 5, 8, 7, 4};
        int k = 6;
        cout << "Test Case 1: " << Check(arr,k) << "\n";
        if(Check(arr,k) == 2){
            cout<<"Test Case Passed";
        }
        else{
            
            cout<<"Test Case Failed";
        }
        cout<<endl;
    }{
        vector<int>arr = {2, 1, 5, 6, 3};
        int k = 3;
        cout << "Test Case 2: " << Check(arr,k) << "\n";
        if(Check(arr,k) == 1){
            cout<<"Test Case Passed";
        }
        else{
            
            cout<<"Test Case Failed";
        }
    }
    return 0;
}