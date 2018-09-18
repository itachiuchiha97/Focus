whos // to show all variables with datatypes
a = [1 2 3; 3 2 1; 9 1 2]; //to define a matrix
a(2,3) // returns second row third column element
a(4) // this will return 2 of first row second column because indexing works top to bottom starting from left 
2:3:13 // start:step:end
a(2,1:3) // second row , 2to3 column
a(3,:) // third row all column
a*b //matrix multiplications
a.ˆ2 // operating on each n every element individually
inv(a) // to get inverse
a'  '// transpose
flipud(a) // flips about centre
fliplr(a) // 
rot(90) // rotates to 90degress all elements
reshape(x,2,6) // suppose x is 4x3 matrix then change it to 2x6. Not num of elements should remain same
zeros(4) // creates a zero matrix of 4x4
zeros(1,3,2) // creates a multidimensional array with all pnc
plot(x,sin(x)) // x vs y
