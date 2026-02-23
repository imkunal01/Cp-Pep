// Problem: Clear Digits
// Date: February 14, 2026

#include <bits/stdc++.h>
using namespace std;

string clearDigits(string s) {
    string result;
    for (char c : s) {
        if (isdigit(c)) {
            if (!result.empty()) result.pop_back();
        } else {
            result += c;
        }
    }
    return result;
}

int main() {
    // Test cases
    cout << clearDigits("a1b2c3") << endl; // Output: ""
    cout << clearDigits("abc123") << endl; // Output: "a"
    cout << clearDigits("1a2b3c") << endl; // Output: ""
    return 0;
}
