# Lognormal Distribution

The lognormal distribution is a continuous probability distribution of a random variable whose logarithm follows a normal distribution. It is often used to model data that is inherently non-negative and skewed, such as the size of populations, income, and stock prices.

## Definition

A lognormal distribution with parameters $\mu$ and $\sigma$ is denoted as $X\sim \text{Lognormal}(\mu,\sigma)$ and has the following probability density function:

$$f_X(x)=\frac{1}{x\sigma\sqrt{2\pi}}e^{-\frac{(\ln x-\mu)^2}{2\sigma^2}}\qquad x>0$$

where $\mu$ is the mean of the random variable's natural logarithm, and $\sigma$ is the standard deviation of its logarithm.

Its cumulative distribution function is:

$$F_X(x)=\frac{1}{2}+\frac{1}{2}\text{erf}\left(\frac{\ln x-\mu}{\sigma\sqrt{2}}\right)\qquad x>0$$

where $\text{erf}(x)$ is the error function.

## Properties

The lognormal distribution has several notable properties:

- The mean and variance of a lognormal distribution are:

$$\mathbb{E}[X]=e^{\mu+\frac{\sigma^2}{2}}$$

$$\text{Var}[X]=(e^{\sigma^2}-1)e^{2\mu+\sigma^2}$$

- Its shape is heavily influenced by the parameters $\mu$ and $\sigma$. When $\mu$ is fixed, increasing $\sigma$ leads to a wider and more skewed distribution.
- It is a positively skewed distribution with a long right tail. As $x$ increases, the probability density function decreases slowly but steadily.
- The lognormal distribution is related to the normal distribution by the relationship:

$$\ln X\sim \text{Normal}(\mu,\sigma^2)$$

## Applications

The lognormal distribution has many applications in various fields, including finance, biology, and engineering. Some examples include:

- Modeling stock prices, where the logarithmic returns follow a normal distribution but the prices themselves follow a lognormal distribution.
- Modeling the size of biological populations, where growth is proportional to the current size and the probability of death is constant.
- Modeling the duration of time between events that occur randomly but whose logarithms are normally distributed.

## References

- Johnson, N. L., Kotz, S., & Balakrishnan, N. (1994). Continuous univariate distributions, Vol. 1 (2nd ed.). Wiley.
- Ross, S. M. (2014). Introduction to probability and statistics for engineers and scientists (5th ed.). Elsevier.
- Wikipedia. (2021). Log-normal distribution. https://en.wikipedia.org/wiki/Log-normal_distribution
