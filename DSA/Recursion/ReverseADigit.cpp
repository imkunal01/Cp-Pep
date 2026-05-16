#include <bits/stdc++.h>
using namespace std;
int reverseDigit(int n, int rev){
    if(n==0) return rev;
    rev = rev*10 + n%10;
    return reverseDigit(n/10, rev);
}

int main(){
    int n = 12345;
    cout<<reverseDigit(n, 0)<<endl;
    return 0;
}