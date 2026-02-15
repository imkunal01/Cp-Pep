#include <bits/stdc++.h>
using namespace std;
int main() {
    vector<int> bits = {1,0,1,1};
    int n = bits.size();
    int decimalValue = 0;
    for(int i = 0; i < n; i++) {
        decimalValue = (decimalValue << 1) | bits[i];
        
    }
    cout << "Decimal Value: " << decimalValue << endl;
    
    return 0;
}