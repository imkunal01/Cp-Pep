#include <bits/stdc++.h>
using namespace std;

// inheritance and access specifiers for class in C++
class A {
    private:
    int x;
    public:
    void setX(int val) {
        x = val;
    }
    int getX() {
        return x;
    }
};
int main() {
    A obj;
    obj.setX(10);
    cout << obj.getX() << endl;
    return 0;
}