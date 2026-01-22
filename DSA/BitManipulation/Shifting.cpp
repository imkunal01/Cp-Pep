#include<bits/stdc++.h>
using namespace std;
int main(){
    int n = 13;
    // right Shift
    int x = n >>2;
    cout<<x;
    
    int m = 13;
    // left Shift
    int y = m<<2;



}


// 0 0 0 0 
// 8 4 2 0
//  13's value in bamary 
// 1 1 0 1


//so shifting right means 
// adding zero at front 13 >> 1
// 1 1 0 1 is value of 13
// 0 1 1 0 :- u can see last bit was 1 but now it is removed
// but under the hood its a divition formula that taking place 
// n >> k = n % 2^k (floor divison)


//so shifting left means
// adding zeroes in the end that makes number large Shifting left moves each bit to a higher power of 2.
// 1 1 0 1 is value of 13
// 1 1 0 1 0 :- u can see last bit 0 addded and made number large
// under the hood Every left shift multiplies the number by 2
// n<<k = n*2^k