#include <bits/stdc++.h>
using namespace std;

// Recursive approach - Brute force
int recursiveSolve(vector<int>& nums, int index) {
    if (index >= nums.size()) {
        return 0;
    }
    
    // Rob current house + max from remaining
    int rob = nums[index] + recursiveSolve(nums, index + 2);
    // Skip current house
    int skip = recursiveSolve(nums, index + 1);
    
    return max(rob, skip);
}

// Recursive with memoization (Top-down DP)
int recursiveDP(vector<int>& nums, int index, vector<int>& memo) {
    if (index >= nums.size()) {
        return 0;
    }
    
    if (memo[index] != -1) {
        return memo[index];
    }
    
    int rob = nums[index] + recursiveDP(nums, index + 2, memo);
    int skip = recursiveDP(nums, index + 1, memo);
    
    memo[index] = max(rob, skip);
    return memo[index];
}

// Iterative approach with DP (Bottom-up tabulation)
int tabulationSolve(vector<int>& nums) {
    if (nums.empty()) return 0;
    if (nums.size() == 1) return nums[0];
    
    vector<int> dp(nums.size());
    dp[0] = nums[0];
    dp[1] = max(nums[0], nums[1]);
    
    for (int i = 2; i < nums.size(); i++) {
        dp[i] = max(nums[i] + dp[i - 2], dp[i - 1]);
    }
    
    return dp[nums.size() - 1];
}

// Space optimized iterative approach
int iterativeOptimized(vector<int>& nums) {
    if (nums.empty()) return 0;
    if (nums.size() == 1) return nums[0];
    
    int prev2 = nums[0];
    int prev1 = max(nums[0], nums[1]);
    
    for (int i = 2; i < nums.size(); i++) {
        int curr = max(nums[i] + prev2, prev1);
        prev2 = prev1;
        prev1 = curr;
    }
    
    return prev1;
}

// Main function to test all approaches
int main() {
    vector<int> nums = {1, 2, 3, 1};
    
    cout << "House Robber Problem Solutions:" << endl;
    cout << "Input: ";
    for (int num : nums) cout << num << " ";
    cout << endl << endl;
    
    // Recursive approach
    cout << "Recursive (Brute Force): " << recursiveSolve(nums, 0) << endl;
    
    // Recursive with Memoization
    vector<int> memo(nums.size(), -1);
    cout << "Recursive DP (Memoization): " << recursiveDP(nums, 0, memo) << endl;
    
    // Tabulation approach
    cout << "Tabulation (Bottom-up DP): " << tabulationSolve(nums) << endl;
    
    // Space optimized iterative
    cout << "Iterative Optimized: " << iterativeOptimized(nums) << endl;
    
    return 0;
}
