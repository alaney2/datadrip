# Longest Common Subsequence

In computer science, the **Longest Common Subsequence (LCS)** is a problem that involves finding the longest subsequence that is common to two or more sequences. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements. The LCS problem is a classic example of dynamic programming and is widely used in various applications such as bioinformatics, text comparison, and version control systems.

## Problem Statement

Given two sequences `X` and `Y`, the LCS problem involves finding the longest subsequence that is common to both `X` and `Y`. For example, consider the following two sequences:

```
X: ABCBDAB
Y: BDCABA
```

The LCS of `X` and `Y` is `BCBA` with a length of 4. Note that there can be multiple LCS for a given pair of sequences.

## Dynamic Programming Solution

The LCS problem can be solved using dynamic programming. The basic idea is to build a table `L` of size `(m+1) x (n+1)` where `m` and `n` are the lengths of the sequences `X` and `Y`, respectively. The entry `L[i][j]` of the table represents the length of the LCS of the first `i` elements of `X` and the first `j` elements of `Y`. The table can be filled in a bottom-up manner using the following recurrence relation:

$$
L[i][j] = \begin{cases}
0 & \text{if } i=0 \text{ or } j=0 \\
L[i-1][j-1]+1 & \text{if } X[i]=Y[j] \\
\max(L[i-1][j], L[i][j-1]) & \text{if } X[i]\neq Y[j]
\end{cases}
$$

The first case represents the base case where one of the sequences is empty. The second case represents the case where the last elements of both sequences match, in which case we add 1 to the LCS of the remaining sequences. The third case represents the case where the last elements of both sequences do not match, in which case we take the maximum of the LCS of the remaining sequences.

Once the table is filled, the LCS can be obtained by backtracking from the bottom-right corner of the table. Starting from `L[m][n]`, if `X[i]=Y[j]`, then the current element is part of the LCS and we move diagonally to `L[i-1][j-1]`. Otherwise, we move to the left if `L[i-1][j] > L[i][j-1]` or to the top otherwise.

The time complexity of the dynamic programming solution is `O(mn)` and the space complexity is `O(mn)`.

## Applications

The LCS problem has various applications in computer science and related fields. Some of the notable applications are:

- **Bioinformatics**: The LCS problem is used in DNA sequencing to find the similarity between two DNA sequences. The LCS of two DNA sequences represents the longest common subsequence of nucleotides that are present in both sequences.
- **Text Comparison**: The LCS problem is used in text comparison to find the difference between two texts. The LCS of two texts represents the longest common subsequence of words or characters that are present in both texts.
- **Version Control Systems**: The LCS problem is used in version control systems such as Git to find the difference between two versions of a file. The LCS of two versions represents the longest common subsequence of lines that are present in both versions.

## Further Readings

- [Edit Distance](edit_distance): Another classic dynamic programming problem that involves finding the minimum number of operations required to transform one sequence into another.
- [Suffix Trees](suffix_trees): A data structure that can be used to solve the LCS problem in linear time.
- [Suffix Arrays](suffix_arrays): Another data structure that can be used to solve the LCS problem in linear time.
