#include <bits/stdc++.h>
using namespace std;

void bfs(    int startNode, 
             vector<vector<int>>& adj,
             vector<int>& visited,
             int& nodeCount,
             int& edgeCount
        ){
        
        queue<int> q;
        q.push(startNode);
        visited[startNode] = 1;

        while(!q.empty()) {
            int u = q.front();
            q.pop();

            nodeCount++;
            edgeCount += adj[u].size();  // count edges

            for(int v : adj[u]) {
                if(!visited[v]) {
                    visited[v] = 1;
                    q.push(v);
                }
            }
        }
    }

    int countCompleteComponents(int n, vector<vector<int>>& edges) {
        
        // Step 1: Build adjacency list
        vector<vector<int>> adj(n);
        for(auto &e : edges) {
            adj[e[0]].push_back(e[1]);
            adj[e[1]].push_back(e[0]);
        }

        vector<int> visited(n, 0);
        int completeCount = 0;

        for(int i = 0; i < n; i++) {
            if(!visited[i]) {
                
                int nodeCount = 0;
                int edgeCount = 0;

                bfs(i, adj, visited, nodeCount, edgeCount);

                edgeCount /= 2; // because undirected graph

                if(edgeCount == (nodeCount * (nodeCount - 1)) / 2)
                    completeCount++;
            }
        }

        return completeCount;
    }
int main() {
    int n = 6;
    vector<vector<int>> edges = {{0,1}, {0,2}, {1,2}, {3,4}};
    
    cout << countCompleteComponents(n, edges) << endl; // Output: 2
    return 0;
}