the_lst = [1, 'v', 2, 'p', 3, 'o', 4,5,6,7, 'yep', 9]
not_either = []
evens_lst = []
odds_lst = []

def hard_loops(x):
    for item in x:
        if item == str(x):
            not_either.append(item)
        else:
            odds_lst.append(item)
# else:
# not_either.appened(item)
print(odds_lst)
#print(list_of_evens)
print(not_either)

hard_loops(the_lst)