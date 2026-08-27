#include<bits/stdc++.h>
using namespace std;

class Solution {
public:

    bool dfs(int node, vector<vector<int>>& adj,
             vector<bool>& visited,
             vector<bool>& inRecursion) {

        visited[node] = true;
        inRecursion[node] = true;

        for (int neighbor : adj[node]) {

            // If node is not visited, explore it
            if (!visited[neighbor]) {
                if (dfs(neighbor, adj, visited, inRecursion))
                    return true;
            }

            // If neighbor is already in current recursion stack
            else if (inRecursion[neighbor]) {
                return true;
            }
        }

        // Backtracking
        inRecursion[node] = false;

        return false;
    }

    bool isCycle(int V, vector<vector<int>>& edges) {

        // Create adjacency list
        vector<vector<int>> adj(V);

        for (auto &edge : edges) {
            int u = edge[0];
            int v = edge[1];

            // Directed Edge
            adj[u].push_back(v);
        }

        vector<bool> visited(V, false);
        vector<bool> inRecursion(V, false);

        // Handle disconnected graph
        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                if (dfs(i, adj, visited, inRecursion))
                    return true;
            }
        }

        return false;
    }
};

int main() {

    cout << boolalpha;

    // Test Case 1 (Cycle Exists)
    cout << "Test Case 1: ";
    {
        Solution sol;
        vector<vector<int>> edges = {
            {0,1},
            {1,2},
            {2,3},
            {3,1}
        };

        cout << sol.isCycle(4, edges) << endl;
    }

    // Test Case 2 (No Cycle)
    cout << "Test Case 2: ";
    {
        Solution sol;
        vector<vector<int>> edges = {
            {0,1},
            {1,2},
            {2,3}
        };

        cout << sol.isCycle(4, edges) << endl;
    }

    return 0;
}