#include<bits/stdc++.h>
using namespace std;
class Solution {
public:
    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        int n = rooms.size();
        vector<bool>visited (n,false);
        queue<int> q ;
        visited[0] = true;
        q.push(0);
        while(!q.empty()){
            int currentNode = q.front();
            q.pop();
            for(int i : rooms[currentNode]){
                if(!visited[i]){
                    visited[i] = true;
                    q.push(i);
                }
            }
        }
        for(bool v : visited){
            if(!v) return false;
        }

        return true;
    }
};

int main(){

}