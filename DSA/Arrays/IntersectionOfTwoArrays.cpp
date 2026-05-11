#include <bits/stdc++.h>
using namespace std;

vector<int> intersection(vector<int>& nums1, vector<int>& nums2){
    vector<int> s(nums1.begin(), nums1.end());
    vector<int> ans;

    for(int i = 0;i<nums2.size();i++){
        for(int j = 0;j<s.size();j++){
            if(nums2[i] == s[j]){
                ans.push_back(nums2[i]);
                s.erase(s.begin() + j);
                break;
            }
        }
    }
    return ans;
}
int main() {
    vector<int> nums1 = {1, 2, 2, 1};
    vector<int> nums2 = {2, 2};
    vector<int> result = intersection(nums1, nums2);
    cout << "Intersection of the two arrays: ";
    for(int i = 0;i<result.size();i++){
        cout << result[i] << " ";
    }
    return 0;
}