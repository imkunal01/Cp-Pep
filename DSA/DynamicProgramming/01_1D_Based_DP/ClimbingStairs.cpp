#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

// Method 1: Recursive Approach
// Time Complexity: O(2^n), Space Complexity: O(n)
int climbStairsRecursive(int n) {
    if (n == 0 || n == 1) return 1;
    return climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2);
}

// Method 2: Recursive with Memoization (Top-Down DP)
// Time Complexity: O(n), Space Complexity: O(n)
int climbStairsRecursiveDP(int n, unordered_map<int, int>& memo) {
    if (n == 0 || n == 1) return 1;
    if (memo.find(n) != memo.end()) return memo[n];
    
    memo[n] = climbStairsRecursiveDP(n - 1, memo) + climbStairsRecursiveDP(n - 2, memo);
    return memo[n];
}

int climbStairsRecursiveDP(int n) {
    unordered_map<int, int> memo;
    return climbStairsRecursiveDP(n, memo);
}

// Method 3: Iterative Approach (Bottom-Up, without DP array)
// Time Complexity: O(n), Space Complexity: O(1)
int climbStairsIterative(int n) {
    if (n == 0 || n == 1) return 1;
    
    int prev1 = 1, prev2 = 1;
    for (int i = 2; i <= n; i++) {
        int curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}

// Method 4: Iterative DP with Array (Bottom-Up Tabulation)
// Time Complexity: O(n), Space Complexity: O(n)
int climbStairsIterativeDP(int n) {
    if (n == 0 || n == 1) return 1;
    
    vector<int> dp(n + 1);
    dp[0] = 1;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// Method 5: Tabulation Approach (explicit DP table)
// Time Complexity: O(n), Space Complexity: O(n)
int climbStairsTabulation(int n) {
    if (n == 0 || n == 1) return 1;
    
    vector<int> table(n + 1, 0);
    table[0] = 1;
    table[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }
    return table[n];
}

// Driver code to test all methods
int main() {
    int n = 5;
    
    cout << "Climbing Stairs Problem - All Methods\n";
    cout << "Number of stairs: " << n << "\n\n";
    
    cout << "1. Recursive: " << climbStairsRecursive(n) << "\n";
    cout << "2. Recursive with Memoization: " << climbStairsRecursiveDP(n) << "\n";
    cout << "3. Iterative (Space Optimized): " << climbStairsIterative(n) << "\n";
    cout << "4. Iterative DP with Array: " << climbStairsIterativeDP(n) << "\n";
    cout << "5. Tabulation: " << climbStairsTabulation(n) << "\n";
    
    return 0;
}
