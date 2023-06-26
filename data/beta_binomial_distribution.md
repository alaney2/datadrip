# Beta Binomial Distribution

The Beta Binomial Distribution is a discrete probability distribution that arises in Bayesian statistics when the binomial distribution is combined with the beta distribution as a conjugate prior. It is a generalization of the binomial distribution and is used to model the number of successes in a fixed number of Bernoulli trials with a probability of success that follows a beta distribution.

## Definition

Suppose we have a sequence of $n$ independent Bernoulli trials, each with a probability of success $p$. The binomial distribution models the number of successes $k$ in these $n$ trials. Now, if the probability of success $p$ is not fixed but follows a beta distribution with parameters $\alpha$ and $\beta$, then the distribution of the number of successes $k$ is given by the beta binomial distribution.

The probability mass function (PMF) of the beta binomial distribution is given by:


$$

P(K=k) = \binom{n}{k} \frac{B(k+\alpha, n-k+\beta)}{B(\alpha, \beta)}

$$


where $k = 0, 1, 2, ..., n$, $B(\alpha, \beta)$ is the beta function, and $\binom{n}{k}$ is the binomial coefficient.

## Properties

The beta binomial distribution has several properties that are useful in various applications:

1. **Mean**: The mean of the beta binomial distribution is given by:


$$

\mu = n \frac{\alpha}{\alpha + \beta}

$$


2. **Variance**: The variance of the beta binomial distribution is given by:


$$

\sigma^2 = n \frac{\alpha \beta}{(\alpha + \beta)^2 (\alpha + \beta + 1)}

$$


3. **Mode**: The mode of the beta binomial distribution is given by:


$$

\text{mode} = \left\lfloor \frac{(n+1)(\alpha-1)}{\alpha+\beta-2} \right\rfloor

$$


4. **Skewness**: The skewness of the beta binomial distribution is given by:


$$

\text{skewness} = \frac{2(\beta - \alpha) \sqrt{\alpha + \beta + n}}{(\alpha + \beta + 2n) \sqrt{n \alpha \beta (\alpha + \beta + 1)}}

$$


5. **Excess Kurtosis**: The excess kurtosis of the beta binomial distribution is given by:


$$

\text{excess kurtosis} = \frac{6[(\alpha - \beta)^2 (\alpha + \beta + 1) - \alpha \beta (\alpha + \beta + 2)]}{n \alpha \beta (\alpha + \beta + 2)(\alpha + \beta + 3)}

$$


## Applications

The beta binomial distribution has various applications in different fields, such as:

1. **Bayesian statistics**: The beta binomial distribution is used in Bayesian statistics as a conjugate prior for the binomial distribution. This allows for easy updating of the posterior distribution when new data is observed.

2. **Hierarchical models**: The beta binomial distribution can be used as a building block for more complex hierarchical models, where the probability of success in a binomial distribution is not fixed but depends on some other random variable.

3. **Overdispersion**: The beta binomial distribution can be used to model overdispersion in count data, where the variance is greater than the mean. This is a common issue in generalized linear models with a binomial distribution, and using a beta binomial distribution can help account for this overdispersion.

4. **Reliability analysis**: The beta binomial distribution can be used to model the number of failures in a system with a fixed number of components, where the probability of failure for each component follows a beta distribution. This can be useful in reliability analysis and quality control.

5. **Genetics**: The beta binomial distribution has been used in genetics to model the distribution of the number of minor alleles in a population, where the probability of having a minor allele follows a beta distribution. This can be useful in studying the genetic diversity of a population and the effects of selection and mutation.
