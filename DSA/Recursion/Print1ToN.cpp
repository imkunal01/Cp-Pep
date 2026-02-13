#include <bits/stdc++.h>

using namespace std;

void Ntimes (int n ){

    if(n==0) return;

    Ntimes(n-1);
    
    cout << n << endl;

}

int main() {
    int n = 5;
    Ntimes(n);
    return 0;
}