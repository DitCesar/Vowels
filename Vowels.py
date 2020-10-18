'''
vowels.py

'''
import numpy as np

def countVowlsCons(str):
    vowls = 0
    cons = 0
    str = list(str)
    arr = np.array(['a','e','i','o','u'])
    tmp = np.in1d(str, arr)
    for element in tmp:
        if element == True:
            vowls = vowls + 1
        else:
            cons = cons + 1
    print('Vowels: ', vowls)
    print('Consonants: ', cons)


if __name__ == "__main__":
    str = 'taco'
    countVowlsCons(str)