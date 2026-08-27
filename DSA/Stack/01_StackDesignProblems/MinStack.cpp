// Problem: Min Stack
// Date: February 19, 2026
// leetcode : min stack https://leetcode.com/problems/min-stack/

#include <bits/stdc++.h>
using namespace std;

class SpecialStack {
public:
    vector<int> st;
    vector<int> minStack; // Auxiliary stack to store min values

    SpecialStack() {
        
    }
    
    void push(int x) {
        st.push_back(x);
        if (minStack.empty() || x <= minStack.back()) {
            minStack.push_back(x);
        } else {
            minStack.push_back(minStack.back());
        }
    }

    void pop() {
        if (!st.empty()) {
            st.pop_back();
            minStack.pop_back();
        }
    }
    
    int peek() {
        if (st.empty()) return -1;
        return st.back();
    }

    bool isEmpty() {
        return st.empty();
    }

    int getMin() {
        if (minStack.empty()) return -1;
        return minStack.back();
    }
};

int main() {
    // create some Test cases
    SpecialStack s;
    s.push(5);
    s.push(2);
    s.push(8);
    s.push(1);
    cout << "Minimum element: " << s.getMin() << endl; // Output: 1
    s.pop();
    cout << "Minimum element: " << s.getMin() << endl; // Output: 2
    return 0;
}
