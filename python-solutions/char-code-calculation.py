# Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

# 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
# Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

# total1 = 656667
#               ^
# total2 = 656661
#               ^
# Then return the difference between the sum of the digits in total1 and total2:

#   (6 + 5 + 6 + 6 + 6 + 7)
# - (6 + 5 + 6 + 6 + 6 + 1)
# -------------------------
#                        6

def calc(x):
    nums=[str(ord(char)) for char in x]
    total1=''.join(nums)
    total2=total1.replace('7','1')
    sum1=sum(int(val) for val in total1)
    sum2=sum(int(val) for val in total2)
    return sum1 - sum2