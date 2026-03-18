#include <bits/stdc++.h>
using namespace std;
vector<int> sortArrayByParityII(vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n);
   
    int evenIdx = 0, oddIdx = 1;
    for(int i = 0; i < n; i++){
        if(nums[i] % 2 == 0){
            result[evenIdx] = nums[i];
            evenIdx += 2;
        } else {
            result[oddIdx] = nums[i];
            oddIdx += 2;
        }
    }
    return result;
}
int main() {
    vector<int> nums = {4, 2, 5, 7};
    vector<int> result = sortArrayByParityII(nums);
    for (int num : result) {
        cout << num << " ";
    }
    return 0;
}