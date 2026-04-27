#include <bits/stdc++.h>
using namespace std;
class Solution {
public:
    vector<int> firstNegative(vector<int>& arr, int k) {
        int n = arr.size();
        vector<int> result;
        for (int i = 0; i <= n - k; i++) {
            int firstNeg = 0;
            for (int j = i; j < i + k; j++) {
                if (arr[j] < 0) {
                    firstNeg = arr[j];
                    break;
                }
            }
            result.push_back(firstNeg);
        }
        return result;
    }   
};
int main() {
    
    return 0;
}