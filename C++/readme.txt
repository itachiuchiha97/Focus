g++ -o program_name whatever.cpp // to compile
./program_name // to run


endl // ends the line
cout // console out

//instruction executes line by line

char, string, int, double, bool

stringX.length()
stringX[0] // prints first character
stringX.find("whatever",0) // 0 for starting
stringX.substr(startIndex, endIndex)

x +=80; // equi to (x = x+80)

#include <cmath> // maths functions
pow,sqrt,floor,ceil,fmax,fmin

// TO INPUT FULL LINES
getline(cin, string-names)
cin.ignore(); // use this if theres cin etc

//functions definition to be done above main?   BECAUSE IT NEEDS TO BE DECLARED FIRST LIKE EVERY VARIABLE DAMMIT
//for loop is same

//2D arrays
int 2dArr[rows][columns];
2dArr = { 
    {1,2},{2,3}...  
}

//POINTERS : They are just memory addresses 
whenever a program is running it is storing info in ram
for ex 
double i = 10.00
int k = 200
#this above will get stored physically into the ram
consider it as values stored in a container;
no each of these containers have an address which uniquely identifies it
POINTER IS JSUT A MEM ADDRESS
now==> cout << &i // will give mem address of i //which IS A POINTER
 string name = " Sahil ";
    cout << &name <<endl;

    int age = 21;
    cout << &age << endl; // gives addreess

    string *pName = &name;

    cout << pName << endl;

    cout << *pName; // this is called deref of pointer  // gives Sahil as result


//CLASSES AND OBJECTS
    Since we have limited no of datatypes therefore not everything can be represented using them 
    for ex: A Mobile phone which has various specs can't be rep by a string or number 

Class is like defining a new datatype and
    It contains the blueprint of new custom datatype
Now using that datatype when we create something it's knwn as OBJECT

class Books {
    public:
        string name;
        string author;
        int pages;
};

void main()
{
    
    Books bk1;  //we're using a datatype of Books and creating a var(Called object) using same
    bk1.name = "Yayayay";
    bk1.author = "Sahil";
    bk1.pages = 100;
}


//CONSTRUCTORS ARE CALLED WHENEVER WE CREATE AN OBJECT
Works by defining a function inside Class definition

Good practice is to define default as ex:
Books() {
    name = "not defined";
    author = "not defined"
    pages = 0;
}

and one with CONSTRUCTORS

Books(string Aname, string Aauthor, int Apages){
    name = Aname;
    author = Aauthor;
    pages = Apages;
}


//ENDL FLUSHES THE WHOLE LINE INSTEAD US /n FOR SAME PURPOSES....


//USE GETTERS AND SETTERS TO AVOID NUISANCE
    make critical variable private in function definition
    create a set function to remove unwanted bakchodi's
    create a get function to display the result
