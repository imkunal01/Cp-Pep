#include <bits/stdc++.h>
using namespace std;

int main(){
    cout<<boolalpha;
    int a = 10;
    int b = 20;
    bool marks = a>b?true:false; 
    cout<<marks<<endl;

    for(int i = 0;i<5;i++){
        for(int j = 0;j<5;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}