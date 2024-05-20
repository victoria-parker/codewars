# Backspaces in string

# DESCRIPTION:
# Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

# Your task is to process a string with "#" symbols.


def clean_string(s):
    lst = [*s]
    acc = []
    for char in lst:
        if char != '#':
            acc.append(char)
        else:
            if len(acc) > 0:
                acc.pop()    
    return ''.join(acc)


print(clean_string("abc#d##c"))      #==>  "ac"
print(clean_string("abc##d######"))  #==>  ""
print(clean_string("#######"))       #==>  ""
print(clean_string(""))              #==>  ""