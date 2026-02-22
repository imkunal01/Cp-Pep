// Problem: Reverse Stack
// Date: February 12, 2026

#include <bits/stdc++.h>
using namespace std;

void insertAtBottom(stack<int>& st, int val) {
    if (st.empty()) {
        st.push(val);
        return;
    }
    int top = st.top();
    st.pop();
    insertAtBottom(st, val);
    st.push(top);
}

void reverseStack(stack<int>& st) {
    if (st.empty()) return;
    
    int top = st.top();
    st.pop();
    reverseStack(st);
    insertAtBottom(st, top);
}

int main() {
    // Test cases
    return 0;
}
