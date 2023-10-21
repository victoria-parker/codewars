#Anagram Detection
# DESCRIPTION:
# An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

# Note: anagrams are case insensitive

# Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

# Examples
# "foefet" is an anagram of "toffee"

# "Buckethead" is an anagram of "DeathCubeK"

# STRINGSFUNDAMENTALS

# write the function is_anagram
def is_anagram(test, original):
    
    if len(test) != len(original):
        return False
    
    l_test = sorted([l for l in test.lower()])
    l_original = sorted([l for l in original.lower()])
    print(l_test)
    print(l_original)
    
    if ''.join(l_test) == ''.join(l_original):
        return True
    else:
        return False
    