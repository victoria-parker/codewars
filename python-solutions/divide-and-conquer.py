# Divide and Conquer
# DESCRIPTION:
# Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

# Return as a number.

# FUNDAMENTALSSTRINGSARRAYS

def div_con(x):
    return sum(num if type(num) == int else -int(num) for num in x)