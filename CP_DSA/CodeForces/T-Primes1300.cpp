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
    int t;
    cin>>t;
    while(t--){

        long long n;
        cin>>n;
        
        long long sq = sqrt(n);
        
        if(sq*sq ==n && isPrime(sq)) cout<<"YES"<<endl;
        else cout<<"NO"<<endl;
        
    }
    return 0;
}