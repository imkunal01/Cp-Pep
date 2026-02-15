#include <bits/stdc++.h>
using namespace std;

bool validPraranthesis(string s){
    stack<char>st;
    for(int i =0;i<s.size();i++){
        if(s[i] == '(' || s[i] == '{' || s[i] == '[' ){
            st.push(s[i]);
        }
        else{
            if(st.empty()){
                return false;
            }
            char c = st.top();
            st.pop();

            if(s[i] == ')' && c == '(') continue;
            else if(s[i] == '}' && c == '{') continue;
            else if(s[i] == ']' && c == '[') continue;
            else{
                return false;
            }
        }
    }
    return st.empty();
}
int main() {
    cout<<boolalpha;
    string s = "({[]})";
    cout<<validPraranthesis(s)<<endl;    
    return 0;
}