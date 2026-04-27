//  give an example of fixed window sliding window technique

//  problem is to find the maximum sum of a fixed window of size k in an array
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int k = 3; 
    int n = arr.size();
    int maxSum = 0;

    // Calculate sum of first window
    for (int i = 0; i < k; i++) {
        maxSum += arr[i];
    }
    int currentSum = maxSum;
    // Slide the window from left to right and calculate the sum of each window
    for (int i = k; i < n; i++) {
        currentSum = currentSum - arr[i - k] + arr[i];
        maxSum = max(maxSum, currentSum);
    }
    cout << "Maximum sum of fixed window: " << maxSum << endl;
    return 0;
}