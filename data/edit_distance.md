# Edit Distance

Edit distance, also known as Levenshtein distance, is a measure of the difference between two strings. It is defined as the minimum number of operations required to transform one string into another. The operations allowed are insertion, deletion, and substitution of a single character.

Edit distance has applications in various fields such as natural language processing, bioinformatics, and computer science. It is used in spell-checking, DNA sequencing, and plagiarism detection, among others.

## Algorithm

The algorithm to compute edit distance is based on dynamic programming. The idea is to build a matrix where each cell represents the edit distance between two substrings of the input strings. The matrix is filled in a bottom-up manner, starting from the base case of empty substrings.

Let `s1` and `s2` be the input strings of length `m` and `n`, respectively. The matrix `D` of size `(m+1) x (n+1)` is initialized as follows:

$$
D_{i,0} = i \quad \text{for } i = 0, 1, \dots, m \\
D_{0,j} = j \quad \text{for } j = 0, 1, \dots, n \\
$$

The value of `D[i,j]` is computed as follows:

$$
D_{i,j} = \begin{cases}
D_{i-1,j-1} & \text{if } s1_i = s2_j \\
\min(D_{i-1,j}, D_{i,j-1}, D_{i-1,j-1}) + 1 & \text{otherwise}
\end{cases}
$$

The first case corresponds to the situation where the characters at positions `i` and `j` are the same, in which case no operation is needed. The second case corresponds to the situation where the characters are different, in which case the edit distance is the minimum of the edit distances obtained by deleting, inserting, or substituting a character.

The final value of `D[m,n]` is the edit distance between the two input strings.

## Variants

There are several variants of the edit distance algorithm that differ in the cost of the operations allowed. For example, the Damerau-Levenshtein distance allows transposition of adjacent characters as an additional operation. The Jaro-Winkler distance is a variant that takes into account the similarity of the characters being compared.

## Further Readings

- Levenshtein distance
- Needleman-Wunsch algorithm
- Smith-Waterman algorithm
