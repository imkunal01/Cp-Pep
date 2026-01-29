#include <bits/stdc++.h>
using namespace std;
int main() {
    
    vector<int>num1 = {1,2,3,4,5};
    vector<int>num2 = {6,7,8,8,9,10};

    int n = num1.size();
    int m = num2.size();

    vector<int> merged;
    merged.reserve(n + m);

    int i = 0;
    int j = 0;

    while (i < n && j < m) {
        if (num1[i] <= num2[j]) {
            merged.push_back(num1[i++]);
        } else {
            merged.push_back(num2[j++]);
        }
    }

    while (i < n) {
        merged.push_back(num1[i++]);
    }
    while (j < m) {
        merged.push_back(num2[j++]);
    }

    for (int x : merged) {
        cout << x << " ";
    }

    return 0;
}