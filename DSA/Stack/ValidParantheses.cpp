#include <bits/stdc++.h>
using namespace std;

bool validPraranthesis(string s){
    stack<char>st;
    for(char c:s){
        if(c=='(' || c=='{' || c=='['){
            st.push(c);
        }
        else{
            if(st.empty()) return false;
            char top = st.top();
            st.pop();
            if((c==')' && top!='(') || (c=='}' && top!='{') || (c==']' && top!='[')){
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