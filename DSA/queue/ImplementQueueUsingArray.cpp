// Problem: Implement Queue using Array
// Date: February 12, 2026

#include <bits/stdc++.h>
using namespace std;

class Queue {
    int* arr;
    int front, rear;
    int capacity;
    
public:
    // TODO: Implement solution
    Queue(int size) {
        capacity = size;
        arr = new int[capacity];
        front = rear = -1;
    }
    
    void enqueue(int x) {
    }
    
    int dequeue() {
        return -1;
    }
    
    int getFront() {
        return -1;
    }
    
    bool isEmpty() {
        return true;
    }
    
    bool isFull() {
        return false;
    }
};

int main() {
    // Test cases
    return 0;
}
