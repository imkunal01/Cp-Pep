#include <bits/stdc++.h>
using namespace std;

int xorOfTwoNumbers(int a, int b) {
    return a ^ b;
}

int RecoveredXorNumbers(int xorVals , int a){
    return xorVals ^ a;
}

int main() {
    int a = 5;
    int b = 10;
    int xorVals = xorOfTwoNumbers(a, b);
    cout << "XOR of " << a << " and " << b << " is: " << xorVals << endl;
    int recoveredA = RecoveredXorNumbers(xorVals, b);
    cout << "Recovered A: " << recoveredA << endl;
    return 0;
}