#include <iostream>

using namespace std;

class BloodGroup {

    private:
       string bGroup;  
    public:
        string name;
        int age;
    

    BloodGroup(){

        name = "Please Enter Name";
        age = -1;
        bGroup = "Please Enter Blood Group";

    }


    BloodGroup(string Aname, int Aage, string AbGroup){

        name = Aname;
        age = Aage;
        // bGroup = AbGroup;
        set_bGroup(AbGroup);

        }

    
    string set_bGroup(string tet){
        if(tet=="A+"||tet=="B+"||tet=="AB+"||tet=="O+"||tet=="A-"||tet=="B-"||tet=="AB-"||tet=="O-"){
            bGroup = tet;   
            }
        else
        {
           bGroup = "Undefined"; 
        } 
    }

    string getBgroup(){
        return bGroup;
    }

};

int main()
{
    BloodGroup p1("Sahil",21,"Ojhbjh+");  
   // p1.set_bGroup("AB+");
    cout << p1.getBgroup() << endl;
    return 0;
}
