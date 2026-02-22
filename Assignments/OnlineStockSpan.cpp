// Problem: Online Stock Span
// Date: February 16, 2026

#include <bits/stdc++.h>
using namespace std;

class StockSpanner {
    stack<pair<int, int>> st;  // {price, span}
public:
    StockSpanner() {
    }
    
    int next(int price) {
        int span = 1;
        while (!st.empty() && st.top().first <= price) {
            span += st.top().second;
            st.pop();
        }
        st.push({price, span});
        return span;
    }
};

int main() {
    // Test cases
    return 0;
}
