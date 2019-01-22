#include <iostream>

int main(){
    float i,j,sum,avg;

    std::cout<<"Enter number 1 and 2\n";
    
    std::cin>>i;
    std::cin>>j;

    sum = i + j;
    avg = (i+j)/2;

    std::cout<< "Sum is = "<< sum << " and Average is = "
    <<avg << "\n";
    //std::cout <<sum+8;

    return 0; 
}