# Gamma Distribution

The **gamma distribution** is a continuous probability distribution that models the time until a specified number of events occur in a Poisson process. It is also used to model the waiting time until a certain amount of continuous time has passed, among other things.

## Probability Density Function

The probability density function of the gamma distribution with shape parameter $\alpha$ and rate parameter $\beta$ is given by:

$$
f(x) = \frac{\beta^\alpha}{\Gamma(\alpha)} x^{\alpha - 1} e^{-\beta x}
$$

where $\Gamma$ is the gamma function, defined as:

$$
\Gamma(\alpha) = \int_0^\infty t^{\alpha-1} e^{-t}dt
$$

The mean and variance of the gamma distribution are given by:

$$
\text{E}[X] = \frac{\alpha}{\beta}
$$

$$
\text{Var}[X] = \frac{\alpha}{\beta^2}
$$

## Properties

- The gamma distribution is a two-parameter family of distributions, where $\alpha$ controls the shape and $\beta$ controls the scale.
- When the shape parameter $\alpha$ is an integer, the gamma distribution reduces to the Erlang distribution, which models the time until a specified number of events occur in a Poisson process.
- When the shape parameter $\alpha = 1$, the gamma distribution reduces to the exponential distribution, which models the waiting time until a single event occurs in a Poisson process.
- When the shape parameter $\alpha$ is greater than one, the gamma distribution is skewed to the right.
- When the shape parameter $\alpha$ is less than one, the gamma distribution is skewed to the left.
- The gamma distribution is a conjugate prior to the inverse scale parameter of the normal distribution in Bayesian inference.

## Applications

- In reliability engineering, the gamma distribution is used to model the time until a failure occurs.
- In queuing theory, the gamma distribution is used to model the time between arrivals in a Poisson process.
- In finance, the gamma distribution is used to model the distribution of stock prices.
- In machine learning, the gamma distribution is used as a prior distribution for Bayesian regression models.

## Further Readings

- Chi-Squared Distribution
- Weibull Distribution
- Log-Normal Distribution
- Dirichlet Distribution
- Gamma Process
- Probability Theory
- Statistical Inference
- Time Series Analysis
