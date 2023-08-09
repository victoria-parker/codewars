# Remove duplicates from list

# DESCRIPTION:
# Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

# The order of the sequence has to stay the same.

# FUNDAMENTALS ARRAYS LISTS

def distinct(seq):
    acc=[]
    for num in seq:
        if num not in acc:
            acc.append(num)
    return acc