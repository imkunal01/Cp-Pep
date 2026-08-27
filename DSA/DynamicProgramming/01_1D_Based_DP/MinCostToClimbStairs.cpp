// Min Cost Climbing Stairs - multiple methods

#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

// Recursive method
int minCostRecursive(const vector<int>& cost, int n) {
	if (n <= 1) return 0;
	return min(minCostRecursive(cost, n - 1) + cost[n - 1],
			   minCostRecursive(cost, n - 2) + cost[n - 2]);
}

// Recursive + DP (memoization)
int minCostRecDP(const vector<int>& cost, int n, vector<int>& dp) {
	if (n <= 1) return 0;
	if (dp[n] != -1) return dp[n];

	dp[n] = min(minCostRecDP(cost, n - 1, dp) + cost[n - 1],
				minCostRecDP(cost, n - 2, dp) + cost[n - 2]);
	return dp[n];
}

// Iterative DP (tabulation)
int minCostTabulation(const vector<int>& cost) {
	int n = static_cast<int>(cost.size());
	vector<int> dp(n + 1, 0);

	for (int i = 2; i <= n; ++i) {
		dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
	}
	return dp[n];
}

// Iterative with O(1) space
int minCostIterative(const vector<int>& cost) {
	int n = static_cast<int>(cost.size());
	int prev2 = 0, prev1 = 0;

	for (int i = 2; i <= n; ++i) {
		int curr = min(prev1 + cost[i - 1], prev2 + cost[i - 2]);
		prev2 = prev1;
		prev1 = curr;
	}
	return prev1;
}

int main() {
	vector<int> cost = {10, 15, 20};
	int n = static_cast<int>(cost.size());

	cout << "Recursive: " << minCostRecursive(cost, n) << '\n';

	vector<int> dp(n + 1, -1);
	cout << "Rec DP: " << minCostRecDP(cost, n, dp) << '\n';

	cout << "Tabulation: " << minCostTabulation(cost) << '\n';
	cout << "Iterative: " << minCostIterative(cost) << '\n';

	return 0;
}
