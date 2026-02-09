#include <bits/stdc++.h>
using namespace std;

vector<int> bfs(int startNode, const vector<vector<int>>& adj){
      
    vector<bool> visited(adj.size(), false);
    queue<int> q;
    vector<int> traversal;
    
    visited[startNode] = true;
    q.push(startNode);

    while(!q.empty()){
        int currentNode = q.front();
        q.pop();
        traversal.push_back(currentNode);
        for(int i : adj[currentNode]){
            if(!visited[i]){
                visited[i] = true;
                q.push(i);
            }
        }
    }
    return traversal;
}

int main() {
    
    return 0;
}