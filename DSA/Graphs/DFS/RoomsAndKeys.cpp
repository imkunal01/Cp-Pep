#include<bits/stdc++.h>
using namespace std;
class Solution {
public:
    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        int n = rooms.size();
        vector<bool> visited(n, false);
        dfs(rooms, visited, 0);
        for(bool v: visited){
            if(!v) return false;
        }
        return true;
    }


    void dfs(vector<vector<int>>& rooms, vector<bool>& visited, int room){
        visited[room] = true;
        for(int key: rooms[room]){
            if(!visited[key]){
                dfs(rooms, visited, key);
            }
        }
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