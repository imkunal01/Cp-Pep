// Problem: First Non-Repeating Character in a Stream
// Date: February 16, 2026

#include <bits/stdc++.h>
using namespace std;

string firstNonRepeating(string stream) {
    string result;
    queue<char> q;
    vector<int> count(26, 0);
    
    for (char c : stream) {
        count[c - 'a']++;
        q.push(c);
        
        while (!q.empty() && count[q.front() - 'a'] > 1) {
            q.pop();
        }
        
        result += q.empty() ? '#' : q.front();
    }
    return result;
}

int main() {
    // Test cases
    return 0;
}
