// Problem: Postfix Evaluation
// Date: February 13, 2026 
#include <bits/stdc++.h>
using namespace std;

// TODO: Implement solution
int evaluatePostfix(string s) {
    // create a stack
    stack<int> st;
    int n = s.length();
    // traverse string right to left
    for(int i = 0;i<n;i++){
        // if s[i] is operand ->st.push()
        if(s[i] == '+' || s[i] == '-' || s[i] == '*' || s[i] == '/'){
            // pop two elements from stack
            int a = st.top();
            st.pop();
            int b = st.top();
            st.pop();
            // evaluate the expression
            int res;
            // else if it is a oprator create two vars and to store two elements 
            if(s[i] == '+'){
                res = a + b;
            }else if(s[i] == '-'){
                res = a - b;
            }else if(s[i] == '*'){
                res = a * b;
            }else if(s[i] == '/'){
                res = a / b;
            }
            // pop them and evaliate woth operator then push the result back to stack
            st.push(res);
        }else{
            // if it is an operand push it to stack
            st.push(s[i] - '0');
        }
    }
    //return the top of stack as result
    return st.top();
}

int main() {
    //test case 
    string s = "";
    cout << "Enter a prefix expression: ";
    int result = evaluatePrefix(s);
    return 0;
}
