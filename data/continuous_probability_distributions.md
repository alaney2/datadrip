# Continuous Probability Distributions

Continuous probability distributions are used to describe the probabilities of outcomes for continuous random variables. A continuous random variable can take on any value within a specified range, and the probability of any specific value is zero. Instead, probabilities are assigned to intervals of values. Continuous probability distributions are characterized by a probability density function (PDF) and a cumulative distribution function (CDF).

## Probability Density Function

The probability density function (PDF) of a continuous random variable is a function that describes the relative likelihood of the variable taking on a specific value. The PDF is denoted by $f(x)$, where $x$ is the value of the random variable. The PDF has the following properties:

1. $f(x) \ge 0$ for all $x$ in the domain of the random variable.
2. The integral of the PDF over the entire domain of the random variable is equal to 1, i.e., $\int_{-\infty}^{\infty} f(x) dx = 1$.

The probability of the random variable falling within a specific interval is given by the integral of the PDF over that interval. For example, the probability of a continuous random variable $X$ falling within the interval $[a, b]$ is given by:


$$

P(a \le X \le b) = \int_{a}^{b} f(x) dx

$$


## Cumulative Distribution Function

The cumulative distribution function (CDF) of a continuous random variable is a function that describes the probability that the random variable takes on a value less than or equal to a specific value. The CDF is denoted by $F(x)$, where $x$ is the value of the random variable. The CDF is defined as:


$$

F(x) = P(X \le x) = \int_{-\infty}^{x} f(t) dt

$$


The CDF has the following properties:

1. $F(x)$ is a non-decreasing function of $x$.
2. $\lim_{x \to -\infty} F(x) = 0$ and $\lim_{x \to \infty} F(x) = 1$.

The PDF can be obtained from the CDF by taking the derivative of the CDF with respect to $x$:


$$

f(x) = \frac{dF(x)}{dx}

$$


## Moments of Distributions

The moments of a continuous probability distribution are quantities that describe various aspects of the distribution, such as its central tendency, dispersion, and shape. The $n$-th moment of a continuous random variable $X$ with PDF $f(x)$ is defined as:


$$

E[X^n] = \int_{-\infty}^{\infty} x^n f(x) dx

$$


The first moment, $E[X]$, is the mean of the distribution, which represents the central tendency of the distribution. The second central moment, $E[(X - E[X])^2]$, is the variance of the distribution, which represents the dispersion of the distribution. The square root of the variance is the standard deviation.

Higher-order moments can be used to describe the shape of the distribution, such as skewness (third standardized moment) and kurtosis (fourth standardized moment).

## Common Continuous Probability Distributions

There are several common continuous probability distributions that are widely used in various applications. Some of these distributions include:

1. Normal distribution: A symmetric bell-shaped distribution characterized by its mean and standard deviation. It is widely used in statistics and natural sciences due to the central limit theorem.
2. Exponential distribution: A distribution that models the time between events in a Poisson process, characterized by its rate parameter.
3. Uniform distribution: A distribution where all values within a specified range have equal probability.
4. Beta distribution: A distribution defined on the interval [0, 1] and characterized by two shape parameters. It is commonly used in Bayesian statistics and as a prior distribution for probabilities.
5. Gamma distribution: A distribution characterized by a shape and a scale parameter. It is used to model waiting times and as a prior distribution in Bayesian statistics.
6. t-distribution: A distribution similar to the normal distribution but with heavier tails, characterized by its degrees of freedom. It is used in hypothesis testing and constructing confidence intervals when the population variance is unknown.
7. Chi-square distribution: A distribution of the sum of squared independent standard normal random variables, characterized by its degrees of freedom. It is used in hypothesis testing and goodness-of-fit tests.
8. F-distribution: A distribution of the ratio of two independent chi-square random variables, characterized by two degrees of freedom parameters. It is used in hypothesis testing and analysis of variance (ANOVA).

Each of these distributions has its own PDF and CDF, as well as specific properties and applications.
