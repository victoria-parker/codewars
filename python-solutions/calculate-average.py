#Calculate average
#DESCRIPTION:
# Write a function which calculates the average of the numbers in a given list.

# Note: Empty arrays should return 0.

# FUNDAMENTALSARRAYS

def find_average(numbers):
    return  0 if len(numbers) == 0 else sum(numbers)/len(numbers)