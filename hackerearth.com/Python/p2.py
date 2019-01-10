argument = input()

arr = list(argument)

def f(x):
    return {
         'C':'G',
         'G':'C',
         'T':'A',
         'A':'U'
    }.get(x, "Invalid Input") 

n_list = list()

for i in arr:
    if i is 'C' or 'G' or 'T' or 'A':
        n_list = n_list.append(f(i))
    else:
        print("Invalid Input")

print(n_list)
# print(f(argument))
