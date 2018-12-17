largest = -1

for i in [2,5,1,234,5345,34,54,6,51231231231231234,56,7]:
    if i > largest:
        res = i
        largest = i

print(largest)