#include <bits/stdc++.h>
using namespace std;

bool validPraranthesis(string s){
    stack<char>st;
    for(int i =0;i<s.size();i++){
        if(s[i] == '(' || s[i] == '{' || s[i] == '[' ){
            
        }
    }
}
int main() {
    cout<<boolalpha;
    string s = "({[]})";
    cout<<validPraranthesis(s)<<endl;    
    return 0;
}