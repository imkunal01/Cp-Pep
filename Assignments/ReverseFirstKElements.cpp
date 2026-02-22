// Problem: Reverse First K Elements of a Queue
// Date: February 16, 2026

#include <bits/stdc++.h>
using namespace std;

queue<int> reverseFirstK(queue<int> q, int k) {
    stack<int> st;
    
    // Push first k elements to stack
    for (int i = 0; i < k; i++) {
        st.push(q.front());
        q.pop();
    }
    
    // Pop from stack and push back to queue
    while (!st.empty()) {
        q.push(st.top());
        st.pop();
    }
    
    // Move remaining elements to back
    int remaining = q.size() - k;
    for (int i = 0; i < remaining; i++) {
        q.push(q.front());
        q.pop();
    }
    
    return q;
}

int main() {
    // Test cases
    return 0;
}
