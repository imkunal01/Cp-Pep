#include <bits/stdc++.h>
using namespace std;

void reverseArray(std::vector<int> &arr) {
        if (arr.empty()) return;

        int left = 0;
        int right = static_cast<int>(arr.size()) - 1;

        while (left < right) {
            // Swap the elements at the left and right indices
            // int temp = arr[left];
            // arr[left] = arr[right];
            // arr[right] = temp;

            swap(arr[left],arr[right]);

            // Move the pointers towards the center
            left++;
            right--;
        }
    }
int main() {
    vector<int> v = {1,2,3,4,5};

    reverseArray(v);

    for (int x : v) {
        cout << x << " ";
    }
    cout << "\n";
    return 0;
}