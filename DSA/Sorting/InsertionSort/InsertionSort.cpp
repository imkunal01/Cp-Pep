#include <bits/stdc++.h>
using namespace std;
int main() {

    vector<int>arr = {4,3,2,1,5,6,2,1};
    int n = arr.size();

    for(int i =1;i<n;i++){
        int ele = arr[i];
        int j = i-1;
        while(j>=0 && arr[j] > ele){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = ele;
    }
    
    for(int i : arr){
        cout<<i<<" ";
    }

    return 0;
}