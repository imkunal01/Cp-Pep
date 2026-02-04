#include <bits/stdc++.h>
using namespace std;

int partition(vector<int>&arr,int low, int high){
    int pivot = arr[high];

    int i = low;

    for(int j = low; j<high;j++){
        if(arr[j] <pivot){
            swap(arr[i],arr[j]);
            i++;
        }
    }
    
    swap(arr[i],arr[high]);
    return i;
}

void Lumuto(vector<int> &arr,int low,int high){
    if(low<high){
        int p = partition(arr,low,high);
        Lumuto(arr,low,p-1);
        Lumuto(arr,p+1,high);
    }
}

int main() {
    vector<int> arr = {8, 3, 6, 2, 5, 4};
    int  n = arr.size()-1;
    Lumuto(arr, 0 , n);
    for (int x : arr) cout << x << " ";
    return 0;
}