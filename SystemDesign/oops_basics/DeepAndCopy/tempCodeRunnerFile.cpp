#include <iostream>
using namespace std;

class Test {
public:
    int *p;

    Test(int val) {
        p = new int(val);
    }

    // Deep Copy
    Test(const Test &t) {
        p = new int(*(t.p));
    }
};

int main() {
    Test t1(10);
    Test t2 = t1;  // deep copy

    *t2.p = 50;

    cout << *t1.p;  // Output: 10
    cout << endl;
    cout << *t2.p;  // Output: 50
}