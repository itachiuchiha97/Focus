#include <iostream>

using namespace std;

void printhello(string name){
    cout<< "Heyy" << name;
}

int main()
{
    int arr[] = {1,2,3,4,5,6,7};
    
    cout<<arr[2]<<endl;

    arr[2] = 36;

    cout<<arr[2]<<endl;

    printhello(" Sahil");

    int ind = 0;

    while(ind < 6){
        cout << ind << endl;
        ind++;
    }

        return 0;
}
