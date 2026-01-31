#include <bits/stdc++.h>
using namespace std;

#define nl endl
#define cnl cout<<endl

int main() {

    vector<int>nums = {1,0,1,0,1};
    int n = nums.size();

    // formula to find number of total subarrays :- tot = n*(n+1)/2 
    int Total_Subarrays = n * (n + 1) / 2; 
    
    // total subaarays finding brute force o(n^3)

    for(int i = 0;i<n;i++){
        for(int j = i;j<n;j++){
            for(int k = i;k<=j;k++){
                cout<<nums[k]<<" ";
            }
            cnl;
        }
    }

    cnl;

    // int goal = 2;
    // int count=0;
    // int t = n * (n + 1) / 2; 
    // for(int i =0;i<n;i++){
    //     int curr = 0;
    //     for(int j = i;j<n;j++){
    //         curr+=nums[i];
    //         if(curr == goal){
    //             count++;
    //         }
    //     }
    // }
    // cout<<t;
    // return count;
    
    // for(int i = 0;i<n;i++){
    //     for(int j = i;j<n;j++){
    //         cout<<i<<" "<<j;
    //     }
    //     cnl;
    // }

    return 0;
}