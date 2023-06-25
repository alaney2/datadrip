# Quantile Functions

Quantile functions, also known as inverse cumulative distribution functions or percent-point functions, are used to determine the value of a random variable corresponding to a given probability. In other words, given a probability $p$, the quantile function returns the value $x$ such that the probability of the random variable being less than or equal to $x$ is equal to $p$. Quantile functions are the inverse of cumulative distribution functions (CDFs) and are widely used in statistics, probability theory, and machine learning.

## Definition

Let $X$ be a continuous random variable with probability density function (PDF) $f_X(x)$ and cumulative distribution function (CDF) $F_X(x)$. The quantile function $Q_X(p)$ is defined as:


$$

Q_X(p) = F_X^{-1}(p) = \inf\{x \in \mathbb{R} : F_X(x) \geq p\}

$$


for $0 \leq p \leq 1$. The quantile function $Q_X(p)$ returns the value $x$ such that $P(X \leq x) = p$. In the case of a discrete random variable, the quantile function is defined similarly, but the infimum is replaced with the minimum.

## Properties

1. **Monotonicity**: The quantile function is non-decreasing, i.e., if $p_1 \leq p_2$, then $Q_X(p_1) \leq Q_X(p_2)$.
2. **Continuity**: If the CDF $F_X(x)$ is continuous, then the quantile function $Q_X(p)$ is also continuous.
3. **Inverse relationship**: The quantile function is the inverse of the CDF, i.e., $Q_X(F_X(x)) = x$ and $F_X(Q_X(p)) = p$ for all $x$ and $p$ in their respective domains.
4. **Symmetry**: If $X$ is a symmetric random variable with respect to a point $a$, i.e., $f_X(a - x) = f_X(a + x)$ for all $x$, then the quantile function is also symmetric with respect to $a$, i.e., $Q_X(1 - p) = a - Q_X(p)$ for all $p$.

## Quantiles and Percentiles

Quantiles are specific values of the quantile function that divide the probability distribution of a random variable into equal intervals. For example, the median is the value of the quantile function at $p = 0.5$, i.e., $Q_X(0.5)$. The quartiles divide the distribution into four equal parts, with the first quartile being $Q_X(0.25)$, the second quartile (median) being $Q_X(0.5)$, and the third quartile being $Q_X(0.75)$.

Percentiles are another way to express quantiles and are defined as the value of the quantile function at $p = k/100$, where $k$ is an integer between 1 and 99. For example, the 25th percentile is the value of the quantile function at $p = 0.25$, i.e., $Q_X(0.25)$.

## Applications

Quantile functions have numerous applications in statistics, probability theory, and machine learning, including:

1. **Descriptive statistics**: Quantiles and percentiles are used to summarize the distribution of a dataset and provide information about its central tendency, dispersion, and shape.
2. **Hypothesis testing**: Quantile functions are used to determine critical values for hypothesis tests, such as the Student's t-test, chi-square test, and F-test.
3. **Confidence intervals**: Quantile functions are used to construct confidence intervals for population parameters, such as the mean, variance, and proportion.
4. **Quantile regression**: Quantile functions are used in quantile regression, a statistical technique that models the relationship between a response variable and one or more predictor variables at different quantiles of the response variable's distribution.
5. **Risk assessment**: Quantile functions are used in finance and insurance to estimate the probability of extreme events, such as large losses or gains, and to determine risk measures, such as value at risk (VaR) and conditional value at risk (CVaR).

## Estimation

In practice, the true quantile function of a random variable is often unknown and must be estimated from a sample of data. There are several methods for estimating the quantile function, including:

1. **Empirical quantile function**: The empirical quantile function is a non-parametric estimator of the true quantile function based on the sample data. It is defined as:


$$

\hat{Q}_X(p) = \frac{1}{n} \sum_{i=1}^n I(X_i \leq x)

$$


where $n$ is the sample size, $X_i$ are the sample observations, and $I(\cdot)$ is the indicator function.

2. **Parametric estimation**: If the distribution of the random variable is assumed to belong to a parametric family, such as the normal, exponential, or gamma distribution, the quantile function can be estimated by fitting the parameters of the distribution to the sample data and using the corresponding parametric quantile function.

3. **Kernel estimation**: Kernel estimation is a non-parametric method that estimates the quantile function by smoothing the empirical quantile function using a kernel function, such as the Gaussian, Epanechnikov, or biweight kernel. The kernel estimator of the quantile function is defined as:


$$

\hat{Q}_X(p) = \frac{1}{n} \sum_{i=1}^n K_h(X_i - x)

$$


where $K_h(\cdot)$ is the kernel function with bandwidth $h$.

4. **Quantile-quantile (QQ) plot**: A QQ plot is a graphical method for comparing the quantile functions of two random variables or for assessing the goodness-of-fit of a parametric distribution to a sample of data. The QQ plot is constructed by plotting the sample quantiles of one variable against the sample quantiles of the other variable or the theoretical quantiles of the parametric distribution. If the points in the QQ plot lie approximately on a straight line, the quantile functions are similar or the parametric distribution is a good fit to the data.
