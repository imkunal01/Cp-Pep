#include <bits/stdc++.h>
using namespace std;

void Ntimes (int n ){
    if(n==0) return;
    Ntimes(n-1);
    cout << n <<" ";
}

// call stack for this function will be like this:
// Ntimes(5) -> Ntimes(4) -> Ntimes(3) -> Ntimes(2) -> Ntimes(1) -> Ntimes(0)
// and then it will print 1 2 3 4 5

void NtimesRev (int n ){
    if(n==0) return;
    cout << n <<" ";
    NtimesRev(n-1);
}

// from the above function, the call stack will be like this:
// NtimesRev(5) -> NtimesRev(4) -> NtimesRev(3) -> NtimesRev(2) -> NtimesRev(1) -> NtimesRev(0)
// and then it will print 5 4 3 2 1

int main(){
    int n = 5;
    Ntimes(n);
    cout<<endl;
    NtimesRev(n);
    return 0;
}