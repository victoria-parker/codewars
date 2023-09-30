# Help Suzuki count his vegetables....

# DESCRIPTION:
# Help Suzuki count his vegetables....

# Suzuki is the master monk of his monastery so it is up to him to ensure the kitchen is operating at full capacity to feed his students and the villagers that come for lunch on a daily basis.

# This week there was a problem with his deliveries and all the vegetables became mixed up. There are two important aspects of cooking in his kitchen, it must be done in harmony and nothing can be wasted. Since the monks are a record keeping people the first order of business is to sort the mixed up vegetables and then count them to ensure there is enough to feed all the students and villagers.

# You will be given a string with the following vegetables:

# "cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"
# Return a list of objects (tuple in Python, array in JavaScript, table in COBOL) with the count of each vegetable in descending order. If there are any non vegetables mixed in discard them. If the count of two vegetables is the same sort in reverse alphabetical order (Z->A).

# (119, "pepper"),
# (114, "carrot"),
# (113, "turnip"),
# (102, "onion"),
# (101, "tofu"),
# (100, "cabbage"),
# (93, "mushroom"),
# (90, "cucumber"),
# (88, "potato"),
# (80, "celery")

def count_vegetables(string):
    vegetables_list =string.split()
    
    vegetables_count = {}
    
    for item in vegetables_list:
        if item not in ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"]:
            continue
        vegetables_count[item] = vegetables_count.get(item,0) + 1
    
    items=[(t[1], t[0]) for t in vegetables_count.items()]
    
    return sorted(items,key=lambda x: (x[0],x[1]), reverse=True)