#include<bits/stdc++.h>
using namespace std;

int main(){
        int n =5;
        // char c = 'a';
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                cout << "*";
            }
            cout << endl;
        }
    
        for (int i = 0; i <= n; i++) {
            for (int j =0 ; j <= i; j++) {
                    // cout<<(char)( j + c);
                    cout<<"*";
                }
                cout << endl;
            }   

            cout<<endl;
            
        for(int i = 0;i<n;i++){
            for(int s = 0;s<i;s++){
                cout<<" ";
            }
            for(int j = 0;j<n-i;j++){
                cout<<"*";
            }
            cout<<endl;
        }
        for(int i =0;i<=n;i++){
            for (int s = 0; s<n-i; s++) {
                cout << " ";
            }
            for(int j = 0;j<i;j++){
                cout<<"*";
            }
            cout<<endl;
        }
            return 0;
}