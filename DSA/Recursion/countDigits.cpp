#include<bits/stdc++.h>
using namespace std;
unsigned long long magnitude(long long n) {
    // Handle LLONG_MIN safely without overflow.
    return (n < 0) ? static_cast<unsigned long long>(-(n + 1)) + 1ULL
                   : static_cast<unsigned long long>(n);
}



long long countDigitIterative(long long n ){
    if(n == 0) return 1;
    unsigned long long x = magnitude(n);
    long long count = 0;
    while(x>0){
        count++;
        x = x/10;
    }
    return count;
}

int countDigitRecursive(unsigned long long n ){
    if(n<10) return 1;
    return 1+countDigitRecursive(n/10);
}



int main(){
    long long n = 1234579192939;
    long long count =countDigitIterative(n);
    int countRec =countDigitRecursive(magnitude(n));
    cout<<count<<endl; 
    cout<<countRec<<endl; 
}