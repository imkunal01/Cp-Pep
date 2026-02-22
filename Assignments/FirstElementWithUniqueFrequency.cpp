// Problem: First Element with Unique Frequency
// Date: February 15, 2026

#include <bits/stdc++.h>
using namespace std;

int firstUniqueFrequency(vector<int>& arr) {
    unordered_map<int, int> freq;
    for (int x : arr) freq[x]++;
    
    unordered_set<int> freqSet;
    for (auto& p : freq) {
        if (freqSet.count(p.second)) continue;
        freqSet.insert(p.second);
    }
    
    for (int x : arr) {
        // Check if frequency of x is unique
        int cnt = 0;
        for (auto& p : freq) {
            if (p.second == freq[x]) cnt++;
        }
        if (cnt == 1) return x;
    }
    return -1;
}

int main() {
    // Test cases
    return 0;
}
