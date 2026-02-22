// Problem: Number of Occurrences
// Date: February 3, 2026

#include <bits/stdc++.h>
using namespace std;

int lowerBound(vector<int>& arr, int target) {
    int lo = 0, hi = arr.size();
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (arr[mid] < target) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}

int upperBound(vector<int>& arr, int target) {
    int lo = 0, hi = arr.size();
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (arr[mid] <= target) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}

int countOccurrences(vector<int>& arr, int target) {
    return upperBound(arr, target) - lowerBound(arr, target);
}

int main() {
    // Test cases
    return 0;
}
