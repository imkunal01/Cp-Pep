#include <bits/stdc++.h>
using namespace std;

//core idea is that if we find the node that is not your parant that means cycle is detected

bool dfs (int node, int parent, vector<int> adj[], vector<bool> &visited){
    visited[node] = 1;
    for(auto x: adj[node]){
        if(!visited[x]){
            if(dfs(x,node,adj,visited)){
                return true;
            }
        }
    }
}


int main() {

}