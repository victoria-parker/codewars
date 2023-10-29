# Most digits
# DESCRIPTION:
# Find the number with the most digits.

# If two numbers in the argument array have the same number of digits, return the first one in the array.

# STRINGSFUNDAMENTALS

def find_longest(arr):
    longest=arr[0]
    for num in arr:
        if len(str(num)) > len(str(longest)):
            longest = num
    return longest