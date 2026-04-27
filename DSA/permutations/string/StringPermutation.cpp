#include <bits/stdc++.h>
using namespace std;

void generate(string &s, int index) {
    if (index == s.size()) {
        cout << s << endl;
        return;
    }

    for (int i = index; i < s.size(); i++) {
        swap(s[index], s[i]);
        generate(s, index + 1);
        swap(s[index], s[i]);
    }
}

int main() {
    string s = "ABC";
    generate(s, 0);
}