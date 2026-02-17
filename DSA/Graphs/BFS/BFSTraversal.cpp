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
    // take example directly 
    vector<vector<int>> adj = {
        {1, 2},    // Neighbors of node 0
        {0, 3, 4}, // Neighbors of node 1
        {0},       // Neighbors of node 2
        {1},       // Neighbors of node 3
        {1}        // Neighbors of node 4
    };
    
    // what node structure looks like
        // Node structure:
        //     0
        //    / \
        //   1   2
        //  / \
        // 3   4
    
    vector<int> result = bfs(0, adj);
    for(int i : result){
        cout << i << " ";
    }
    cout << endl;
    return 0;
}