# Chi Square Distribution

The Chi Square distribution is a probability distribution that is widely used in statistical inference for hypothesis testing. It is characterized by a single parameter, the degrees of freedom, which determines its shape. 

## Definition

The Chi Square distribution is the distribution of the sum of the squares of independent standard normal random variables. Let $Z_1, Z_2, \dots, Z_k$ be independent standard normal random variables, then the sum of their squares $Q = \sum_{i=1}^k Z_i^2$ follows a Chi Square distribution with $k$ degrees of freedom, denoted as $Q\sim\chi^2(k)$.

## Probability Density Function

The probability density function (PDF) of the Chi Square distribution with $k$ degrees of freedom is given by:

$$f(x;k) = \frac{1}{2^{k/2}\Gamma(k/2)}x^{k/2-1}e^{-x/2}, \quad x > 0$$

where $\Gamma(\cdot)$ is the gamma function.

## Properties

1. Expectation and Variance:

The expected value and variance of a Chi Square distribution with $k$ degrees of freedom are:

$$\mathrm{E}[X] = k$$

$$\mathrm{Var}[X] = 2k$$

2. Moments:

The $r$-th moment of a Chi Square distribution with $k$ degrees of freedom is given by:

$$\mathrm{E}[X^r] = \frac{(2r)!!}{2^rr!}k^r$$

where $(2r)!!$ is the double factorial.

3. Central Limit Theorem:

The Chi Square distribution arises as a special case of the central limit theorem. Specifically, if $X_1, X_2, \dots, X_n$ are independent and identically distributed random variables with mean $\mu$ and variance $\sigma^2$, then the distribution of the standardized sum of squares $\frac{\sum_{i=1}^n(X_i-\mu)^2}{\sigma^2}$ converges to a Chi Square distribution with $n$ degrees of freedom as $n$ approaches infinity.

## Applications

The Chi Square distribution has many applications in statistical inference. Some of the key applications are:

1. Hypothesis Testing:

The Chi Square distribution is used to test hypotheses about the variances of normal populations, as well as to test for independence in contingency tables.

2. Goodness of Fit Tests:

The Chi Square distribution is used in goodness of fit tests to determine whether a set of observed data is consistent with a specific theoretical distribution.

3. Confidence Intervals:

The Chi Square distribution is used to construct confidence intervals for the variances of normal populations.

## Further Readings

- Student's t Distribution
- F Distribution
- Central Limit Theorem.
