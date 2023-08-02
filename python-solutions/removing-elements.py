# Removing Elements
# DESCRIPTION:
# Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

# Example:
# ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

# None of the arrays will be empty, so you don't have to worry about that!

# LISTSARRAYSFUNDAMENTALS

def remove_every_other(my_list):
    acc=list()
    for x in range(len(my_list)):
        if(x % 2 == 0):
            acc.append(my_list[x])
    return acc