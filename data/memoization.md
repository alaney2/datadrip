# Memoization

Memoization is a technique used in computer science to speed up the execution time of programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. This technique is used in dynamic programming to avoid redundant computations.

## How it Works

Memoization works by storing the result of a function call in a cache, usually a dictionary, with the input arguments as the key. When the function is called again with the same input arguments, the cached result is returned instead of recomputing the function. This can significantly reduce the execution time of the program, especially for functions with expensive computations.

## Advantages and Disadvantages

The main advantage of memoization is that it can significantly reduce the execution time of programs by avoiding redundant computations. This is especially useful for functions with expensive computations or functions that are called frequently with the same input arguments.

However, memoization can also have some disadvantages. The cache can consume a lot of memory, especially if the function has a large number of possible input arguments. Additionally, if the function has side effects, such as modifying global variables or performing I/O operations, memoization can cause unexpected behavior.

## Example

Consider the following recursive function to calculate the nth Fibonacci number:

```python
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)
```

This function has an exponential time complexity, as it recursively computes the same values multiple times. However, we can use memoization to avoid redundant computations and reduce the time complexity to linear:

```python
cache = {}

def fibonacci(n):
    if n in cache:
        return cache[n]
    elif n <= 1:
        return n
    else:
        result = fibonacci(n-1) + fibonacci(n-2)
        cache[n] = result
        return result
```

In this version of the function, we use a cache to store the results of previous function calls. If the result for a given input argument is already in the cache, we return the cached result instead of recomputing the function. Otherwise, we compute the result and store it in the cache for future use.

## Conclusion

Memoization is a powerful technique for reducing the execution time of programs by avoiding redundant computations. It is commonly used in dynamic programming to solve optimization problems. However, it is important to be aware of the potential disadvantages of memoization, such as increased memory usage and unexpected behavior for functions with side effects.
