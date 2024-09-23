const value = 3
console.log(value + 4 + value)

/* 343 was logged initially because the value variable was pointing to a string. When we logged our value it concatenated rather than add 
 because strings aren't numbers and won't work for mathematical expressions. The addition operator joins strings together but doesn't add them 
even if there is a number between the quotes which is another reason why it did not work. */
