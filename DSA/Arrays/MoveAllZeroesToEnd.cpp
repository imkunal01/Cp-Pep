#include <bits/stdc++.h>
using namespace std;
int main() {
    vector<int>nums = {1,2,0,0,0,3,4,1};
    int n = nums.size();
    int non = 0;
    for(int i =0;i<n;i++){
        if(nums[i] != 0){
            nums[non] = nums[i];
            non++;
        }
    }
    for(int i = non ;i<n;i++){
        nums[i] = 0;
    }


    for(int i : nums){
        cout<<i<<" ";
    }
    return 0;
}