// Problem: NGE I (Next Greater Element I)
// Date: February 13, 2026

#include <bits/stdc++.h>
using namespace std;

vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
    unordered_map<int, int> nge;
    stack<int> st;
    
    for (int num : nums2) {
        while (!st.empty() && st.top() < num) {
            nge[st.top()] = num;
            st.pop();
        }
        st.push(num);
    }
    
    vector<int> result;
    for (int num : nums1) {
        result.push_back(nge.count(num) ? nge[num] : -1);
    }
    return result;
}

int main() {
    // Test cases
    return 0;
}
