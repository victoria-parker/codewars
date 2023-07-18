#Fake Binary

# Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

# Note: input will never be an empty string

# FUNDAMENTALSSTRINGSARRAYS

def fake_bin(x):
    nums=list()
    for num in x:
        if int(num) < 5:
            nums.append('0')
        else:
            nums.append('1')
    return ''.join(nums)