def isAnagram(first, second):
    if (type(first) is not str or type(second) is not str or len(first) != len(second))) {
        return False
    }

    firstWordLetterMap = makeLetterMap(first)
    secondWordLetterMap = makeLetterMap(second)
    boolArr #instantiate an array whose length is the same as the number of keys in firstWordLetterMap
    for (key in firstWordLetterMap) {
        boolArr.push(secondWordLetterMap[key] == firstWordLetterMap[key])
    }
        
    return # True iff every element of boolArr is True

def makeLetterMap(word):
    # make an object/map/dictionary where each key is one character from "word" and the value is the count of that character
    # increment the count each time the character is found again
    charMap = dict()

    for char in word:
        if charMap[char] is not null

