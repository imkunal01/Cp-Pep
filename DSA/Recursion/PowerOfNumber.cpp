// Problem: Power of a Number
// Date: February 3, 2026

#include <bits/stdc++.h>
using namespace std;
// recursive approach
double myPow(double x, int n) {
    if(n==0) return 1;
    return x* myPow(x,n-1);
}

// iterative approach
int myPowIterative(double x, int n) {
    long long exp = n;
    while(exp<0){
        x = 1/x;
        exp = -exp;
    }
    double ans = 1;
    while(exp>0){


        
        if(exp%2==1) ans = ans*x;
        x = x*x;
        exp = exp/2;
    }
    return ans;
}

int main() {
    int x = 2;
    int n = 2;
    cout<<myPowIterative(2, 10)<<endl; // Output: 4.00000
    return 0;
}
