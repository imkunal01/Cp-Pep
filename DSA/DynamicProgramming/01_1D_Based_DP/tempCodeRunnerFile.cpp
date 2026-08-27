#include <bits/stdc++.h>
using namespace std;
int solve(vector<int>& nums, int n, vector<int>& dp){
    if(n == 0) return 0;
    if(n == 1) return nums[0];
    if(dp[n] != -1) return dp[n];

    // way 1 
    int cost = min(cost, abs(nums[n] - nums[n-1]) + solve(nums, n-1, dp));
    // way 2
    if(n > 1){
        cost = min(cost, abs(nums[n] - nums[n-2]) + solve(nums, n-2, dp));
    }

    return dp[n] = cost;
}
int FrogJump(vector<int>nums){
    vector<int> dp(nums.size(), -1);
    return solve(nums, nums.size()-1, dp);
}

int main(){

    vector<int> nums = {10, 20, 30, 10};
    cout << FrogJump(nums) << endl;
    
    return 0;
}