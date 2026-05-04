#include <bits/stdc++.h>
using namespace std;

// use dynamic array instead of vector to avoid TLE in large test cases
class MyStack{
    public:
    
    int *v;
    int topidx;

    
    MyStack(){
        topidx = -1;
        v = new int[100000]; 

    }

    void push(int x){
        v[++topidx]= x;
    }

    void pop(){
        if(topidx>=0){
            topidx--;
        }
    }

    int top(){
        return v[topidx];
    }

    bool isEmpty(){
        return topidx == -1;
    }

};
int main() {
    MyStack stack;
    stack.push(10);
    stack.push(20);
    stack.push(30);
    cout << "Top element: " << stack.top() << endl;
    while(!stack.isEmpty()){
        cout << stack.top() << " ";
        stack.pop();
    }
    cout << endl;
    return 0;
}
