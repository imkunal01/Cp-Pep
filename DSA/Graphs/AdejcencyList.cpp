// for undirected graph
#include<bits/stdc++.h>
using namespace std;
int main(){
    int vertex,edge;
    cin>>vertex>>edge;
    vector<vector<int>> Adj(vertex);
    int u,v;
    for(int i = 0;i<edge;i++){
        cin>>u>>v;
        Adj[u].push_back(v);
        Adj[v].push_back(u); // if we remove this line it will be directed graph
    }
    for(int i = 0; i < vertex; i++){
        cout << i << " -> ";
        for(int j = 0; j < Adj[i].size(); j++){
            cout << Adj[i][j] << " ";
        }
        cout << endl;
    }
}