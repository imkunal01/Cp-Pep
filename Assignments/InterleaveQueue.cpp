// Problem: Interleave the First Half of the Queue with Second Half
// Date: February 17, 2026

#include <bits/stdc++.h>
using namespace std;

void interleaveQueue(queue<int>& q) {
    int n = q.size();
    queue<int> firstHalf;
    
    // Store first half
    for (int i = 0; i < n / 2; i++) {
        firstHalf.push(q.front());
        q.pop();
    }
    
    // Interleave
    while (!firstHalf.empty()) {
        q.push(firstHalf.front());
        firstHalf.pop();
        q.push(q.front());
        q.pop();
    }
}

int main() {
    // Test cases
    return 0;
}
