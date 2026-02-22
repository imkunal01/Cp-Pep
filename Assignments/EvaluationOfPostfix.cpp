// Problem: Evaluation of Postfix
// Date: February 13, 2026

#include <bits/stdc++.h>
using namespace std;

int evaluatePostfix(string s) {
    stack<int> st;
    
    for (int i = 0; i < s.length(); i++) {
        if (s[i] == ' ') continue;
        
        if (isdigit(s[i])) {
            int num = 0;
            while (i < s.length() && isdigit(s[i])) {
                num = num * 10 + (s[i] - '0');
                i++;
            }
            i--;
            st.push(num);
        } else {
            int b = st.top(); st.pop();
            int a = st.top(); st.pop();
            
            switch (s[i]) {
                case '+': st.push(a + b); break;
                case '-': st.push(a - b); break;
                case '*': st.push(a * b); break;
                case '/': st.push(a / b); break;
            }
        }
    }
    return st.top();
}

int main() {
    // Test cases
    return 0;
}
