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
    long long n ;
    cin>>n;
    int almostPrimeCount = 0;

    // Check every number from 1 to n
    for (int i = 1; i <= n; i++) {
        int distinctPrimes = 0;
        
        // Check every number j to see if it's a prime factor of i
        for (int j = 2; j <= i; j++) {
            if (isPrime(j) && i % j == 0) {
                distinctPrimes++;
            }
        }

        if (distinctPrimes == 2) {
            almostPrimeCount++;
        }
    }

    cout << almostPrimeCount << endl;
}