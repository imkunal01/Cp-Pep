#include <bits/stdc++.h>
using namespace std;
int main() {
    
    vector<int>num1 = {1,2,3,4,5};
    vector<int>num2 = {6,7,8,8,9,10};

    int n =num1.size();
    int m =num2.size();

    int i=m-1;
    int j = n-1;

    int k = m+n;

    while(i>=0 && j>=0 ){
        if(num1[i]>num2[j]){
            num1[k--] = num1[i--];
        }
        else{
            num1[k--] = num2[j--];
        }
    }
    while(j>=0){
        num1[k--] = num2[j--];
    }

    for(int i : num2){
        cout<<i<<" ";
    }


    return 0;
}