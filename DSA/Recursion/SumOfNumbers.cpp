#include <bits/stdc++.h>
using namespace std;
int sum(int n) {
    if(n==0) return 0;
    return n+sum(n-1);
}
// the recursion tree will be like this
// sum(5) 
// 5 + sum(4)
// 5 + 4 + sum(3)
// 5 + 4 + 3 + sum(2)
// 5 + 4 + 3 + 2 + sum(1)

int main() {
    int  n = 5;
    cout<<sum(n);
    return 0;
} 