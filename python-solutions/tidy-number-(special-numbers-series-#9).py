# Tidy Number (Special Numbers Series #9)

# DESCRIPTION:
# Definition
# A Tidy number is a number whose digits are in non-decreasing order.

# Task
# Given a number, Find if it is Tidy or not .

def tidyNumber(n):
    arr = [*str(n)]
    arr.sort()
    return arr == [*str(n)]