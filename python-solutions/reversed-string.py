# Reversed Strings

# Complete the solution so that it reverses the string passed into it.

# 'world'  =>  'dlrow'
# 'word'   =>  'drow'
# STRINGSFUNDAMENTALS

def solution(string):
    lst = [l for l in string]
    lst.reverse()
    return ''.join(lst)
