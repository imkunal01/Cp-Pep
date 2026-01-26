#include <bits/stdc++.h>
using namespace std;
int main() {
    // 1101
    int n = 13;
    int mask = 1<<1;
    n = n | mask;
    // made the bits to 1111
    cout<<n<<endl;

    int mask2 = 1<<4;
    int n2 = 13;
    n2 = n2| mask2;
    cout<<n2<<endl;
    // clear bits 
    return 0;
}
