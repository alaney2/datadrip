# Maximum Subarray Problem

The Maximum Subarray Problem is a classic problem in computer science and is used in various applications, including finance, image processing, and data analysis. The problem is to find the contiguous subarray within an array of integers that has the largest sum. 

## Problem Statement

Given an array of integers, the problem is to find the contiguous subarray that has the largest sum. Formally, given an array $A$ of $n$ integers, the problem is to find indices $i$ and $j$ such that $i \leq j$ and the sum of the subarray $A[i:j]$ is maximum among all subarrays of $A$. 

## Approaches

### Brute Force

The brute force approach is to consider all possible subarrays and compute their sum. The subarray with the largest sum is the maximum subarray. The time complexity of this approach is $O(n^3)$.

### Divide and Conquer

The divide and conquer approach is to divide the array into two halves and recursively find the maximum subarray in each half. The maximum subarray can either be entirely in the left half, entirely in the right half, or crossing the midpoint. The time complexity of this approach is $O(n \log n)$.

### Dynamic Programming

The dynamic programming approach is to compute the maximum subarray ending at each index of the array. The maximum subarray ending at index $i$ is either the element at index $i$ or the sum of the maximum subarray ending at index $i-1$ and the element at index $i$. The maximum subarray among all indices is the maximum subarray of the entire array. The time complexity of this approach is $O(n)$.

### Kadane's Algorithm

Kadane's algorithm is a variation of the dynamic programming approach that only uses constant space. The algorithm computes the maximum subarray ending at each index of the array and keeps track of the maximum subarray seen so far. The time complexity of this algorithm is $O(n)$.

## Further Readings

- Kadane's Algorithm
- Linear Time Algorithm
