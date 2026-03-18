#include <bits/stdc++.h>
using namespace std;
int singleNumberII(vector<int>& nums) {
    int ones = 0, twos = 0;
    
    for (int num : nums) {
        // Update 'twos' with bits that have appeared twice
        twos |= ones & num;
        
        // Update 'ones' with bits that have appeared once
        ones ^= num;
        
        // Clear bits that have appeared three times
        int common_mask = ~(ones & twos);
        ones &= common_mask;
        twos &= common_mask;
    }
    
    return ones; // 'ones' will contain the single number
}
int main() {
    vector<int> nums = {2, 2, 3, 2};
    cout << "Single number: " << singleNumberII(nums) << endl;
    return 0;
}