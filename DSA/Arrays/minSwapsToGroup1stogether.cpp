#include <bits/stdc++.h>
using namespace std;



int minSwaps(vector<int>& data) {
    int k = 0;
    for (int& v : data) {
        k += v;
    }
    int t = 0;
    for (int i = 0; i < k; ++i) {
        t += data[i];
    }
    int mx = t;
    for (int i = k; i < data.size(); ++i) {
        t += data[i];
        t -= data[i - k];
        mx = max(mx, t);
    }W
    return k - mx;
}

int main() {
    vector<int> nums = {1,1,0,0,1};

    int Size = nums.size();
    int zeroCount = 0;
    int oneCount = 0;
    for(int i = 0;i<Size;i++){
        if(nums[i] == 0){
            zeroCount++;
        }
        else{
            oneCount++;
        }
    }


    
    return 0;
}