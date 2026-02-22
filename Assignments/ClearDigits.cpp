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
    return 0;
}
