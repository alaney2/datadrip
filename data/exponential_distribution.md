# Exponential Distribution

The exponential distribution is a probability distribution that describes the time between events in a Poisson process. It is a continuous distribution that has a single parameter, the rate parameter $\lambda > 0$, which determines the expected value and variance of the distribution.

## Probability Density Function

The probability density function (PDF) of the exponential distribution is given by:

$$f(x) = \begin{cases} \lambda e^{-\lambda x}, & x \geq 0 \\ 0, & x < 0 \end{cases}$$

where $x$ is a non-negative real number. The cumulative distribution function (CDF) of the exponential distribution is given by:

$$F(x) = \begin{cases} 1 - e^{-\lambda x}, & x \geq 0 \\ 0, & x < 0 \end{cases}$$

## Expected Value and Variance

The expected value (or mean) of the exponential distribution is given by:

$$E[X] = \frac{1}{\lambda}$$

and the variance of the exponential distribution is given by:

$$Var[X] = \frac{1}{\lambda^2}$$

## Applications

The exponential distribution is commonly used in reliability engineering to model the time between failures of a system. It is also used in queuing theory to model the time between arrivals of customers in a queue. In addition, the exponential distribution is a key component in the Poisson process, which is used to model the occurrence of rare events over time.

## Further Readings

- Poisson Distribution
- Gamma Distribution
- Weibull Distribution
- Normal Distribution
- Chi-Squared Distribution
