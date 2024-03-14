// JavaScript Math and Numbers - Exercises

/*
1. Write a JavaScript function to convert a number from one base to another.
Note : Both bases must be between 2 and 36.
*/

function convertBase(number, fromBase, toBase) {
    if (fromBase < 2 || fromBase > 36 || toBase < 2 || toBase > 36) {
        return "Both bases must be between 2 and 36";
    }

    // Convert the number to base 10 first
    var decimalValue = parseInt(number, fromBase);

    // Convert the decimal value to the desired base
    var result = decimalValue.toString(toBase);

    return result;
}
//console.log(convertBase("1010", 2, 10));  // Output: 10
//console.log(convertBase("A1", 16, 2));    // Output: 10100001

/*


2. Write a JavaScript function to convert a binary number to a decimal number.
*/
function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}
//console.log(binaryToDecimal("1010"));  // Output: 10
//console.log(binaryToDecimal("1101"));  // Output: 13

/*
3. Write a JavaScript function to convert a decimal number to a binary, hexadecimal or octal number.
*/
function decimalToBase(decimal, base) {
    if (base === 2) {
        return decimal.toString(2); // Binary
    } else if (base === 16) {
        return decimal.toString(16); // Hexadecimal
    } else if (base === 8) {
        return decimal.toString(8); // Octal
    } else {
        return "Base must be 2, 8, or 16";
    }
}

//console.log(decimalToBase(10, 2));    // Output: "1010" (binary)
//console.log(decimalToBase(13, 16));   // Output: "D" (hexadecimal)
//console.log(decimalToBase(15, 8));    // Output: "17" (octal)

/*
4. Write a JavaScript function to generate a random integer.
*/
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Example usage: generating a random integer between 1 and 100
//var randomNum = getRandomInt(1, 100);
//console.log(randomNum);

/*

5. Write a JavaScript function to format a number up to specified decimal places.


6. Write a JavaScript function to find the highest value in an array.
*/
function findHighestValue(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let highest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
    }
    return highest;
}
//console.log(findHighestValue([5, 9, 2, 11, 3]));  // Output: 11
//console.log(findHighestValue([]));               // Output: "Array is empty"

/*

7. Write a JavaScript function to find the lowest value in an array.
*/
function findLowestValue(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let lowest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }
    return lowest;
}
// console.log(findLowestValue([5, 9, 2, 11, 3]));  // Output: 2
// console.log(findLowestValue([]));               // Output: "Array is empty"

/*

8. Write a JavaScript function to get the greatest common divisor (GCD) of two integers.
Note :
According to Wikipedia - In mathematics, the greatest common divisor (gcd) of two or more integers, when at least one of them is not zero, is the largest positive integer that divides the numbers without a remainder. For example, the GCD of 8 and 12 is 4.


9. Write a JavaScript function to find the GCD (greatest common divisor) of more than 2 integers.


10. Write a JavaScript function to get the least common multiple (LCM) of two numbers.
Note :
According to Wikipedia - A common multiple is a number that is a multiple of two or more integers. The common multiples of 3 and 4 are 0, 12, 24, .... The least common multiple (LCM) of two numbers is the smallest number (not zero) that is a multiple of both.


11. Write a JavaScript function to get the least common multiple (LCM) of more than 2 integers.


12. Write a JavaScript function to find out if a number is a natural number or not.
Note :
Natural numbers are whole numbers from 1 upwards : 1, 2, 3, and so on ... or from 0 upwards in some area of mathematics: 0, 1, 2, 3 and so on ...
No negative numbers and no fractions.


13. Write a JavaScript function to test if a number is a power of 2.


14. Write a JavaScript function to round a number to decimal place.


15. Write a JavaScript function to check whether a value is an integer or not.
Note : Integer - A number which is not a fraction; a whole number.


16. Write a JavaScript function to check whether a variable is numerical or not.


17. Write a JavaScript function to calculate the sum of values in an array.
*/
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
//console.log(calculateSum([1, 2, 3, 4, 5]));  // Output: 15
//console.log(calculateSum([]));               // Output: 0

/*

18. Write a JavaScript function to calculate the product of values in an array.
*/
function calculateProduct(arr) {
    if (arr.length === 0) {
        return 0; // Product of an empty array is 0
    }

    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}
// console.log(calculateProduct([1, 2, 3, 4, 5]));  // Output: 120
// console.log(calculateProduct([]));               // Output: 0

/*

19. Create a Pythagorean function in JavaScript.
Note : The Pythagorean Theorem tells us that the relationship in every right triangle is : c2 = a2 + b2, where c is the hypotenuse and a, b are two legs of the triangle.


20. Write a JavaScript program to evaluate binomial coefficients.
Note :
Binomial coefficient : According to Wikipedia - In mathematics, binomial coefficients are a family of positive integers that occur as coefficients in the binomial theorem. They are indexed by two nonnegative integers; the binomial coefficient indexed by n and k. Under suitable circumstances the value of the coefficient is given by the expression :
binomial coefficients
Arranging binomial coefficients into rows for successive values of n, and in which k ranges from 0 to n, gives a triangular array called Pascal's triangle.



21. Write a JavaScript function that converts an integer into a Roman numeral.



22. Write a JavaScript function that converts Roman numerals to integers.
n

23. Write a JavaScript function to create a UUID identifier.
Note :
According to Wikipedia - A universally unique identifier (UUID) is an identifier standard used in software construction. A UUID is simply a 128-bit value. The meaning of each bit is defined by any of several variants. For human-readable display, many systems use a canonical format using hexadecimal text with inserted hyphen characters. For example : de305d54-75b4-431b-adb2-eb6b9e546014


24. Write a JavaScript function to round a number to a specified number of digits and strip extra zeros (if any).


25. Write a JavaScript function to do currency math (add, subtract, multiply, divide etc.).


26. Write a JavaScript function to calculate the nth root of a number.


27. Write a JavaScript function to calculate degrees between 2 points with the inverse Y axis.


28. Write a JavaScript function to round up an integer value to the next multiple of 5.


29. Write a JavaScript function to convert a positive number to a negative number.


30. Write a JavaScript function to cast the square root of a number to an integer.


31. Write a JavaScript function to get the highest number from three different numbers.


32. Write a JavaScript function to calculate the percentage (%) of a number.


33. Write a JavaScript function to convert an angle from degrees to radians.


34. Write a JavaScript function to convert radians to degrees.


35. Write a JavaScript function for the Pythagorean theorem.
According to Wikipedia : In mathematics, the Pythagorean theorem, also known as Pythagoras' theorem, is a relation in Euclidean geometry among the three sides of a right triangle. It states that the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides. The theorem can be written as an equation relating the lengths of the sides a, b and c, often called the "Pythagorean equation".


36. Write a JavaScript function to return powers of two values.


37. Write a JavaScript function to limit a value inside a certain range.
Note : If the value is higher than max it will return max. and if the value is smaller than min it will return the min.


38. Write a JavaScript function to check if a number is a whole number or has a decimal place.
Note : Whole Numbers are simply the numbers 0, 1, 2, 3, 4, 5, ... (and so on). No Fractions!


39. Write a JavaScript function to print an integer with thousands separated by commas.


40. Write a JavaScript function to create a random background color.


41. Write a JavaScript function to count integer digits.


42. Write a JavaScript function to calculate the combination of n and r.
The formula is : n!/(r!*(n - r)!).


43. Write a JavaScript function to get all prime numbers from 0 to a specified number.



44. Write a JavaScript function to show the first twenty Hamming numbers.
Hamming numbers are numbers with prime factors of 2, 3 and 5.


45. Write a JavaScript function to subtract elements from an array.


46. Write a JavaScript function to calculate the divisor and modulus of two integers.


47. Write a JavaScript function to calculate the extended Euclid Algorithm or extended GCD.
In mathematics, the Euclidean algorithm[a], or Euclid's algorithm, is an efficient method for computing the greatest common divisor (GCD) of two numbers, the largest number that divides both of them without leaving a remainder. It is named after the ancient Greek mathematician Euclid, who first described it in Euclid's Elements. It is an example of an algorithm, a step-by-step procedure for performing a calculation according to well-defined rules, and is one of the oldest algorithms in common use. It can be used to reduce fractions to their simplest form, and is a part of many other number-theoretic and cryptographic calculations.


48. Write a JavaScript function to calculate the falling factorial of a number.
Let x be a real number (but usually an integer).
Let k be a positive integer.
Then x to the (power of) k falling is :
kth falling factorial power of x
This is called the kth falling factorial power of x.


49. Write a JavaScript function to calculate the Lanczos approximation gamma.
In mathematics, the Lanczos approximation is a method for computing the Gamma function numerically, published by Cornelius Lanczos in 1964. It is a practical alternative to the more popular Stirling's approximation for calculating the Gamma function with fixed precision.


50. Write a JavaScript program to add two complex numbers.
A complex number is a number that can be expressed in the form a + bi, where a and b are real numbers and i is the imaginary unit, that satisfies the equation i2 = −1. In this expression, a is the real part and b is the imaginary part of the complex number.


51. Write a JavaScript program to subtract two complex numbers.


52. Write a JavaScript program to multiply two complex numbers.


53. Write a JavaScript program to divide two complex numbers.


54. Write a JavaScript program to check if a given number is a power of 10.


55. Write a JavaScript program to swap variables from one to another.
Swapping two variables refers to mutually exchanging the values of the variables. Generally, this is done with the data in memory.


56. Write a JavaScript program to calculate the volume of a Cuboid.
From Wikipedia -
In geometry, a cuboid is a hexahedron, a six-faced solid. Its faces are quadrilaterals. Cuboid means "like a cube", in the sense that by adjusting the length of the edges or the angles between edges and faces a cuboid can be transformed into a cube.


57. Write a JavaScript program to calculate the volume of a Cube.
From Wikipedia -
In geometry, a cube is a three-dimensional solid object bounded by six square faces, facets or sides, with three meeting at each vertex. The cube is the only regular hexahedron and is one of the five Platonic solids. It has 6 faces, 12 edges, and 8 vertices.


58. Write a JavaScript program to calculate the volume of a Cone.
From Wikipedia -
A cone is a three-dimensional geometric shape that tapers smoothly from a flat base (frequently, though not necessarily, circular) to a point called the apex or vertex.
A cone is formed by a set of line segments, half-lines, or lines connecting a common point, the apex, to all of the points on a base that is in a plane that does not contain the apex. Depending on the author, the base may be restricted to be a circle, any one-dimensional quadratic form in the plane, any closed one-dimensional figure, or any of the above plus all the enclosed points.


59. Write a JavaScript program to calculate the volume of a Pyramid.
In geometry, a pyramid is a polyhedron formed by connecting a polygonal base and a point, called the apex. Each base edge and apex form a triangle, called a lateral face. It is a conic solid with polygonal base. A pyramid with an n-sided base has n + 1 vertices, n + 1 faces, and 2n edges. All pyramids are self-dual.


60. Write a JavaScript program to calculate the volume of a Cylinder.
From Wikipedia -
A cylinder has traditionally been a three-dimensional solid, one of the most basic of curvilinear geometric shapes. In elementary geometry, it is considered a prism with a circle as its base.
A cylinder may also be defined as an infinite curvilinear surface in various modern branches of geometry and topology. The shift in the basic meaning - solid versus surface (as in ball and sphere) - has created some ambiguity with terminology. The two concepts may be distinguished by referring to solid cylinders and cylindrical surfaces. In the literature the unadorned term cylinder could refer to either of these or to an even more specialized object, the right circular cylinder.


61. Write a JavaScript program to calculate the volume of a Triangular Prism.
From Wikipedia -
In geometry, a triangular prism is a three-sided prism; it is a polyhedron made of a triangular base, a translated copy, and 3 faces joining corresponding sides. A right triangular prism has rectangular sides, otherwise it is oblique. A uniform triangular prism is a right triangular prism with equilateral bases, and square sides.


62. Write a JavaScript program to calculate the volume of a prism using only its height and one of its hexagonal sides.
In geometry, the pentagonal prism is a prism with a pentagonal base. It is a type of heptahedron with seven faces, fifteen edges, and ten vertices.


63. Write a JavaScript program to calculate the volume of a Sphere.
From Wikipedia -
A sphere is a geometrical object that is a three-dimensional analogue to a two-dimensional circle. A sphere is the set of points that are all at the same distance r from a given point in three-dimensional space.That given point is the centre of the sphere, and r is the sphere's radius. The earliest known mentions of spheres appear in the work of the ancient Greek mathematicians


64. Write a JavaScript program to calculate the volume of a Hemisphere.
Hemisphere refers to a half of a sphere:
A sphere is a geometrical object that is a three-dimensional analogue to a two-dimensional circle. A sphere is the set of points that are all at the same distance r from a given point in three-dimensional space.[2] That given point is the centre of the sphere, and r is the sphere's radius. The earliest known mentions of spheres appear in the work of the ancient Greek mathematicians.


65. Write a JavaScript program to get the Nth Lucas Number.
From Wikipedia-
The Lucas numbers or Lucas series are an integer sequence named after the mathematician Francois Edouard Anatole Lucas (1842-1891), who studied both that sequence and the closely related Fibonacci numbers. Lucas numbers and Fibonacci numbers form complementary instances of Lucas sequences.
The Lucas series has the same recursive relationship as the Fibonacci sequence, where each term is the sum of the two previous terms, but with different starting values. This produces a sequence where the ratios of successive terms approach the golden ratio, and in fact the terms themselves are roundings of integer powers of the golden ratio. The sequence also has a variety of relationships with the Fibonacci numbers, like the fact that adding any two Fibonacci numbers two terms apart in the Fibonacci sequence results in the Lucas number in between.


66. Write a JavaScript program to find the 'twin prime' of a given prime number.
From Wikipedia,
A twin prime is a prime number that is either 2 less or 2 more than another prime number-for example, either member of the twin prime pair (41, 43). In other words, a twin prime is a prime that has a prime gap of two. Sometimes the term twin prime is used for a pair of twin primes; an alternative name for this is prime twin or prime pair.
Usually the pair (2, 3) is not considered to be a pair of twin primes. Since 2 is the only even prime, this pair is the only pair of prime numbers that differ by one; thus twin primes are as closely spaced as possible for any other two primes.
The first few twin prime pairs are:
(3, 5), (5, 7), (11, 13), (17, 19), (29, 31), (41, 43), (59, 61), (71, 73), (101, 103), (107, 109), (137, 139), ....


67. Write a JavaScript program to calculate the sum of a geometric progression.
From Wikipedia,
In mathematics, a geometric series is the sum of an infinite number of terms that have a constant ratio between successive terms. For example, the series
JavaScript Math: Geometric Series.
is geometric, because each successive term can be obtained by multiplying the previous term by 1/2. In general, a geometric series is written as a + ar + ar2 + ar3 + ..., where a is the coefficient of each term and r is the common ratio between adjacent terms. The geometric series had an important role in the early development of calculus, is used throughout mathematics, and can serve as an introduction to frequently used mathematical tools such as the Taylor series, the complex Fourier series, and the matrix exponential.


68. Write a JavaScript program to calculate the sum of a given number's digits.
In mathematics, the digit sum of a natural number in a given number base is the sum of all its digits. For example, the digit sum of the decimal number 6098 would be 6+0+9+8=23.


69. Write a JavaScript program to find all prime numbers below a given number.
From Wikipedia -
In mathematics, the sieve of Eratosthenes is an ancient algorithm for finding all prime numbers up to any given limit. It does so by iteratively marking as composite (i.e., not prime) the multiples of each prime, starting with the first prime number, 2. The multiples of a given prime are generated as a sequence of numbers starting from that prime, with constant difference between them that is equal to that prime. This is the sieve's key distinction from using trial division to sequentially test each candidate number for divisibility by each prime. Once all the multiples of each discovered prime have been marked as composites, the remaining unmarked numbers are primes.


70. Write a JavaScript program to apply reverse Polish notation to a given mathematical expression.
From Wikipedia -
Reverse Polish notation (RPN), also known as reverse Lukasiewicz notation, Polish postfix notation or simply postfix notation, is a mathematical notation in which operators follow their operands, in contrast to Polish notation (PN), in which operators precede their operands. It does not need any parentheses as long as each operator has a fixed number of operands. The description "Polish" refers to the nationality of logician Jan Lukasiewicz, who invented Polish notation in 1924.


71. Write a JavaScript program to print all the prime factors of a given number.


72. Write a JavaScript program to check if a given number is pronic using the product of two consecutive numbers. If the number is pronic return true otherwise false.
From Wikipedia -
A pronic number is a number that is the product of two consecutive integers, that is, a number of the form n(n+1). The study of these numbers dates back to Aristotle. They are also called oblong numbers, heteromecic numbers, or rectangular numbers; however, the term "rectangular number" has also been applied to the composite numbers.
The first few pronic numbers are:
0, 2, 6, 12, 20, 30, 42, 56, 72, 90, 110, 132, 156, 182, 210, 240, 272, 306, 342, 380, 420, 462 ...


73. Write a JavaScript program to check if a given positive integer can be expressed as the sum of two or more consecutive positive integers.


74. Write a JavaScript program to convert a hexadecimal number to its binary equivalent (as a string).
From Wikipedia -
In mathematics and computing, the hexadecimal (also base-16 or simply hex) numeral system is a positional numeral system that represents numbers using a radix (base) of 16. Unlike the decimal system representing numbers using 10 symbols, hexadecimal uses 16 distinct symbols, most often the symbols "0"-"9" to represent values 0 to 9, and "A"-"F" (or alternatively "a"-"f") to represent values from 10 to 15.
A binary number is a number expressed in the base-2 numeral system or binary numeral system, a method of mathematical expression which uses only two symbols: typically "0" (zero) and "1" (one)


75. Write a JavaScript program to swap three numbers without a third variable.


76. Write a JavaScript program to subtract one integer from another, without using arithmetic operators such as -, %, /, +, etc.


77. Write a JavaScript program to compute the sum of two non-negative integers num1 and num2 represented by strings.


78. Write a JavaScript program that takes an integer n and returns the nth Tetrahedral number.
A tetrahedral number, or triangular pyramidal number, is a figurate number that represents a pyramid with a triangular base and three sides, called a tetrahedron. The formula for the nth tetrahedral number is represented by the 3rd rising factorial of n divided by the factorial of 3:
JavaScript Math: Nth Tetrahedral Number.
The tetrahedral numbers are:
1, 4, 10, 20, 35, 56, 84, 120, 165, 220, ...


79. Write a JavaScript program to get the number of dots based on the triangular number of the sequence.
From Wikipedia -
A triangular number or triangle number counts objects arranged in an equilateral triangle. Triangular numbers are a type of figurate number, other examples being square numbers and cube numbers. The nth triangular number is the number of dots in the triangular arrangement with n dots on each side, and is equal to the sum of the n natural numbers from 1 to n. The sequence of triangular numbers, starting with the 0th triangular number, is
0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190, 210, 231, 253, 276, 300, 325, 351, 378, 406, 435, 465, 496, 528, 561, 595, 630, 666...


80. Write a JavaScript program to check whether a given integer is a Repdigit or not.
From Wikipedia -
In recreational mathematics, a repdigit or sometimes monodigit is a natural number composed of repeated instances of the same digit in a positional number system (often implicitly decimal). The word is a portmanteau of repeated and digit. Examples are 11, 666, 4444, and 999999.


81. Write a JavaScript program to multiply every digit of a number three times.


82. Write a JavaScript program to calculate the mean of all the digits of a given number.
What is a Mean?
In mathematics, the mean represents the simple average of two or more numbers. There are several methods available for computing the mean of a set of numbers, including the arithmetic mean method, which uses the sum of the numbers in the series, and the geometric mean method, which is the average of a set of products.


83. Write a JavaScript program to find the missing number in a given array. There are no duplicates in the list.


84. Write a JavaScript program to calculate the sum of the two highest positive numbers in a given array.


85. Write a JavaScript program to compute the sum of the main diagonal elements of a square matrix.
In mathematics, a matrix (plural matrices) is a rectangular array or table of numbers, symbols, or expressions, arranged in rows and columns, which is used to represent a mathematical object or a property of such an object.
An m x n matrix: the m rows are horizontal and the n columns are vertical
JavaScript Math: Sum of the main diagonal elements of a square matrix.
In mathematics, a square matrix is a matrix with the same number of rows and columns. An n-by-n matrix is known as a square matrix of order n. Any two square matrices of the same order can be added and multiplied.


86. Write a JavaScript program to get the middle character(s) from a given string.


87. Write a JavaScript program that checks whether a number (positive integer) is a Sastry number or not.
The number N is a Sastry number when it is concatenated with N+1 and gives a perfect squares. Some Sastry numbers are 183, 328, 528, 715, 6099, 13224, 40495, 106755, 453288, 2066115, 2975208, 22145328, 28027683, 110213248...


88. Write a JavaScript program to check whether two vectors are orthogonal or not.
Two vectors are orthogonal if they are perpendicular to each other. i.e. the dot product of the two vectors is zero.
Let u and v are two vectors. The vectors u, v will be orthogonal if they are perpendicular, i.e., they form a right angle, or if the dot product they yield is zero.


89. Write a JavaScript program that takes three arguments x, y, n and calculates the sum of the numbers oddly divided by n from the range x, y inclusive.


90. Write a JavaScript program to check whether a number is a Harshad Number or not.
In recreational mathematics, a harshad number in a given number base, is an integer that is divisible by the sum of its digits when written in that base.


91. Write a JavaScript program to calculate the sum of all odd elements in a square matrix.


92. Write a Python program that takes a positive integer and calculates the cube root of the number until it is less than three. Return the number of steps to complete this process.


93. Write a JavaScript program to check if an array of integers has a downward trend or not.


94. Write a JavaScript program to calculate the sum and count of even and odd numbers in an array.


95. Write a JavaScript program that takes text and returns the last character of each word if it is even in length. It also returns the middle character if it is odd in length.


96. Write a JavaScript program that calculates the factorial of a number and returns the number of trailing zeroes.
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. The factorial of n also equals the product of n with the next smaller factorial:
n! = n x (n-1) x (n-2) x (n-3)x.....x 3 x 2 x 1
= n x (n-1)!
For example 4! = 4 x 3! = 4 x 3 x 2 x 1 =24
The value of 0! is 1, according to the convention for an empty product.

97. Write a JavaScript program to retrieve the Excel column title associated with a given column number (integer value).


98. Write a JavaScript program to get the column number (integer value) related to a column title as it appears in an Excel sheet.


99. Write a JavaScript program to add repeatedly all the digits of a given non-negative number until the result has only one digit.


100. Write a JavaScript program to check if a given number is ugly.


101. Write a JavaScript program to find the nth ugly number.


102. Write a JavaScript program to count the number of times the digit 1 appears in 1 to a given number.


103. Write a JavaScript program to calculate the product of non-negative integers n1 and n2 represented as strings. The product is also returned as a string.


104. A staircase consists of N steps, and you are given the choice of climbing one step at a time or two steps at a time.
Write a JavaScript program to find distinct ways to climb the staircase.


105. Write a JavaScript program that converts a non-negative integer number to its English representation.


106. Write a JavaScript program that accepts an integer (n) as input and calculates the lowest number of exact square numbers that sum to n.
In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 9 is a square number, since it equals 32 and can be written as 3 x 3.


107. Write a JavaScript program to check whether a given integer is a power of three or not.
In mathematics, a power of three is a number of the form 3n where n is an integer - that is, the result of exponentiation with number three as the base and integer n as the exponent.


108. Write a JavaScript program to check whether a given integer is a power of four or not.
In arithmetic and algebra, the fourth power of a number n is the result of multiplying four instances of n together. So: n4 = n x n x n x n
Fourth powers are also formed by multiplying a number by its cube. Furthermore, they are squares of squares.
The sequence of fourth powers of integers (also known as biquadrates or tesseractic numbers) is:
0, 1, 16, 81, 256, 625, 1296, 2401, 4096, 6561, 10000, 14641, 20736, 28561, 38416, 50625, 65536, 83521, 104976, 130321, 160000, 194481, 234256, 279841, 331776, 390625, 456976, 531441, 614656, 707281, 810000, ...


109. Write a JavaScript program that accepts a number (n) and counts all numbers with unique digits of length p within a specified range.
Range: 0 <= p < 10n


110. Write a JavaScript program to check whether the sum of two square integers is equal to another given integer.
For example a2 + b2 = c where c is the given integer.


111. Write a JavaScript program that creates a multiplication table of size m x n using integers where 1 <= k <= m * n. Return the kth smallest element in the said multiplication table.
In mathematics, a multiplication table is a mathematical table used to define a multiplication operation for an algebraic system.
The decimal multiplication table was traditionally taught as an essential part of elementary arithmetic around the world, as it lays the foundation for arithmetic operations with base-ten numbers. Many educators believe it is necessary to memorize the table up to 9 x 9.
The illustration below shows a table up to 12 x 12, which is a size commonly used nowadays in English-world schools.
x	0	1	2	3	4	5	6	7	8	9	10	11	12
0	0	0	0	0	0	0	0	0	0	0	0	0	0
1	0	1	2	3	4	5	6	7	8	9	10	11	12
2	0	2	4	6	8	10	12	14	16	18	20	22	24
3	0	3	6	9	12	15	18	21	24	27	30	33	36
4	0	4	8	12	16	20	24	28	32	36	40	44	48
5	0	5	10	15	20	25	30	35	40	45	50	55	60
6	0	6	12	18	24	30	36	42	48	54	60	66	72
7	0	7	14	21	28	35	42	49	56	63	70	77	84
8	0	8	16	24	32	40	48	56	64	72	80	88	96
9	0	9	18	27	36	45	54	63	72	81	90	99	108
10	0	10	20	30	40	50	60	70	80	90	100	110	120
11	0	11	22	33	44	55	66	77	88	99	110	121	132
12	0	12	24	36	48	60	72	84	96	108	120	132	144

112. Write a JavaScript program to calculate the maximum value by swapping two digits in a given integer.


113. Write a JavaScript program to calculate the smallest number whose digits multiply into a given number.


114. Write a JavaScript program that checks if a given number is self-dividing.
In mathematics, a self-dividing number is one that can be divided by every digit (except digit zero) within it.

*/
