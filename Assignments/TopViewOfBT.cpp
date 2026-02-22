// Problem: Top View of Binary Tree
// Date: February 19, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

vector<int> topView(TreeNode* root) {
    vector<int> result;
    if (!root) return result;
    
    map<int, int> hdMap;  // horizontal distance -> first node value
    queue<pair<TreeNode*, int>> q;
    q.push({root, 0});
    
    while (!q.empty()) {
        auto [node, hd] = q.front();
        q.pop();
        
        if (hdMap.find(hd) == hdMap.end())
            hdMap[hd] = node->val;  // Only store first occurrence
        
        if (node->left) q.push({node->left, hd - 1});
        if (node->right) q.push({node->right, hd + 1});
    }
    
    for (auto& [hd, val] : hdMap)
        result.push_back(val);
    return result;
}

int main() {
    // Test cases
    return 0;
}
