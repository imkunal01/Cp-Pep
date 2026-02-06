#include <bits/stdc++.h>
using namespace std;
int TwoSumNearest(vector<int> arr,int target){

    sort(arr.begin(),arr.end());

    int n = arr.size();
    int l = 0;
    int r=n-1;

    int bestSum = arr[l]+arr[r];
    int bestDiff = abs(bestSum-target);

    while(l<r){
        int currSum = arr[l]+arr[r];
        int currDiff = abs(currSum-target);

        if(currDiff<bestDiff || (currDiff == bestDiff && currSum < bestSum)){
            bestDiff = currDiff;
            bestSum = currSum;
        }

        if(currSum<target){
            l++;
        }
        else{
            r--;
        }
    }
    return bestSum;
}
int main() {

    vector<int> arr = {10, 22, 28, 29, 30, 40};
    int t = 54;

    cout<<TwoSumNearest(arr,t);
    
    return 0;
}