// Problem: K Distance from Root
// Date: February 18, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

// TODO: Implement solution
vector<int> kDistanceFromRoot(TreeNode* root, int k) {
    vector<int> result;
    if (!root || k < 0) return result;
    queue<TreeNode*> q;
    q.push(root);
    int level = 0;
    while (!q.empty()) {
        int size = q.size();
        if (level == k) {
            while (size--) {
                result.push_back(q.front()->val);
                q.pop();
            }
            return result;
        }

        while (size--) {
            TreeNode* node = q.front();
            q.pop();

            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }

        level++;
    }

    return result;

}

int main() {
    // Test case:
    //        1
    //      /   \
    //     2     3
    //    / \   / \
    //   4   5 6   7
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    root->left->right = new TreeNode(5);
    root->right->left = new TreeNode(6);
    root->right->right = new TreeNode(7);

    int k = 2;
    vector<int> ans = kDistanceFromRoot(root, k);

    for (int x : ans) cout << x << " ";
    cout << "\n";

    return 0;
}
