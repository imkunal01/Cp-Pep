#include <bits/stdc++.h>
using namespace std;

int evaluatePostfix(string s) {
    stack<int> st;
    stringstream ss(s);
    string token;

    while (ss >> token) {
        if (isdigit(token[0])) {
            st.push(stoi(token));
        } 
        else {
            int op2 = st.top(); 
            st.pop();
            int op1 = st.top();
            st.pop();

            if (token == "+") 
            st.push(op1 + op2);
            else if (token == "-") 
            st.push(op1 - op2);
            else if (token == "*") 
            st.push(op1 * op2);
            else if (token == "/") 
            st.push(op1 / op2);
        }
    }
    return st.top();
}
int evaluatePrefix(string s) {
    stack<int> st;

    // Traverse from right to left
    for (int i = s.length() - 1; i >= 0; i--) {

        // Ignore spaces
        if (s[i] == ' ') continue;

        // If operand
        if (isdigit(s[i])) {
            st.push(s[i] - '0');
        }
        else {
            int op1 = st.top(); st.pop();
            int op2 = st.top(); st.pop();

            switch (s[i]) {
                case '+': st.push(op1 + op2); break;
                case '-': st.push(op1 - op2); break;
                case '*': st.push(op1 * op2); break;
                case '/': st.push(op1 / op2); break;
            }
        }
    }

    return st.top();
}


int precedence(char op) {
    if (op == '+' || op == '-') return 1;
    if (op == '*' || op == '/') return 2;
    return 0;
}

int applyOp(int a, int b, char op) {
    if (op == '+') return a + b;
    if (op == '-') return a - b;
    if (op == '*') return a * b;
    if (op == '/') return a / b;
    return 0;
}

int evaluateInfix(string s) {
    stack<int> values;
    stack<char> ops;

    for (int i = 0; i < s.length(); i++) {

        if (s[i] == ' ') continue;

        // If digit
        if (isdigit(s[i])) {
            values.push(s[i] - '0');
        }

        else if (s[i] == '(') {
            ops.push(s[i]);
        }

        else if (s[i] == ')') {
            while (!ops.empty() && ops.top() != '(') {
                int b = values.top(); values.pop();
                int a = values.top(); values.pop();
                char op = ops.top(); ops.pop();
                values.push(applyOp(a, b, op));
            }
            ops.pop(); // remove '('
        }

        else { // operator
            while (!ops.empty() && 
                   precedence(ops.top()) >= precedence(s[i])) {
                int b = values.top(); values.pop();
                int a = values.top(); values.pop();
                char op = ops.top(); ops.pop();
                values.push(applyOp(a, b, op));
            }
            ops.push(s[i]);
        }
    }

    // Final remaining operations
    while (!ops.empty()) {
        int b = values.top(); values.pop();
        int a = values.top(); values.pop();
        char op = ops.top(); ops.pop();
        values.push(applyOp(a, b, op));
    }

    return values.top();
}

int main() {
    string expr1 = "1-(2*(4+6))";
    string expr2 = "- 1 * 2 + 4 6";
    string expr3 = "1 2 4 6 + * -";
    cout << evaluateInfix(expr1);
    cout << evaluatePrefix(expr2);
    cout << evaluatePostfix(expr3);
}
