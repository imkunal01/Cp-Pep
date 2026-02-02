#include <bits/stdc++.h>
using namespace std;

bool isPrime(long long n){
    if(n<=1) return false;
    if(n==2) return true;
    if(n%2==0) return false;
    for(long long i = 3;i*i<=n;i+=2){
        if(n%i==0) return false;
    }
    return true;
}
int main() {
    int n ;
    cin>>n;
    int count = 0; 
    for(int i = 2;i<=n;i++ ){
        if(isPrime(i)) count++;
    }
    cout<<count<<endl;
    return 0;
}