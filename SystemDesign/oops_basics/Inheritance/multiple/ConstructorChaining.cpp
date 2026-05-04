#include <bits/stdc++.h>
using namespace std;
class A {
public:
    A() {
        cout << "A constructor" << endl;
    }
};

class B : public A {
public:
    B() {
        cout << "B constructor" << endl;
    }
};

class C : public B {
public:
    C() {
        cout << "C constructor" << endl;
    }
};

int main() {
    C obj;
    return 0;
}































