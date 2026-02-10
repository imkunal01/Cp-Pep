#include <bits/stdc++.h>
using namespace std;
int minEatingSpeed (vector<int>& piles, int h){
    int mx = *max_element(piles.begin(),piles.end());
    for(int i = 1; i <= mx; i++){
        long long hrs = 0;
        for(int s : piles){
            hrs += (s + i - 1) / i;
        }
        if(hrs <= h){
            return i;
        }
    }
    return mx;
}

int minEatingSpeedBinary(const vector<int>& piles, int h){
    int high = *max_element(piles.begin(),piles.end());
    int low = 1;
    int ans = high;

    while(low <= high){
        int mid = low + (high - low) / 2;

        long long hrs = 0;

        for(int p : piles){
            hrs += (p + mid - 1) / mid;
        }
        if(hrs <= h){
            ans = mid;
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
    return ans;
}

int main() {
    vector<int> v = {30,11,23,4,20};
    int h =5;
    cout<<minEatingSpeed(v,h);
    // cout<<minEatingSpeedBinary(v,h);
    return 0;
}