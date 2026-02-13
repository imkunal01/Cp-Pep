#include <bits/stdc++.h>
using namespace std;


void deleteMiddle(stack<int>& st, int n) {
    if(st.empty()) return;
    int mid = n / 2;
    stack<int> temp;
    for(int i = 0; i < mid; i++) {
        temp.push(st.top());
        st.pop();
    }
    st.pop();
    while(!temp.empty()) {
        st.push(temp.top());
        temp.pop();
    }
}

int main() {
    cout<<boolalpha;
    stack<int> st;
    st.push(1);
    st.push(2);
    st.push(3);
    st.push(4);
    st.push(5);
    while(!st.empty()) {
        cout << st.top() << " ";
        st.pop();
    }
    int n = st.size();
    deleteMiddle(st, n);
    cout<<endl;
    return 0;
}