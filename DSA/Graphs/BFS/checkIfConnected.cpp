#include <queue>
#include <vector>

using std::queue;
using std::vector;

class Solution {
    void bfsProvince(int start, const vector<vector<int>>& isConnected, vector<char>& visited) {
        queue<int> q;
        q.push(start);
        visited[start] = 1;

        int n = (int)isConnected.size();
        while (!q.empty()) {
            int u = q.front();
            q.pop();

            for (int v = 0; v < n; v++) {
                if (isConnected[u][v] == 1 && !visited[v]) {
                    visited[v] = 1;
                    q.push(v);
                }
            }
        }
    }
    int findCircleNum(vector<vector<int>>& isConnected) {
        int n = (int)isConnected.size();
        int provinces = 0;
        vector<char> visited(n, 0);

        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                bfsProvince(i, isConnected, visited); // visit full component
                provinces++; // one province found
            }
        }

        return provinces;
    }
};