#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int>arr1 = {1,2,3,4,5};
    
    int arr[5] = {3,7,3,4,5};

    int *p = arr;

    // cout<<*(p+1);

    int n = sizeof(arr)/sizeof(arr[0]);

    // for(int i =0;i<n;i++){
    //     cout<<*p<<" ";
    //     *(p++);
    // }
    

    int min = INT_MAX;

    for(int i = 0;i<n;i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    
    int Max= INT_MIN;
    
    for(int i = 0;i<n;i++){
        if(arr[i]>Max){
            Max = arr[i];
        }
    }
    cout<<Max<<endl;

    int sum = 0;

    for( int i = 0;i<n ;i++){
        sum+=arr[i];
    }

    

    return 0;
}