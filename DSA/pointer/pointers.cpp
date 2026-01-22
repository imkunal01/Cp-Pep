#include<bits/stdc++.h>
using namespace std;

void swap (int *a , int *b){
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main(){
    int n = 2;
    int m = 4;

    // swap(n,m);
    // cout<<n<<" "<<m;

    int *p = &n;
    int **pp = &p;
    cout<<**pp;

}