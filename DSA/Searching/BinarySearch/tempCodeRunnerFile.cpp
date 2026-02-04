#include <bits/stdc++.h>
using namespace std;

int lowerBound(const vector<int>& ids, int target) {
    int l = 0, r = (int)ids.size();
    while (l < r) {
        int m = l + (r - l) / 2;
        if (ids[m] < target) l = m + 1;
        else r = m;
    }
    return l;
}

int upperBound(const vector<int>& ids, int target) {
    int l = 0, r = (int)ids.size();
    while (l < r) {
        int m = l + (r - l) / 2;
        if (ids[m] <= target) l = m + 1;
        else r = m;
    }
    return l;
}

int findGrimoire(const vector<int>& ids, int target) {
    int lb = lowerBound(ids, target);
    int ub = upperBound(ids, target);
    return ub - lb;
}

int main() {
    vector<int> v = {1,2,2,3,4,5,8,9};
    int target = 2;
    cout << findGrimoire(v, target);
    return 0;
}