# Part 1a
1. 20
2. 20
3. Error, the let result was already declared
4. Error, The let was declared in the if statement, thus it does not exist outside of it. 
5. 0
6. Error, outside the scope of the if statement
# Part 1b
1. print out 3, at the end of the for loop, i is equal to prices.length, which is 3
2. print out 150, Although it was declared in the for loop, it is a var, thus it is always in scope
3. print out 150, this is the last price pushed to discounted from the for loop
4. return [50, 100, 150]. This is the new discounted prices calculated from the for loop at link 16.
5. cause an error since i is outside the scope of the for loop
6. error, discountedPrice outside of the scope
7. 150, thus is the last price pushed to discounted from the for loop
8. return [50, 100, 150]. discounted is still in the scope, and they come from the values from the for loop. 
9. error, i is outside the scope of the for loop
10. 3, this is the value assigned to length at line 4
11. error, discounted was already declared
12. -
A) student.name
B) student["Grad Year"]
C) student.greeting()
D) student["Favorite Teacher"]["name"]
E) student.courseLoad[0]
13. 
A)32, since integers map to their exact string representation
B) 1, when subtracting, integers compute simple arithmetic. aka same as 3-2
C) 3, it remains 3 since null has no value
D) 3null, since 3 is a string, we concatonate both null and 3
E) 4, true is assigned to value of 1
F) 0, false is assigned to 0 and null has no value
G) 3undefined, we concatonate the strings since 3 is a string
H) NaN, we cannot subtract something without a defined value
14. -
A) true, The string 2 has a higher ascii value
B) false, we compare 1 and 2 first, since 2>1, the statement is false
C) true, 2 and '2' have the same values
D) false, 2 and '2' are not the same types
E) false, true has a value of 1
F) true, Boolean(2) returns true, and true is equivalent to true, and they have the same type
15. == only checks the values, while === checks the values and types
17. Return [2,4,6], The callback funtion allows the doSomething function to run on each Number in order. So before doSomething(array[1]) is ran, doSomething(array[0]) must be ran first
19. 1432
