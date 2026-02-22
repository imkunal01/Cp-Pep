// Problem: Asteroid Collision
// Date: February 16, 2026

#include <bits/stdc++.h>
using namespace std;

vector<int> asteroidCollision(vector<int>& asteroids) {
    stack<int> st;
    
    for (int ast : asteroids) {
        bool destroyed = false;
        
        while (!st.empty() && ast < 0 && st.top() > 0) {
            if (abs(ast) > st.top()) {
                st.pop();
            } else if (abs(ast) == st.top()) {
                st.pop();
                destroyed = true;
                break;
            } else {
                destroyed = true;
                break;
            }
        }
        
        if (!destroyed) st.push(ast);
    }
    
    vector<int> result(st.size());
    for (int i = st.size() - 1; i >= 0; i--) {
        result[i] = st.top();
        st.pop();
    }
    return result;
}

int main() {
    // Test cases
    return 0;
}
