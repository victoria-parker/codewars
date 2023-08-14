#Printing Array elements with Comma delimiters

# DESCRIPTION:
# Input: Array of elements

# ["h","o","l","a"]

# Output: String with comma delimited elements of the array in th same order.

# "h,o,l,a"

# Note: if this seems too simple for you try the next level

# ARRAYSFUNDAMENTALS

def print_array(arr):
    acc=[]
    for ele in arr:
        acc.append(str(ele))
    return ','.join(acc)    