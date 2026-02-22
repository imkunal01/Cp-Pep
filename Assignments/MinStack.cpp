// Problem: Min Stack
// Date: February 19, 2026

#include <bits/stdc++.h>
using namespace std;

class MinStack {
    stack<long long> st;
    long long minVal;
public:
    MinStack() {
        minVal = LLONG_MAX;
    }
    
    void push(int val) {
        if (st.empty()) {
            st.push(val);
            minVal = val;
        } else if (val < minVal) {
            st.push(2LL * val - minVal);
            minVal = val;
        } else {
            st.push(val);
        }
    }
    
    void pop() {
        if (st.top() < minVal) {
            minVal = 2LL * minVal - st.top();
        }
        st.pop();
    }
    
    int top() {
        if (st.top() < minVal) return minVal;
        return st.top();
    }
    
    int getMin() {
        return minVal;
    }
};

int main() {
    // Test cases
    return 0;
}
