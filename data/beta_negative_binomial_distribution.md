# Beta Negative Binomial Distribution

The Beta Negative Binomial Distribution is a discrete probability distribution that models the number of successes in a fixed number of Bernoulli trials with a success probability that follows a Beta distribution. It is a compound distribution, meaning that it is formed by combining two other distributions: the Negative Binomial Distribution and the Beta Distribution.

## Negative Binomial Distribution

The Negative Binomial Distribution is a discrete probability distribution that models the number of failures before the $r$-th success in a sequence of Bernoulli trials, where each trial has a probability $p$ of success. The probability mass function (PMF) of the Negative Binomial Distribution is given by:


$$

P(X=k) = \binom{k+r-1}{k} p^r (1-p)^k

$$


where $X$ is the number of failures, $k$ is a non-negative integer, $r$ is the number of successes, and $p$ is the probability of success.

## Beta Distribution

The Beta Distribution is a continuous probability distribution defined on the interval $(0, 1)$, which is commonly used to model the distribution of probabilities. The probability density function (PDF) of the Beta Distribution is given by:


$$

f(p; \alpha, \beta) = \frac{p^{\alpha-1}(1-p)^{\beta-1}}{B(\alpha, \beta)}

$$


where $p$ is the probability, $\alpha$ and $\beta$ are shape parameters, and $B(\alpha, \beta)$ is the Beta function.

## Beta Negative Binomial Distribution

The Beta Negative Binomial Distribution is formed by assuming that the success probability $p$ in the Negative Binomial Distribution follows a Beta Distribution with parameters $\alpha$ and $\beta$. The PMF of the Beta Negative Binomial Distribution is given by:


$$

P(X=k) = \frac{B(k+\alpha, r+\beta)}{B(\alpha, \beta)} \binom{k+r-1}{k}

$$


where $X$ is the number of failures, $k$ is a non-negative integer, $r$ is the number of successes, and $B(\alpha, \beta)$ is the Beta function.

The mean and variance of the Beta Negative Binomial Distribution are given by:


$$

\mu = \frac{r\beta}{\alpha-1}

$$



$$

\sigma^2 = \frac{r\beta(\alpha+\beta-1)}{(\alpha-1)^2(\alpha-2)}

$$


## Maximum Likelihood Estimation

The parameters of the Beta Negative Binomial Distribution can be estimated using maximum likelihood estimation (MLE). Given a sample of data, the likelihood function is given by:


$$

L(\alpha, \beta, r) = \prod_{i=1}^n P(X=k_i)

$$


where $k_i$ is the number of failures in the $i$-th observation. The MLE estimates are the values of $\alpha$, $\beta$, and $r$ that maximize the likelihood function.

## Applications

The Beta Negative Binomial Distribution has several applications in various fields, such as:

1. Modeling overdispersed count data: In cases where the variance of the data is larger than the mean, the Beta Negative Binomial Distribution can be used to model the data more accurately than the Poisson or Negative Binomial distributions.

2. Bayesian statistics: The Beta Negative Binomial Distribution can be used as a conjugate prior for the Negative Binomial Distribution in Bayesian analysis.

3. Reliability analysis: The Beta Negative Binomial Distribution can be used to model the number of failures before a specified number of successes in systems with varying success probabilities.

4. Genetics: The Beta Negative Binomial Distribution can be used to model the distribution of the number of mutations in DNA sequences.

5. Queueing theory: The Beta Negative Binomial Distribution can be used to model the number of customers arriving at a service facility before a specified number of customers are served.
