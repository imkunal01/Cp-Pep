// Problem: All Nodes at Distance K
// Date: February 19, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

void buildParentMap(TreeNode* root, unordered_map<TreeNode*, TreeNode*>& parent) {
    if (!root) return;
    if (root->left) {
        parent[root->left] = root;
        buildParentMap(root->left, parent);
    }
    if (root->right) {
        parent[root->right] = root;
        buildParentMap(root->right, parent);
    }
}

vector<int> distanceK(TreeNode* root, TreeNode* target, int k) {
    unordered_map<TreeNode*, TreeNode*> parent;
    buildParentMap(root, parent);
    
    vector<int> result;
    unordered_set<TreeNode*> visited;
    queue<TreeNode*> q;
    q.push(target);
    visited.insert(target);
    int dist = 0;
    
    while (!q.empty()) {
        if (dist == k) {
            while (!q.empty()) {
                result.push_back(q.front()->val);
                q.pop();
            }
            return result;
        }
        int size = q.size();
        for (int i = 0; i < size; i++) {
            TreeNode* node = q.front();
            q.pop();
            if (node->left && !visited.count(node->left)) {
                visited.insert(node->left);
                q.push(node->left);
            }
            if (node->right && !visited.count(node->right)) {
                visited.insert(node->right);
                q.push(node->right);
            }
            if (parent.count(node) && !visited.count(parent[node])) {
                visited.insert(parent[node]);
                q.push(parent[node]);
            }
        }
        dist++;
    }
    return result;
}

int main() {
    // Test cases
    return 0;
}
