#include <bits/stdc++.h>
using namespace std;

int main() {
    double a, b;
    char op;

    cout << "first : ";
    cin >> a;

    cout << "operator (+, -, *, /): ";

    cin >> op;

    cout << "second number: ";

    cin >> b;

    if (op == '+') {
        cout << "Result: " << a + b;
    }
    else if (op == '-') {
        cout << "Result: " << a - b;
    }
    else if (op == '*') {
        cout << "Result: " << a * b;
    }
    else if (op == '/') {
        if (b == 0) {
            cout << "cant be divided by zero";
        } else {
            cout << "Res: " << a / b;
        }
    }
    else {
        cout << "Invalid operator!";
    }

    return 0;
}