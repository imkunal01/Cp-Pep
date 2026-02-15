#include <bits/stdc++.h>
using namespace std;

int MinimumAdd(string s){
        int c = 0;
        int n = s.size();
        stack<int> st;
        for(int i =0;i<n;i++){
            if(s[i] == '('){
                st.push(s[i]);
            }
            else {
                if(st.empty())c++;
                else st.pop();

            }
        }
        return c+st.size();
}
int main() {
    string s = "(()())(()";
    int ans = MinimumAdd(s);

    cout<<ans;
    
    return 0;
}