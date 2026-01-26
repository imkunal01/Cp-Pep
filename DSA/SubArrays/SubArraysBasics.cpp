#include <bits/stdc++.h>
using namespace std;

#define nl endl
#define cnl cout<<endl

int main() {

    vector<int>v = {1,2,3,4,5};
    int n = v.size();

    // formula to find number of total subarrays :- tot = n*(n+1)/2 
    int Total_Subarrays = n * (n + 1) / 2; 
    
    // total subaarays finding brute force o(n^3)

    // for(int i = 0;i<n;i++){
    //     for(int j = i;j<n;j++){
    //         for(int k = i;k<=j;k++){
    //             cout<<v[k]<<" ";
    //         }
    //         nl;
    //     }
    // }
    
    for(int i = 0;i<n;i++){
        for(int j = i;j<n;j++){
            cout<<i<<" "<<j;
        }
        cnl;
    }

    return 0;
}