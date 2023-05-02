# Chi Squared Distribution

The Chi Squared Distribution is a continuous probability distribution that is widely used in statistical inference. It is used in a variety of applications, including hypothesis testing, goodness-of-fit tests, and analysis of variance.

## Definition

The Chi Squared Distribution with k degrees of freedom is denoted by χ^2(k). It is defined as the distribution of the sum of the squares of k independent standard normal random variables. That is, if Z1, Z2, ..., Zk are independent standard normal random variables, then the random variable X = Z1^2 + Z2^2 + ... + Zk^2 follows a Chi Squared Distribution with k degrees of freedom.

The probability density function (PDF) of the Chi Squared Distribution with k degrees of freedom is given by:

$$f(x) = \frac{1}{2^{k/2}\Gamma(k/2)}x^{k/2-1}e^{-x/2}$$

where Γ is the gamma function.

## Properties

The Chi Squared Distribution has the following properties:

- The mean of the Chi Squared Distribution with k degrees of freedom is k.
- The variance of the Chi Squared Distribution with k degrees of freedom is 2k.
- The Chi Squared Distribution is skewed to the right for k ≤ 2 and becomes more symmetric as k increases.
- As k approaches infinity, the Chi Squared Distribution approaches a normal distribution with mean k and variance 2k.

## Applications

The Chi Squared Distribution is used in a variety of statistical inference applications, including:

- Hypothesis testing: The Chi Squared Distribution is used to test whether a sample comes from a specified distribution. For example, it can be used to test whether a set of observations is normally distributed or whether two or more samples come from the same population.
- Goodness-of-fit tests: The Chi Squared Distribution is used to test whether a set of observations comes from a specified distribution. For example, it can be used to test whether a set of observed frequencies matches a set of expected frequencies.
- Analysis of variance (ANOVA): The Chi Squared Distribution is used to test for differences between two or more groups in a study. It can be used to test whether the means of the groups are equal or whether the variances of the groups are equal.

## Conclusion

The Chi Squared Distribution is a useful probability distribution in statistical inference. It is used in a variety of applications, including hypothesis testing, goodness-of-fit tests, and analysis of variance. Understanding the properties of the Chi Squared Distribution is important for anyone working in statistics or data science.
