#Square(n) Sum

#DESCRIPTION:
#Complete the square sum function so that it squares each number passed into it and then sums the results together.

def square_sum(numbers):
    sqrs = map(lambda num: num**2, numbers)
    list_sqrs = list(sqrs)
    return sum(list_sqrs)
