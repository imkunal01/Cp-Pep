#include <bits/stdc++.h>
using namespace std;
    int firstUniqChar(string s) {
        int n = s.size();
        unordered_map<char, int> mp;
        for(char i: s){
            mp[i]++;
        }
        for(int i =0;i<n;i++){
            if(mp[s[i]] == 1){
                return i;
            }
        }
        return -1;
    }
int main() {
    string s = "leetcode";
    int result = firstUniqChar(s);
    cout << result << endl; // Output: 0 (the index of 'l')
    return 0;
}