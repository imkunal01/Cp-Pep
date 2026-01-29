#include <bits/stdc++.h>
using namespace std;

class Graph {
public:
    int V;                          // number of vertices
    vector<vector<int>> adj;        // adjacency list

    // constructor
    Graph(int vertices) {
        V = vertices;
        adj.resize(V);
    }

    // add edge (undirected graph)
    void addEdge(int u, int v) {
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    // BFS function
    vector<int> bfs(int start) {
        vector<int> bfsOrder;       // this will be returned
        vector<bool> visited(V, false);
        queue<int> q;

        // start BFS
        q.push(start);
        visited[start] = true;

        while (!q.empty()) {
            int node = q.front();
            q.pop();

            bfsOrder.push_back(node);

            for (int neigh : adj[node]) {
                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.push(neigh);
                }
            }
        }

        return bfsOrder;
    }
};

int main() {
    Graph g(6);   // graph with 6 nodes (0 to 5)

    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    g.addEdge(1, 4);
    g.addEdge(2, 5);

    vector<int> result = g.bfs(0);

    cout << "BFS Traversal: ";
    for (int node : result) {
        cout << node << " ";
    }

    return 0;
}
