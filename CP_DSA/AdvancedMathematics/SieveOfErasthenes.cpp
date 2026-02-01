#include <bits/stdc++.h>
using namespace std;
int main() {
    int n = 13;
    vector<int>primes(n+1,true);

    primes[0] = primes[1] = false;
    for(int i =2;i*i<=n;i++){
        if(primes[i]){
            for(int j = i*i;j<=n;j+=i){
                primes[j] = false;
            }
        }
    }
    for(int i:primes){
        cout<<i<<" ";
    }
    cout<<endl;
    cout<<primes.size();
    return 0;
}