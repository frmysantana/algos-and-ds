/**
 * https://www.codewars.com/kata/54dc6f5a224c26032800005c
 * 
 * A bookseller has lots of books classified in 26 categories labeled A, B, C, ..., Z. 
 * Each book has a code of at least 3 characters. The 1st character of a code is a 
 * capital letter which defines the book category.
 * 
 * In the bookseller's stocklist each code is followed by a space and by a positive integer, 
 * which indicates the quantity of books of this code in stock.
 * 
 * Task
 * You will receive the bookseller's stocklist and a list of categories. Your task is to 
 * find the total number of books in the bookseller's stocklist, with the category codes in 
 * the list of categories. Note: the codes are in the same order in both lists.
 * 
 * Return the result as a string described in the example below.
 * 
 * If any of the input lists is empty, return an empty string.
 * 
 * Example
 * # the bookseller's stocklist:
 * "ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"
 * 
 * # list of categories: 
 * "A", "B", "C", "W"
 * 
 * # result:
 * "(A : 20) - (B : 114) - (C : 50) - (W : 0)"
 * Explanation:
 * 
 * category A: 20 books (ABART)
 * category B: 114 books = 25 (BKWRK) + 89 (BTSQZ)
 * category C: 50 books (CDXEF)
 * category W: 0 books
 */

function stockList(books, categories) {
    /*
      1. turn the bookseller stocklist into a map where each key is the unique category letter of each code and the value is the stock for that category
      2. loop through categories list and take the value from the stocklist map - if it doesn't, put a zero
      3. format it correctly for the expected output
      
      time: O(n) where n is the length of the larger array, either books or categories
      space: O(m) where m is the length of the books array
    */
    if (books.length == 0 || categories.length == 0) {
      return ''
    }

    const booksMap = books.reduce((acc, curr) => {
        const [code, count] = curr.split(' ')
        if (acc[code[0]]) {
          acc[code[0]] += +count
        } else {
          acc[code[0]] = +count
        }
      
      return acc
      }, {})

    let res = '';
    const catLength = categories.length;
    categories.forEach((cat, ind) => {
      if (booksMap[cat]) {
        res += `(${cat} : ${booksMap[cat]})`
      } else {
        res += `(${cat} : 0)`
      }
      
      if (ind != catLength - 1) {
        res += ' - '
      }
    })

    return res;
}