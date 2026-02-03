#include <bits/stdc++.h>
using namespace std;

void Display(vector<int>v, int i){
    if(i == v.size()) return;

    cout<<v[i]<<" ";
    
    Display(v,i+1);
}
void DisplayRev(vector<int>v, int i){
    if(i == v.size()) return;
    
    Display(v,i+1);
    
    cout<<v[i]<<" ";
}

int sum(vector<int>v, int i){
    if(i == v.size()) return 0;
    return v[i] + sum(v,i+1);
}

int Maxim(vector<int>v,int i){
    if(i == v.size())return v[i];
    return max(v[i],Maxim(v,i+1));
}

int fib(int n){
    if(n==0) return 0;
    if(n==1) return 1;
    return fib(n-1)+fib(n-1);
}

bool checkIfSorted(vector<int>v,int i){
    if(i == v.size()) return true;
    if(v[i]>v[i+1]) return false;

    return checkIfSorted(v,i+1);
}



int main() {
    vector<int> v = {1,2,4,1,3,1,2,4,5};

    int n = 6;
    
    return 0;
}