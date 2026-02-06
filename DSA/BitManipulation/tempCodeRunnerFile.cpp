#include <bits/stdc++.h>
using namespace std;

// this counts the numbers of 1 bits in a number
int main() {
    int n = 13;
    int c = 0;
    while(n){
        if(n&1) c++;
        n = n>>1;
    }
    cout<<c;
    return 0;
}
