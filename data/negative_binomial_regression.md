# Negative Binomial Regression

Negative binomial regression is a type of generalized linear model (GLM) used to model count data when the variance is greater than the mean, a phenomenon known as overdispersion. It is an extension of Poisson regression and is particularly useful when the data exhibits overdispersion, which is not accounted for in Poisson regression models.

## Introduction

In many applications involving count data, such as the number of accidents at an intersection, the number of defects in a manufactured product, or the number of goals scored in a soccer match, the Poisson distribution is often used to model the data. However, the Poisson distribution assumes that the mean and variance of the data are equal, which is not always the case in real-world scenarios. When the variance is greater than the mean, the data is said to be overdispersed, and using a Poisson regression model may lead to biased estimates and incorrect inferences.

Negative binomial regression is an alternative to Poisson regression that can account for overdispersion in the data. It is based on the negative binomial distribution, which is a more flexible distribution that allows for the variance to be different from the mean.

## Negative Binomial Distribution

The negative binomial distribution is a discrete probability distribution that models the number of successes in a sequence of independent Bernoulli trials before a specified number of failures occur. It has two parameters: the number of failures ($r$) and the probability of success in each trial ($p$). The probability mass function (PMF) of the negative binomial distribution is given by:


$$

P(X=k) = \binom{k+r-1}{k} p^k (1-p)^r

$$


where $X$ is the number of successes, $k$ is a non-negative integer, and $\binom{n}{k}$ is the binomial coefficient.

The mean and variance of the negative binomial distribution are:


$$

\mu = \frac{rp}{1-p}

$$



$$

\sigma^2 = \frac{rp}{(1-p)^2}

$$


As can be seen from the variance formula, the negative binomial distribution allows for the variance to be different from the mean, making it suitable for modeling overdispersed count data.

## Negative Binomial Regression Model

In negative binomial regression, the response variable $Y$ is assumed to follow a negative binomial distribution with mean $\mu$ and a dispersion parameter $\alpha$. The mean is related to the predictor variables $X$ through a link function, typically the logarithm:


$$

\log(\mu) = X\beta

$$


where $\beta$ is a vector of regression coefficients. The dispersion parameter $\alpha$ is assumed to be constant across all observations.

The likelihood function for the negative binomial regression model is given by:


$$

L(\beta, \alpha) = \prod_{i=1}^n \binom{y_i + \frac{1}{\alpha} - 1}{y_i} p_i^{y_i} (1-p_i)^{\frac{1}{\alpha}}

$$


where $n$ is the number of observations, $y_i$ is the observed count for observation $i$, and $p_i$ is the probability of success for observation $i$.

The parameters $\beta$ and $\alpha$ are typically estimated using maximum likelihood estimation (MLE). The log-likelihood function is maximized with respect to the parameters, and standard errors for the estimates can be obtained using the observed information matrix.

## Model Interpretation

The interpretation of the coefficients in a negative binomial regression model is similar to that of a Poisson regression model. The coefficients represent the change in the log of the expected count for a one-unit increase in the corresponding predictor variable, holding all other predictor variables constant. To obtain the change in the expected count, the coefficients can be exponentiated:


$$

\text{Incidence Rate Ratio (IRR)} = e^{\beta_j}

$$


The IRR represents the multiplicative change in the expected count for a one-unit increase in the predictor variable $X_j$.

## Model Diagnostics

Model diagnostics for negative binomial regression include checking for overdispersion, assessing the goodness-of-fit, and checking for influential observations. The dispersion parameter $\alpha$ can be used to assess overdispersion; if $\alpha$ is close to zero, the data may not be overdispersed, and a Poisson regression model may be more appropriate. Goodness-of-fit can be assessed using deviance and Pearson chi-square statistics, as well as comparing the observed and predicted counts. Influential observations can be identified using leverage and Cook's distance measures.

## Conclusion

Negative binomial regression is a useful tool for modeling count data when overdispersion is present. It extends the Poisson regression model by allowing for a more flexible distribution of the response variable, leading to more accurate estimates and inferences. When analyzing count data, it is important to consider the possibility of overdispersion and assess the appropriateness of using a negative binomial regression model.
