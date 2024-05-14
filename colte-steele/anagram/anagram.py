'''
    Anagram Challenge of Section 5, Video 4

    My attempt at translating my JavaScript solution for the challenge into Python.

    Problem:

    Given 2 strings, write a funciton to determine if the second string is an anagram of the first. An Anagram is a word, phrace, or name formed by rearranging the letters of another, such as "cinema", formed from "iceman". 

    First Attempt without going through the video.
    Time: O(n) where n is the length of one string #TODO - find complexities
    Space: O(n) where n is the length of one string

    @param {string} first 
    @param {string} second 
    @returns boolea
'''
def isAnagram(first, second):
    # I will assume the strings don't have whitespace or numbers in them.
    # type(arg) is essetially Python's `typeof arg`` from JavaScript
    if (type(first) is not str or type(second) is not str or len(first) != len(second)):
        return False

    firstWordLetterMap = makeLetterMap(first)
    secondWordLetterMap = makeLetterMap(second)
    boolArr = [] # initiate an empty list
    for key in firstWordLetterMap:
        # Because the list wasn't initialized to size of elements that it would need, this may have amortized time 
        boolArr.append(secondWordLetterMap.get(key) == firstWordLetterMap.get(key))

    return boolArr.count(True) == len(boolArr)

def makeLetterMap(word):
    charMap = {} # initiate an empty dictionary

    for char in word:
        # use .get method of dictionaries to get the value of a key, returning None is the key doesn't exist in the dictionary
        # if you try to just access the key with dict[key] syntax, it will throw a KeyError and stop the script
        if charMap.get(char) is None:
            charMap[char] = 1
        else:
            charMap[char] += 1

    return charMap

# Tests
print(isAnagram('', '')) # True
print(isAnagram('aaz', 'zza')) # False
print(isAnagram('anagram', 'nagaram')) # True
print(isAnagram('rat', 'car')) # False
print(isAnagram('awesome', 'awesom')) # False
print(isAnagram('qwerty', 'qeywrt')) # True
print(isAnagram('texttwisttime', 'timetwisttext')) # True
