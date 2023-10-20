# Reverse words

# DESCRIPTION:
# Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

# Examples
# "This is an example!" ==> "sihT si na !elpmaxe"
# "double  spaces"      ==> "elbuod  secaps"
# STRINGSFUNDAMENTALS

import re

def reverse_words(text):
    lst=re.split(r'(\s)',text)
    reversed_w_l=[w[::-1] for w in lst]
    return ''.join(reversed_w_l)

