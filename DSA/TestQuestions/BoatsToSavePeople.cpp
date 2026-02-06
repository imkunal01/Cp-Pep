#include <bits/stdc++.h>
using namespace std;
int minGondolas(vector<int>arr,int x){
    int n = arr.size();
    int left = 0;
    int right = n-1;

    int count = 0;
    while(left<=right){
        if(arr[left]+arr[right] <=x){
            left++;
            right--;

        }
        else{
            right--;
        }
        count++;
    }
    return count;
}

int main() {
    vector<int>arr = {3, 3, 4, 5};
    int x = 5;
    cout<<minGondolas(arr,x);
    return 0;
}