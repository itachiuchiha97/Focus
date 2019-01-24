#include <iostream>

using namespace std;

int main()
{

    string name = " Sahil ";
    cout << &name <<endl;

    int age = 21;
    cout << &age << endl;

    string *pName = &name;

    cout << pName << endl;

    cout << *pName; // this is called deref of pointer
        return 0;
}
