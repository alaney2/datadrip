# Factorial Moments

Factorial moments are a type of moments in probability theory and statistics that are used to describe the distribution of a random variable. They are closely related to the ordinary moments, but instead of raising the random variable to a power, the factorial moments involve the factorial of the random variable. Factorial moments can be useful in various applications, such as analyzing the distribution of counts in a sample or estimating the parameters of certain probability distributions.

## Definition

Given a discrete random variable $X$ with probability mass function $p(x)$, the $k$-th factorial moment of $X$ is defined as:


$$

E[X(X-1)(X-2)\cdots(X-k+1)] = \sum_{x=k}^{\infty} x(x-1)(x-2)\cdots(x-k+1)p(x)

$$


where $E[\cdot]$ denotes the expectation operator. The first factorial moment, $E[X]$, is simply the mean of the random variable $X$. The second factorial moment, $E[X(X-1)]$, is related to the variance of $X$.

Factorial moments can also be defined for continuous random variables with probability density function $f(x)$:


$$

E[X(X-1)(X-2)\cdots(X-k+1)] = \int_{-\infty}^{\infty} x(x-1)(x-2)\cdots(x-k+1)f(x) dx

$$


## Relationship with Ordinary Moments

Factorial moments are related to the ordinary moments of a random variable. The ordinary moments are defined as:


$$

E[X^k] = \sum_{x=0}^{\infty} x^k p(x)

$$


for discrete random variables, and


$$

E[X^k] = \int_{-\infty}^{\infty} x^k f(x) dx

$$


for continuous random variables. The relationship between the factorial moments and the ordinary moments can be expressed using the Stirling numbers of the second kind, denoted by $S(n, k)$. The Stirling numbers of the second kind are the number of ways to partition a set of $n$ elements into $k$ non-empty subsets. The relationship is given by:


$$

E[X(X-1)(X-2)\cdots(X-k+1)] = \sum_{j=1}^{k} S(k, j) E[X^j]

$$


## Factorial Moment Generating Function

The factorial moment generating function (FMGF) is a function that can be used to generate the factorial moments of a random variable. The FMGF is defined as:


$$

M_X(t) = E[t^X] = \sum_{x=0}^{\infty} t^x p(x)

$$


for discrete random variables, and


$$

M_X(t) = E[t^X] = \int_{-\infty}^{\infty} t^x f(x) dx

$$


for continuous random variables. The factorial moments can be obtained by taking the derivatives of the FMGF with respect to $t$ and evaluating the result at $t=1$:


$$

E[X(X-1)(X-2)\cdots(X-k+1)] = \left.\frac{d^k M_X(t)}{dt^k}\right|_{t=1}

$$


## Applications

Factorial moments have several applications in probability theory and statistics:

1. **Parameter estimation**: Factorial moments can be used to estimate the parameters of certain probability distributions, such as the Poisson distribution or the negative binomial distribution.

2. **Count data analysis**: Factorial moments are particularly useful for analyzing count data, as they can provide information about the distribution of counts in a sample.

3. **Moment problem**: Factorial moments can be used to solve the moment problem, which involves determining the probability distribution of a random variable given its moments.

4. **Cumulants**: Factorial moments are related to cumulants, another type of moments that are useful for characterizing the shape of a probability distribution.

In summary, factorial moments are a type of moments that involve the factorial of a random variable. They are related to the ordinary moments and can be obtained using the factorial moment generating function. Factorial moments have various applications in probability theory and statistics, such as parameter estimation, count data analysis, and solving the moment problem.
