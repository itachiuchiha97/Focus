# 5.2 Write a program that repeatedly prompts a user 
# for integer numbers until the user enters 'done'.
#  Once 'done' is entered, 
#  print out the largest and smallest of the numbers.
#  If the user enters anything other than a valid number 
#  catch it with a try/except and put out an appropriate message 
#  and ignore the number. 
#  Enter 7, 2, bob, 10, and 4 and match the output below.

largest = float('-inf')  
smallest = float('inf')

while True:

    inum = input('Enter a number')

    try:
        num = int(inum)
    except:
        print('Invalid input')

    if inum == 'done':
        break
    
    if num > largest:
        largest = num
    
    if num < smallest:
        smallest = num

print(largest,smallest)
    
    
          