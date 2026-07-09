#include <bits/stdc++.h>
using namespace std;

class Node {
public:
    int data;
    Node* left;
    Node* right;
    Node* parent;

    Node(int val) {
        data = val;
        left = right = parent = nullptr;
    }
};

// Insert into BST and maintain parent pointers
Node* insert(Node* root, int target) {
    if (root == nullptr)
        return new Node(target);

    if (target < root->data) {
        Node* child = insert(root->left, target);
        root->left = child;
        child->parent = root;
    }
    else {
        Node* child = insert(root->right, target);
        root->right = child;
        child->parent = root;
    }

    return root;
}

// Find a node in BST
Node* findNode(Node* root, int key) {
    if (!root)
        return nullptr;

    if (root->data == key)
        return root;

    if (key < root->data)
        return findNode(root->left, key);

    else {
        return findNode(root->right, key);
    }
}

// Preorder Successor
Node* FindSuccessor(Node* node) {
    if (!node)
        return nullptr;

    // Case 1
    if (node->left)
        return node->left;

    // Case 2
    if (node->right)
        return node->right;

    // Case 3 & 4
    Node* curr = node;
    Node* parent = node->parent;

    while (parent) {
        if (curr == parent->left && parent->right)
            return parent->right;

        curr = parent;
        parent = parent->parent;
    }

    // Case 5
    return nullptr;
}

// Inorder (just for visualization)
void inorder(Node* root) {
    if (!root)
        return;

    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}

int main() {

    Node* root = nullptr;

    cout << "Enter BST values (-1 to stop): ";

    while (true) {
        int val;
        cin >> val;

        if (val == -1)
            break;

        root = insert(root, val);
    }

    cout << "\nInorder Traversal: ";
    inorder(root);

    cout << "\n\nEnter node whose preorder successor you want: ";

    int key;
    cin >> key;

    Node* node = findNode(root, key);

    if (!node) {
        cout << "Node not found\n";
        return 0;
    }

    Node* succ = FindSuccessor(node);

    if (succ)
        cout << "Preorder Successor = " << succ->data << endl;
    else
        cout << "No Successor\n";

    return 0;
}