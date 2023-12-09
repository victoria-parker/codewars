# Longest vowel chain

# DESCRIPTION:
# The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

# Good luck!

# If you like substring Katas, please try:

# Non-even substrings

# Vowel-consonant lexicon

# STRINGSFUNDAMENTALS

def solve(s):
    
    counter={}
    current=''
    for char in [*s]:
        if char not in 'aeiou':
            if len(current) != 0:
                current = ''
            continue
        current+=char
        counter[current]=len(current)        
        
    return 0 if not counter else max(counter.values())