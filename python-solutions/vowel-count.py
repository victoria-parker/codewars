#Vowel Count
# DESCRIPTION:
# Return the number (count) of vowels in the given string.

# We will consider a, e, i, o, u as vowels for this Kata (but not y).

# The input string will only consist of lower case letters and/or spaces.

# STRINGSFUNDAMENTALS

def get_count(sentence):
    chars = [*sentence]
    vowel_counter=0
    for char in chars:
        if(char in ['a','e','i','o','u']):
            vowel_counter+=1
    return vowel_counter