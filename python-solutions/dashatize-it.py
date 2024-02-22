# Dashatize it
# DESCRIPTION:
# Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

# Ex:

# 274 -> '2-7-4'
# 6815 -> '68-1-5'
# STRINGSARRAYSREGULAR EXPRESSIONSFUNDAMENTALS

def dashatize(n):
    nums=[*str(n).strip('-')]
    answer=nums.pop(0)
    for num in nums:
        last_char=answer[len(answer)-1]
        if int(last_char) % 2 == 0 and int(num) % 2 == 0:
            answer+=num
        else:
            answer+='-'+num
    return answer