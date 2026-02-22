// Problem: Implement Stack using Array
// Date: February 12, 2026

#include <bits/stdc++.h>
using namespace std;

class Stack {
    int* arr;
    int topIndex;
    int capacity;
    
public:
    Stack(int size) {
        capacity = size;
        arr = new int[capacity];
        topIndex = -1;
    }
    
    void push(int x) {
        if (!isFull()) {
            arr[++topIndex] = x;
        }
    }
    
    int pop() {
        if (isEmpty()) return -1;
        return arr[topIndex--];
    }
    
    int top() {
        if (isEmpty()) return -1;
        return arr[topIndex];
    }
    
    bool isEmpty() {
        return topIndex == -1;
    }
    
    bool isFull() {
        return topIndex == capacity - 1;
    }
};

int main() {
    // Test cases
    return 0;
}
