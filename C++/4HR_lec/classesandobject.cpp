#include <iostream>

using namespace std;

class Books {
    public:
        string name;
        string author;
        int pages;

        Books(string aName, string aAuthor,int aaPages){
                name = aName;
                author = aAuthor;
                pages = aaPages;  
        }

        string hardVSsoftbinding(){
            if(pages > 500){
                return "Hard";
            }
            else {
                return "Soft";
            }
         }
};

int main()
{
    
    // Books bk1;  //we're using a datatype of Books and creating a var(Called object) using same
    // bk1.name = "Yayayay";
    // bk1.author = "Sahil";
    // bk1.pages = 100;

    //CLEANER CODE USING CONSTRUCTORS

    Books bk1("Yayyaya","Sahil",123);
    cout << bk1.pages << endl;
    cout << bk1.hardVSsoftbinding();

        return 0;

}

