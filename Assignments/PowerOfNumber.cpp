// Problem: Power of a Number
// Date: February 3, 2026

#include <bits/stdc++.h>
using namespace std;

double myPow(double x, int n) {
    if (n == 0) return 1;
    if (n < 0) {
        x = 1 / x;
        n = -(n + 1);  // Handle INT_MIN
        return x * myPow(x, n);
    }
    
    double half = myPow(x, n / 2);
    if (n % 2 == 0) return half * half;
    return half * half * x;
}

int main() {
    // Test cases
    return 0;
}
