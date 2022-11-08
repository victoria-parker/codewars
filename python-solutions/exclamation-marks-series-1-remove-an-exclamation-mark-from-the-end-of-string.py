""" Exclamation marks series #1: Remove an exclamation mark from the end of string
DESCRIPTION:
Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"
FUNDAMENTALS STRINGS
"""

def remove(s):
    if s.endswith('!'):
        return s[:-1]
    else:
        return s