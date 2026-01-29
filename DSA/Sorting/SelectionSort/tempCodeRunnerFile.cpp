#include <bits/stdc++.h>
using namespace std;

void selectionSort(vector<int>&arr,int n){
    for(int i =0;i<n-1;i++){
        int mindex = i;
        for(int j = i+1;j<n;j++){
            if(arr[j]<arr[mindex]){
                mindex = j;
            }
        }
        if(mindex!=i){
            swap(arr[i],arr[mindex]);
        }
    }
}

int main() {
    vector<int>arr = {1,5,3,2,4,6,7,8};
    int n = arr.size();
    selectionSort(arr,n);
    for(int i =0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}