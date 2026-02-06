#include<bits/stdc++.h>
using namespace std;
class Solution {
public:
    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        int n = rooms.size();
        vector<bool>visited (n,false);

        
    }
};

int main(){
    Solution s;
    cout << boolalpha;

    {
        // Test 1: can visit all rooms
        vector<vector<int>> rooms = {
            {1},
            {2},
            {3},
            {}
        };
        cout << "Test 1 expected=true  got=" << s.canVisitAllRooms(rooms) << "\n";
    }

    {
        // Test 2: cannot visit all rooms
        vector<vector<int>> rooms = {
            {1, 3},
            {3, 0, 1},
            {2},
            {0}
        };
        cout << "Test 2 expected=false got=" << s.canVisitAllRooms(rooms) << "\n";
    }

    return 0;
}