#include <bits/stdc++.h>
using namespace std;

void Ntimes (int n ){
    if(n==0) return;
    Ntimes(n-1);
    cout << n <<" ";
}

void NtimesRev (int n ){
    if(n==0) return;
    cout << n <<" ";
    NtimesRev(n-1);
}

int main(){
    int n = 5;
    Ntimes(n);
    cout<<endl;
    NtimesRev(n);
    return 0;
}