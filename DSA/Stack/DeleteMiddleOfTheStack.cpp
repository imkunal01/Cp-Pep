#include <bits/stdc++.h>
using namespace std;


void deleteMiddle(stack<int>& st, int n) {
    if(st.empty()) return;

    int mid = n / 2;   // 0-based from top
    stack<int> temp;

    // Move top mid elements
    for(int i = 0; i < mid; i++) {
        temp.push(st.top());
        st.pop();
    }

    // Remove middle element
    st.pop();

    // Put elements back
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

    // while(!st.empty()) {
    //     cout << st.top() << " ";
    //     st.pop();
    // }
    return 0;
}