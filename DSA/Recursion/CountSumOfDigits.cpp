#include <bits/stdc++.h>
using namespace std;

int sumIterative (int n ){
    int sum = 0;
    while(n>0){
        sum += n%10;
        n = n/10;
    }
    return sum;
}
int sumRecursive(int n ){
    
    if(n < 10) return n;
    return (n%10) + sumRecursive(n/10);
}

int main(){

    int n = 12345;
    cout<<sumIterative(n)<<endl;
    cout<<sumRecursive(n)<<endl;
    return 0;
}