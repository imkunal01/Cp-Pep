// House Robber II - recursive, memoized DP, tabulation, and space-optimized solutions.

#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int robRecursiveLinear(int idx, const vector<int>& nums) {
	if (idx < 0) return 0;
	if (idx == 0) return nums[0];
	return max(nums[idx] + robRecursiveLinear(idx - 2, nums),
			   robRecursiveLinear(idx - 1, nums));
}

int robMemoLinear(int idx, const vector<int>& nums, vector<int>& dp) {
	if (idx < 0) return 0;
	if (idx == 0) return nums[0];
	if (dp[idx] != -1) return dp[idx];
	int pick = nums[idx] + robMemoLinear(idx - 2, nums, dp);
	int notPick = robMemoLinear(idx - 1, nums, dp);
	return dp[idx] = max(pick, notPick);
}

int robTabulationLinear(const vector<int>& nums) {
	int n = static_cast<int>(nums.size());
	if (n == 0) return 0;
	if (n == 1) return nums[0];
	vector<int> dp(n, 0);
	dp[0] = nums[0];
	for (int i = 1; i < n; ++i) {
		int pick = nums[i] + (i > 1 ? dp[i - 2] : 0);
		int notPick = dp[i - 1];
		dp[i] = max(pick, notPick);
	}
	return dp[n - 1];
}

int robSpaceOptimizedLinear(const vector<int>& nums) {
	int n = static_cast<int>(nums.size());
	if (n == 0) return 0;
	if (n == 1) return nums[0];
	int prev2 = 0, prev1 = nums[0];
	for (int i = 1; i < n; ++i) {
		int cur = max(nums[i] + prev2, prev1);
		prev2 = prev1;
		prev1 = cur;
	}
	return prev1;
}

int robRecursive(const vector<int>& nums) {
	int n = static_cast<int>(nums.size());
	if (n == 0) return 0;
	if (n == 1) return nums[0];
	vector<int> a(nums.begin(), nums.end() - 1);
	vector<int> b(nums.begin() + 1, nums.end());
	return max(robRecursiveLinear(static_cast<int>(a.size()) - 1, a),
			   robRecursiveLinear(static_cast<int>(b.size()) - 1, b));
}

int robMemo(const vector<int>& nums) {
	int n = static_cast<int>(nums.size());
	if (n == 0) return 0;
	if (n == 1) return nums[0];
	vector<int> a(nums.begin(), nums.end() - 1);
	vector<int> b(nums.begin() + 1, nums.end());
	vector<int> dpA(a.size(), -1), dpB(b.size(), -1);
	return max(robMemoLinear(static_cast<int>(a.size()) - 1, a, dpA),
			   robMemoLinear(static_cast<int>(b.size()) - 1, b, dpB));
}

int robTabulation(const vector<int>& nums) {
	int n = static_cast<int>(nums.size());
	if (n == 0) return 0;
	if (n == 1) return nums[0];
	vector<int> a(nums.begin(), nums.end() - 1);
	vector<int> b(nums.begin() + 1, nums.end());
	return max(robTabulationLinear(a), robTabulationLinear(b));
}

int robSpaceOptimized(const vector<int>& nums) {
	int n = static_cast<int>(nums.size());
	if (n == 0) return 0;
	if (n == 1) return nums[0];
	vector<int> a(nums.begin(), nums.end() - 1);
	vector<int> b(nums.begin() + 1, nums.end());
	return max(robSpaceOptimizedLinear(a), robSpaceOptimizedLinear(b));
}

int main() {
	vector<int> nums = {2, 3, 2};
	cout << "Recursive: " << robRecursive(nums) << '\n';
	cout << "Memoization: " << robMemo(nums) << '\n';
	cout << "Tabulation: " << robTabulation(nums) << '\n';
	cout << "Space Optimized: " << robSpaceOptimized(nums) << '\n';
	return 0;
}
