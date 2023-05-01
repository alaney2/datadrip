# Probability Density Functions

A probability density function (PDF) is a mathematical function that describes the probability distribution of a continuous random variable. It is used to specify the likelihood of observing a value within a given range of values. The PDF is a non-negative function, and the area under the curve integrates to 1 over the entire range of the random variable.

## Definition

Given a continuous random variable $X$, the PDF $f(x)$ is defined as:

$$
f(x) = \frac{d}{dx} F(x)
$$

where $F(x)$ is the cumulative distribution function (CDF) of $X$. The PDF gives the rate of change of the CDF with respect to $x$. In other words, the probability of $X$ being between $x$ and $x+dx$ is approximately $f(x)dx$.

## Properties

The PDF has several properties that are useful in probability theory and statistics:

- Non-negativity: $f(x) \geq 0$ for all $x$.
- Normalization: $\int_{-\infty}^{\infty} f(x) dx = 1$.
- Monotonicity: If $x_1 < x_2$, then $f(x_1) < f(x_2)$ if $f(x)$ is continuous.
- Maximum value: $f(x)$ is at a maximum when $x$ is the mode of the distribution.
- Expected value: The expected value of $X$ is defined as $\mathbb{E}[X] = \int_{-\infty}^{\infty} x f(x) dx$.
- Variance: The variance of $X$ is defined as $\textrm{Var}(X) = \mathbb{E}[(X-\mathbb{E}[X])^2] = \int_{-\infty}^{\infty} (x-\mathbb{E}[X])^2 f(x) dx$.

## Examples

Some common probability density functions include:

- Normal distribution: $f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$
- Uniform distribution: $f(x) = \frac{1}{b-a}$ if $a \leq x \leq b$, and 0 otherwise.
- Exponential distribution: $f(x) = \lambda e^{-\lambda x}$ if $x \geq 0$, and 0 otherwise.
- Beta distribution: $f(x) = \frac{1}{\textrm{B}(\alpha,\beta)} x^{\alpha-1} (1-x)^{\beta-1}$ if $0 \leq x \leq 1$, and 0 otherwise, where B is the beta function.

## Applications

Probability density functions have many applications in probability theory, statistics, and machine learning. Some examples include:

- Hypothesis testing: The PDF can be used to calculate the probability of observing a certain value or range of values of a random variable, given a null hypothesis.
- Estimation: The PDF can be used to estimate the parameters of a probability distribution, such as the mean and standard deviation of a normal distribution, using methods such as maximum likelihood estimation.
- Sampling: The PDF can be used to generate random samples from a probability distribution, such as using the inverse transform method or rejection sampling.
- Machine learning: The PDF can be used as a probability model in machine learning algorithms, such as Gaussian mixture models or kernel density estimators.

## Conclusion

Probability density functions are a fundamental concept in probability theory and statistics. They describe the probability distribution of a continuous random variable and have many applications in various fields, including machine learning.
