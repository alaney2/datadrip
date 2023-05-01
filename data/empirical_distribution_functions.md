# Empirical Distribution Functions

An **empirical distribution function (EDF)** is a non-parametric statistical technique used to estimate the probability distribution of a random variable based on a sample of observations. The EDF is a step function that assigns a probability of $1/n$ to each observation, where $n$ is the sample size, and increases by $1/n$ at each observation. 

The EDF is a useful tool for visualizing the distribution of a sample and comparing it to a hypothesized distribution. It can also be used to estimate summary statistics such as the mean, median, and variance of the sample. 

## Construction of the Empirical Distribution Function

Given a sample of $n$ observations $X_1, X_2, ..., X_n$ from a random variable $X$, the EDF $F_n(x)$ is defined as:

$$F_n(x) = \frac{1}{n} \sum_{i=1}^n I(X_i \leq x)$$

where $I(\cdot)$ is the indicator function, which takes the value 1 if its argument is true and 0 otherwise. 

The EDF is a non-decreasing step function that jumps by $1/n$ at each observation. At an observation $X_i$, $F_n(X_i)$ equals the proportion of observations that are less than or equal to $X_i$.

## Properties of the Empirical Distribution Function

The EDF has several important properties:

- **Consistency**: As the sample size $n$ increases, the EDF converges to the true distribution function of $X$ in probability. This means that the EDF becomes a better and better estimate of the true distribution as the sample size increases.

- **Bias**: The EDF is an unbiased estimator of the true distribution function of $X$. That is, the expected value of the EDF is equal to the true distribution function.

- **Efficiency**: The EDF is a very efficient estimator of the true distribution function of $X$. It is particularly useful when the true distribution is unknown or difficult to model parametrically.

- **Smoothness**: The EDF can be smoothed using techniques such as kernel density estimation or bootstrapping, which can improve its visual appearance and reduce noise.

## Applications of the Empirical Distribution Function

The EDF has many applications in statistics and data analysis, including:

- **Exploratory data analysis**: The EDF is a quick and easy way to visualize the distribution of a sample and identify any unusual or interesting features.

- **Hypothesis testing**: The EDF can be used to test whether a sample comes from a hypothesized distribution, such as a normal or exponential distribution.

- **Model selection**: The EDF can be used to compare the fit of different models to a sample, such as a normal distribution versus a t-distribution.

- **Survival analysis**: The EDF can be used to estimate the survival function of a population based on a sample of failure times.

- **Quantile estimation**: The EDF can be used to estimate the quantiles of a distribution, such as the median or the 95th percentile.

- **Non-parametric regression**: The EDF can be used as a basis for non-parametric regression techniques, such as kernel regression or local polynomial regression.

## Conclusion

Empirical distribution functions are a non-parametric statistical technique used to estimate the probability distribution of a random variable based on a sample of observations. The EDF is a step function that assigns a probability of $1/n$ to each observation, and increases by $1/n$ at each observation. The EDF is a useful tool for visualizing the distribution of a sample and comparing it to a hypothesized distribution. It can also be used to estimate summary statistics such as the mean, median, and variance of the sample. The EDF has many applications in statistics and data analysis, including exploratory data analysis, hypothesis testing, model selection, survival analysis, quantile estimation, and non-parametric regression.
