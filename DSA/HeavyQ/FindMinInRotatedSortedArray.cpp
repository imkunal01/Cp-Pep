#include <bits/stdc++.h>
using namespace std;

bool check(vector<int>arr,int k,int mid){
    int n = arr.size();
    int count = 1;
    int sum = 0;
    for(int i =0;i<n;i++){
        if(sum+arr[i]>mid){
            count++;
        }
        else{
            sum+=arr[i];
        }
    }
}

int AllocatePage(){
    
}
int findMin(vector<int>nums){
    int n = nums.size();


    int low = 0;
    int high = n-1;

    while(low < high){

    }
}
int main() {
    
    return 0;
}