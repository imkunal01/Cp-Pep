#include<bits/stdc++.h>
using namespace std;
class Solution {
  public:
    typedef pair<int,int>P;
    bool bfs(int start , vector<vector<int>>&adj,vector<bool>& visited){
        queue<P>q; // yaha pe parant , and current node ko store karenge
        q.push({start, -1});
        
        visited[start] = true;
        
        while(!q.empty()){
            int node = q.front().first;
            int parant = q.front().second;
            
            q.pop();
            
            for(int neighbor: adj[node]){
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    q.push({neighbor, node});
                }
                else if(parant != neighbor){
                    return true;
                }
            }
        }
        
        return false;
        
    }
    
    
    bool dfs(int start, int parant, vector<vector<int>>&adj, vector<bool>&visited){
        visited[start] = true;
        for(int i : adj[start]){
            if(i == parant) continue;
            if(visited[i]) return true;
            if(dfs(i,start,adj,visited)) return true;
        }
        return false;
    }
    
    
    bool isCycle(int V, vector<vector<int>>& edges) {
        
        vector<vector<int>> adj(V);
        for (auto& edge : edges) {
            int u = edge[0];
            int v = edge[1];
            adj[u].push_back(v);
            adj[v].push_back(u);
        }
        int n = adj.size();
        vector<bool>visited(n,false);
        for(int i =0;i<n;i++){
            if(!visited[i]){
                if(dfs(i,-1,adj,visited)){
                    return true;
                }
            }
        }
        return false;
        
    }
};


int main(){
    // create test sample cases
    cout<<"Test Case 1: ";

    cout<<boolalpha; // to print boolean values as true/false instead of 1/0

    {
        Solution sol;
        vector<vector<int>> edges = {{0, 1}, {1, 2}, {2, 3}, {3, 0}};
        bool result = sol.isCycle(4, edges);
        cout << result << endl;
    }


    return 0;
}