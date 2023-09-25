# String repeat

# DESCRIPTION:
# Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

# Examples (input -> output)
# 6, "I"     -> "IIIIII"
# 5, "Hello" -> "HelloHelloHelloHelloHello"
# FUNDAMENTALSSTRINGS

def repeat_str(repeat, string):
    lst = []
    for n in range(repeat):
        lst.append(string)
    return ''.join(lst)