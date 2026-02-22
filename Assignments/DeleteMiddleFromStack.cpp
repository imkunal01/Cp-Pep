// Problem: Delete Middle Element from Stack
// Date: February 12, 2026

#include <bits/stdc++.h>
using namespace std;

void deleteMiddle(stack<int>& st, int n, int curr) {
    if (curr == n / 2) {
        st.pop();
        return;
    }
    
    int top = st.top();
    st.pop();
    deleteMiddle(st, n, curr + 1);
    st.push(top);
}

int main() {
    // Test cases
    return 0;
}
