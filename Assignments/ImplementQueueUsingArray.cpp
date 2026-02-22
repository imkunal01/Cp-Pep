// Problem: Implement Queue using Array
// Date: February 12, 2026

#include <bits/stdc++.h>
using namespace std;

class Queue {
    int* arr;
    int front, rear;
    int capacity;
    
public:
    Queue(int size) {
        capacity = size;
        arr = new int[capacity];
        front = rear = -1;
    }
    
    void enqueue(int x) {
        if (isFull()) return;
        if (isEmpty()) front = 0;
        arr[++rear] = x;
    }
    
    int dequeue() {
        if (isEmpty()) return -1;
        int val = arr[front];
        if (front == rear) front = rear = -1;
        else front++;
        return val;
    }
    
    int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    
    bool isEmpty() {
        return front == -1;
    }
    
    bool isFull() {
        return rear == capacity - 1;
    }
};

int main() {
    // Test cases
    return 0;
}
