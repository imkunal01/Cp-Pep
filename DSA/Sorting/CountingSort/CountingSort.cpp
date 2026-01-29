/*
How many times each value occurs

used when = range is small and known 




Time Complexity: O(n+k)
n = no. of ele
k = range of values


*/


#include <bits/stdc++.h>
using namespace std;
void count (vector<int>arr, int k){
    int n=arr.size();
    vector<int> count(k+1,0);
    vector<int> res(n);

    for(int x : arr){
        count[x]++;
    }

    for(int i = 1;i<=k;i++){
        count[i]+=count[i-1];
    }

    for(int i = n-1;i>=0;i--){
        res[count[arr[i]]-1] = arr[i];
        count[arr[i]]--;
    }
    arr = res;
}
int main() {
    vector<int>arr = {1,2,3,1,1,4,5,1,2,4,5};
    int k = 5;
    count(arr,k);
    for(int i =0;i<arr.size();i++){
        
    }
    return 0;
}