# Zero Inflated Negative Binomial Distribution

The Zero Inflated Negative Binomial (ZINB) distribution is a statistical model used to describe count data that has an excess of zero observations compared to what would be expected under a standard Negative Binomial distribution. It is a mixture model that combines a Negative Binomial distribution with a point mass at zero. The ZINB distribution is particularly useful for modeling overdispersed count data, where the variance is greater than the mean.

## Definition

The probability mass function (PMF) of the ZINB distribution is given by:


$$

P(Y = y) = \begin{cases}
    \pi + (1 - \pi) \cdot p^r & \text{if } y = 0 \\
    (1 - \pi) \cdot \frac{\Gamma(y + r)}{y! \Gamma(r)} \cdot p^r (1 - p)^y & \text{if } y > 0
\end{cases}

$$


where $Y$ is the count variable, $y \in \{0, 1, 2, \dots\}$, $\pi \in [0, 1]$ is the probability of an extra zero, $r > 0$ is the dispersion parameter, $p \in (0, 1)$ is the success probability, and $\Gamma(\cdot)$ is the gamma function.

The ZINB distribution can be thought of as a two-component mixture model, where the first component is a point mass at zero with probability $\pi$, and the second component is a Negative Binomial distribution with parameters $r$ and $p$ with probability $1 - \pi$.

## Estimation

The parameters of the ZINB distribution can be estimated using maximum likelihood estimation (MLE). The log-likelihood function for a sample of size $n$ is given by:


$$

\ell(\pi, r, p) = \sum_{i=1}^n \log P(Y_i = y_i)

$$


where $Y_i$ is the $i$-th observation in the sample. The MLE estimates of the parameters can be obtained by maximizing the log-likelihood function with respect to the parameters:


$$

(\hat{\pi}, \hat{r}, \hat{p}) = \arg\max_{\pi, r, p} \ell(\pi, r, p)

$$


In practice, the MLE estimates can be computed using numerical optimization algorithms, such as the Newton-Raphson method or the expectation-maximization (EM) algorithm.

## Applications

The ZINB distribution has been widely used in various fields, including:

1. Ecology: modeling the abundance of species in different habitats, where zero counts can be due to the absence of the species or the failure to detect them.
2. Health sciences: modeling the number of disease occurrences in a population, where zero counts can be due to the absence of the disease or underreporting.
3. Economics: modeling the number of insurance claims, where zero counts can be due to the absence of claims or the failure to report them.

In these applications, the ZINB distribution provides a flexible and interpretable model for count data with excess zeros and overdispersion.

## Comparison with Zero Inflated Poisson Distribution

The Zero Inflated Poisson (ZIP) distribution is another model for count data with excess zeros. It is a mixture model that combines a Poisson distribution with a point mass at zero. The main difference between the ZINB and ZIP distributions is that the ZINB distribution can accommodate overdispersed count data, while the ZIP distribution assumes that the mean and variance of the count data are equal.

In practice, model selection techniques, such as the Akaike Information Criterion (AIC) or the Bayesian Information Criterion (BIC), can be used to choose between the ZINB and ZIP distributions based on the goodness-of-fit to the data.

## Conclusion

The Zero Inflated Negative Binomial distribution is a useful statistical model for count data with excess zeros and overdispersion. It is a mixture model that combines a Negative Binomial distribution with a point mass at zero, allowing for a flexible and interpretable representation of the data. The parameters of the ZINB distribution can be estimated using maximum likelihood estimation, and the model can be applied in various fields, such as ecology, health sciences, and economics.
