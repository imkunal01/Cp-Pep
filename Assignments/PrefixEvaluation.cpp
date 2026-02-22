// Problem: Prefix Evaluation
// Date: February 13, 2026

#include <bits/stdc++.h>
using namespace std;

int evaluatePrefix(string s) {
    stack<int> st;
    
    for (int i = s.length() - 1; i >= 0; i--) {
        if (s[i] == ' ') continue;
        
        if (isdigit(s[i])) {
            int num = 0, pow = 1;
            while (i >= 0 && isdigit(s[i])) {
                num = num + (s[i] - '0') * pow;
                pow *= 10;
                i--;
            }
            i++;
            st.push(num);
        } else {
            int a = st.top(); st.pop();
            int b = st.top(); st.pop();
            
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
