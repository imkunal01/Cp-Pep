// Problem: Remove Duplicate Letters
// Date: February 13, 2026

#include <bits/stdc++.h>
using namespace std;

string removeDuplicateLetters(string s) {
    vector<int> count(26, 0);
    vector<bool> inStack(26, false);
    string result;
    
    for (char c : s) count[c - 'a']++;
    
    for (char c : s) {
        count[c - 'a']--;
        if (inStack[c - 'a']) continue;
        
        while (!result.empty() && result.back() > c && count[result.back() - 'a'] > 0) {
            inStack[result.back() - 'a'] = false;
            result.pop_back();
        }
        result += c;
        inStack[c - 'a'] = true;
    }
    return result;
}

int main() {
    // Test cases
    return 0;
}
