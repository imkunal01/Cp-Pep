// adjecency matrix for undirected graph
#include<bits/stdc++.h>
using namespace std;

int main(){
    int vertex,edge;
    cin>>vertex>>edge;
    vector<vector<bool>> Adj(vertex,vector<bool>(vertex,0));
    int u,v;
    for(int i = 0;i<edge;i++){
        cin>>u>>v;
        Adj[u][v] =1;
        Adj[v][u] =1;// if we remove this line it will be directed graph
    }
     for(int i = 0; i < vertex; i++){
        for(int j = 0; j < vertex; j++){
            cout << Adj[i][j] << " ";
        }
        cout << endl;
    }
}


// for weighted undirected graph
/*
#include<bits/stdc++.h>
using namespace std;
int main(){
    int vertex,edge;
    cin>>vertex>>edge;
    vector<vector<int>> Adj(vertex,vector<int>(vertex,0));
    int u,v,weight;
    for(int i = 0;i<edge;i++){
        cin>>u>>v>>weight;
        Adj[u][v] =weight;
        Adj[v][u] =weight;// if we remove this line it will be directed graph
    }
     for(int i = 0; i < vertex; i++){
        for(int j = 0; j < vertex; j++){
            cout << Adj[i][j] << " ";
        }
        cout << endl;
    }
}
*/
// for directed weighted graph just remove the line "Adj[v][u] =weight;"