// Problem: Serialize and Deserialize a Binary Tree
// Date: February 21, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Codec {
public:
    string serialize(TreeNode* root) {
        if (!root) return "null,";
        return to_string(root->val) + "," + 
               serialize(root->left) + 
               serialize(root->right);
    }

    TreeNode* deserializeHelper(queue<string>& nodes) {
        string val = nodes.front();
        nodes.pop();
        if (val == "null") return nullptr;
        
        TreeNode* root = new TreeNode(stoi(val));
        root->left = deserializeHelper(nodes);
        root->right = deserializeHelper(nodes);
        return root;
    }

    TreeNode* deserialize(string data) {
        queue<string> nodes;
        string curr;
        for (char c : data) {
            if (c == ',') {
                nodes.push(curr);
                curr.clear();
            } else {
                curr += c;
            }
        }
        return deserializeHelper(nodes);
    }
};

int main() {
    // Test cases
    return 0;
}
