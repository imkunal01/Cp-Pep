#include <bits/stdc++.h>
using namespace std;

#define nl endl
#define cnl cout<<endl

int main() {

    vector<int>nums = {1,0,1,0,1};
    int n = nums.size();

    // formula to find number of total subarrays :- tot = n*(n+1)/2 
    int Total_Subarrays = n * (n + 1) / 2; 
    
    // total subaarays finding brute force o(n^3)

    for(int i = 0;i<n;i++){
        for(int j = i;j<n;j++){
            for(int k = i;k<=j;k++){
                cout<<nums[k]<<" ";
            }
            cnl;
        }
    }

    cnl;

    
    class Solution {
public:
    int numSubarraysWithSum(vector<int>& nums, int goal) {
        unordered_map<int, int> count;
        count[0] = 1;
        int curr_sum = 0;
        int total_subarrays = 0;

        for (int num : nums) {
            curr_sum += num;
            if (count.find(curr_sum - goal) != count.end()) {
                total_subarrays += count[curr_sum - goal];
            }
            count[curr_sum]++;
        }

        return total_subarrays;
    }
};
    
    // for(int i = 0;i<n;i++){
    //     for(int j = i;j<n;j++){
    //         cout<<i<<" "<<j;
    //     }
    //     cnl;
    // }

    return 0;
}