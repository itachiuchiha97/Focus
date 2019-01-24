#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    string name = "Sahil";
    string random = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    cout << "Hello, you are doing good!" << endl;
    cout << "Keep it up " << name << endl;

    cout << "Length of name is = "<< name.length() << endl;
    cout << "Finding something = " << random.find("Ipsum",0)<<endl; //gives index

    cout << "Substring is = "<<random.substr(7,3)<< endl;



//Some things with integers

    int x=10;
    x +=80; // equi to (x = x+80)

    cout<<x<<endl;

    cout << pow(x,3) << endl;

//Input functions

    int umar;
    string wahwah;
    cin >> umar;
    cin.ignore();
    cout << "Your age is = " <<umar<<endl;

    //Badiya INPUT FUNCTION
    getline(cin,wahwah);

    cout << "Sonu di hogyi " << wahwah << endl;

    return 0;

}
