#include <bits/stdc++.h>
using namespace std;

string removeOuterMost(string s){
    int c = 0;
    string ans ="";
    int n= s.size();
    for(int i=0;i<n;i++){
        if(s[i]== ')') c--;
        if(c!=0) ans+=s[i];
        if(s[i] == '(') c++;
    }
    return ans;
}
int main() {
    string s = "(()())(())";
    string ans = removeOuterMost(s);

    cout<<ans;
    
    return 0;
}