#include <bits/stdc++.h>
using namespace std;
double vowelConsonantScore(string s) {
        int c  = 0;
        int v = 0;
        string vowels = "aeiou";
        for(char ch: s){
            if(isalpha(ch)){
                if(vowels.find(tolower(ch)) != string::npos)
                    v++;
                else
                    c++;
            }
        }
        if(c == 0) return 0;
        return (double)v/c;
    }
    int main() {
        string s = "cooear";
        cout << vowelConsonantScore(s) << endl;    
        return 0;
    }